import React, { useState, useEffect } from "react";

// Header Component
function Header() {
  return (
    <div className="flex flex-col-reverse md:flex-row items-center justify-between min-h-screen px-8 bg-[#202327]">
      {/* Left Section: Text and Button */}
      <div className="md:w-1/2 w-full text-white font-bold flex flex-col justify-center md:pl-14">
        <h1 className="text-4xl md:text-6xl mb-4">
          Hello! I'm<br />
          <span className="text-[#FF014F]">Abhinav Saini</span>
        </h1>
        <AutoTextSwitcher />
        <div className="bg-[#292b2e] cursor-pointer text-xl py-2 px-6 mt-72 inline-block text-[#FF014F] rounded-md shadow-md hover:shadow-lg absolute">
          <button>Hire me</button>
        </div>
      </div>

      {/* Right Section: Image */}
      <div className="md:w-1/2 w-full flex justify-center md:pr-16">
        <img 
          src="https://via.placeholder.com/200?text=Boy+Image" 
          alt="Boy Illustration" 
          className="w-3/4 md:w-2/3 rounded-lg shadow-lg"
        />
      </div>
    </div>
  );
}

// AutoTextSwitcher Component
function AutoTextSwitcher() {
  const texts = [" Frontend Developer", " UI/UX Designer"];
  const [displayText, setDisplayText] = useState("");
  const [index, setIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const typingSpeed = 100;
  const deletingSpeed = 50;
  const pauseBetweenTexts = 1500;

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
    <div className="mt-2">
      <p className="text-white text-2xl">A{displayText}</p>
    </div>
  );
}

export default Header;
