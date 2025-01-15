import React from "react";

const About = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center min-h-screen px-8 py-16 bg-[#202327] text-white">
      {/* Image Section */}
      <div className="md:w-2/5 w-full max-w-sm mb-12 md:mb-0">
        <div className="rounded-xl overflow-hidden shadow-lg bg-[#292b2e]">
          <img 
            className="w-full h-auto" 
            src="https://th.bing.com/th/id/OIP.9z7442l97t0C8f6YYzlkTAAAAA?pid=ImgDet&w=208&h=283&c=7&dpr=1.5" 
            alt="About Me" 
          />
        </div>
      </div>

      {/* Text Section */}
      <div className="md:w-3/5 w-full px-4 text-center md:text-left">
        <h4 className="text-[#FF014F] mb-4 text-lg py-2">About Me</h4>
        <h2 className="text-3xl md:text-5xl font-bold mb-6">Abhinav Saini</h2>
        <p className="text-gray-400 text-sm md:text-lg leading-relaxed mb-6">
          I am a passionate UI/UX designer and frontend developer with expertise in creating seamless and engaging digital experiences. My skill set includes proficiency in React, Tailwind CSS, JavaScript, and Figma, enabling me to design user-friendly interfaces and develop responsive, functional web applications.
        </p>
        <p className="text-gray-400 text-sm md:text-lg leading-relaxed">
          With a user-centered design approach and strong development knowledge, I ensure that my projects strike the perfect balance between functionality and aesthetics. Whether collaborating with teams or working independently, I am driven by a commitment to innovation, problem-solving, and continuous learning to stay at the forefront of the ever-evolving digital landscape.
        </p>
      </div>
    </div>
  );
};

export default About;
