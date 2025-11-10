import hero from '../../src/assets/banerBG.jpg'

const HeroSectionYojana = () => {
  return (
    <div
      className="relative mt-5 h-120 border-t border-gray-200 p-8 md:p-16"
    >
         <img
        src={hero}
        alt="Background Image"
        className="absolute inset-0 w-full h-full object-cover z-0" 
      />
      <div className="relative max-w-xl text-black p-6 rounded-lg z-10">
        <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-2">
          Government Schemes
        </h1>

        <h1 className="text-4xl md:text-5xl font-bold leading-snug mb-2">
          and Yojanas.
        </h1>

        <h1 className="text-4xl md:text-2xl font-semibold text-pink-600 mb-6">
          for women.
        </h1>

        <p className="text-lg text-gray-600 mb-8">
          Here you will find all kinds of government schemes and yojanas. Click
          the link to visit their official website.
        </p>

        <button className="text-pink-600 bg-white py-3 px-8 rounded-lg shadow-lg transition duration-300 transform hover:scale-105">
          Learn More
        </button>
      </div>
    </div>
  );
};

export default HeroSectionYojana;