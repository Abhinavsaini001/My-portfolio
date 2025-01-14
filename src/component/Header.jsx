import React, { useState, useEffect } from "react";

// Header Component
function Newheader() {
  return (
    <div className='md:w-2/4 text-center md:text-left md:text-6xl text-4xl font-bold text-white md:pt-40 pt-24 mx-2'>
            <h1 className="mx-10">Hello! I'm<br/><span className='text-[#FF014F]'>Abhinav Saini</span></h1>
            <AutoTextSwitcher/>
            <div className='bg-[#292b2e] cursor-pointer text-xl p-3 px-10 m-3 mx-8 text-[#FF014F] absolute'>
              <button className="">Hire me</button>
            </div>
    </div>
  );
}

// AutoTextSwitcher Component with Full Text Removal
function AutoTextSwitcher() {
  const texts = [" Frontend Developer", " UI/UX Designer"];
  const [displayText, setDisplayText] = useState("");
  const [index, setIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const typingSpeed = 100; // Speed for typing letters
  const deletingSpeed = 50; // Speed for deleting letters
  const pauseBetweenTexts = 1000; // Pause before switching text

  useEffect(() => {
    const currentText = texts[index];
    let timer;

    if (isDeleting) {
      timer = setTimeout(() => {
        setDisplayText(currentText.substring(0, displayText.length - 1));
        if (displayText.length === 0) {
          setIsDeleting(false);
          setIndex((prevIndex) => (prevIndex + 1) % texts.length);
        }
      }, deletingSpeed);
    } else {
      timer = setTimeout(() => {
        setDisplayText(currentText.substring(0, displayText.length + 1));
        if (displayText.length === currentText.length) {
          setTimeout(() => setIsDeleting(true), pauseBetweenTexts);
        }
      }, typingSpeed);
    }

    return () => clearTimeout(timer);
  }, [displayText, isDeleting, index, texts]);

  return (
    <div className="p-4">
      <p className="text-white text-2xl mx-7">A{displayText}</p>
    </div>
  );
}

export default Newheader;
