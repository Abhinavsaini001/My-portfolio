const Test = () => {
    <div>
        <h1>Headiing hello </h1>
    </div>
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
      <div className="flex flex-wrap justify-center gap-8 p-8">
        {cardData.map((card, index) => (
          <div
            key={index}
            className="bg-[#202327] text-white p-8 rounded-lg shadow-md w-72 text-center transform transition-all duration-300 hover:scale-105 hover:bg-[#181A1E]"
          >
            <h3 className="text-2xl font-semibold mb-3">{card.title}</h3>
            <p className="text-sm text-gray-300">{card.description}</p>
          </div>
        ))}
      </div>
    );
  };
  
  export default Test;
  