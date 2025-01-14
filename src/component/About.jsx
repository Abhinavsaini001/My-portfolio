import React from "react";

const About = () => {
  return (
    <div className="flex items-center justify-center min-h-screen px-8">
      {/* Left Side: Image Section */}
      <div className="w-2/5 relative">
        <img
          className="w-full h-auto rounded-xl object-cover shadow-lg"src="/about.jpg"/>
      </div>

      {/* Right Side: Text Section */}
      <div className="w-3/5 p-8 text-white">
        <h2 className="text-3xl font-bold mb-4">Creative Design Showcase</h2>
        <p className="text-lg leading-relaxed">
          Discover innovative designs, creative concepts, and inspiring ideas
          that push the boundaries of visual storytelling.
        </p>
      </div>
    </div>
  );
};

export default About;
