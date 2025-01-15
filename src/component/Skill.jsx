import React from "react";

const skills = [
  { name: "React", level: "70%", color: "bg-gradient-to-r from-blue-300 to-blue-400" },
  { name: "Tailwind CSS", level: "85%", color: "bg-gradient-to-r from-teal-200 to-teal-300" },
  { name: "JavaScript", level: "78%", color: "bg-gradient-to-r from-yellow-200 to-yellow-300" },
  { name: "Figma", level: "90%", color: "bg-gradient-to-r from-purple-300 to-purple-400" },
  { name: "Canva", level: "99%", color: "bg-gradient-to-r from-pink-200 to-pink-300" },
];

const Skill = () => {
  return (
    <div className="min-h-screen flex flex-col md:flex-row items-center justify-between bg-[#202327] text-white py-16 px-8">
      {/* Left Section: Skills */}
      <div className="md:w-1/2 w-full">
        <h2 className="text-4xl font-bold mb-8 animate-fadeIn">My Skills</h2>
        <div className="w-full space-y-4">
          {skills.map((skill, index) => (
            <div key={index} className="animate-slideIn">
              <div className="flex justify-between mb-1">
                <span className="text-sm md:text-base font-semibold">{skill.name}</span>
                <span className="text-sm md:text-base font-semibold">{skill.level}</span>
              </div>
              <div className="w-full bg-gray-600 rounded-full h-4 shadow-md">
                <div
                  className={`h-4 rounded-full ${skill.color} transition-all duration-700`}
                  style={{ width: skill.level }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Right Section: Image */}
      <div className="md:w-1/2 w-full mt-8 md:mt-0 flex justify-center">
        <img
          src="https://th.bing.com/th/id/OIP.TATlU5h5hpcaC9OIk8ciEAAAAA?pid=ImgDet&w=208&h=267&c=7&dpr=1.5"
          alt="Illustration"
          className="w-full md:w-3/4 rounded-lg shadow-xl animate-zoomIn"
        />
      </div>
    </div>
  );
};

export default Skill;
