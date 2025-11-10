const HelpSectionYojana = () => {
  
  const cardsData = [
    {
      iconColor: "bg-pink-200",
      title: "Bookmark Yojanas",
      subtitle: "Save Schemes for later",
    },
    {
      iconColor: "bg-blue-200",
      title: "Bookmark Yojanas",
      subtitle: "Save Schemes for later",
    },
    {
      iconColor: "bg-purple-200",
      title: "Bookmark Yojanas",
      subtitle: "Save Schemes for later",
    },
    {
      iconColor: "bg-green-200",
      title: "Bookmark Yojanas",
      subtitle: "Save Schemes for later",
    },
  ];

  return (
    <div className="flex justify-center mt-6">
      <div
        className="main 
          w-full md:w-[95%] lg:w-[90%] xl:w-[85%] 
          p-8 md:p-16 rounded-2xl 
          bg-white mx-auto"
      >
        <h2 className="text-xl md:text-2xl font-bold text-pink-600 mb-6 md:mb-8">
          Ask for Help
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {cardsData.map((card, index) => (
            <div
              key={index}
              className="bg-gray-50 p-4 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 flex flex-col items-center text-center"
            >
              <div
                className={`w-16 h-16 rounded-full ${card.iconColor} mb-4 flex items-center justify-center`}
              ></div>

              <h3 className="text-lg font-semibold text-gray-800 mb-1">
                {card.title}
              </h3>

              <p className="text-sm text-gray-600">{card.subtitle}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HelpSectionYojana;
