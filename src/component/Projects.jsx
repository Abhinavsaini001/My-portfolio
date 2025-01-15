import React from 'react'

const Projects = () => {
  const cardData = [
    {
      title: "Web Development",
      description: "Crafting responsive and dynamic websites tailored to your needs.",
    },
    {
      title: "Mobile Development",
      description: "Building seamless mobile experiences for your applications.",
    },
    {
      title: "UI/UX Design",
      description: "Designing user-friendly interfaces with visually appealing aesthetics.",
    },
  ];
  return (
        <div className="bg-[#202327] text-white min-h-screen flex flex-col items-center justify-center p-8">
            {/* Heading */}
            <h1 className="text-5xl font-bold mb-16 text-center">My Projects</h1>

            {/* Project Cards */}
            <div className="flex flex-wrap justify-center gap-8">
                {cardData.map((card, index) => (
                <div
                    key={index}
                    className="bg-[#202327] p-10 rounded-lg shadow-[0_4px_15px_rgba(255,255,255,0.2)] w-80 text-center transform transition-all duration-300 hover:scale-105 hover:bg-[#181A1E]"
                >
                    <h3 className="text-2xl font-semibold mb-3">{card.title}</h3>
                    <p className="text-sm text-gray-300">{card.description}</p>
                </div>
                ))}
            </div>
        </div>
    )
}

export default Projects