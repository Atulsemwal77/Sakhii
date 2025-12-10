import { Play } from "lucide-react";
import bannerimg from "../../assets/11 1.png";
import { PRIMARY_PINK } from "../../data/mockData";

const HeroEducation = () => {
   return (
    <div className="overflow-hidden w-full mb-5 pb-5 md:p-10">

      <div className="relative w-full pb-5 flex flex-col md:block">
        
        {/* IMAGE BOX */}
        <div className="w-full md:w-1/2 overflow-hidden object-cover">
          <img
            src={bannerimg}
            alt="Education Banner"
            className="
              w-full h-[250px] md:h-[80%] md:w-1/2 
              rounded-xl object-cover 
              relative md:absolute md:inset-0 md:ml-150 md:mt-30
            "
          />
        </div>

        {/* TEXT BOX */}
        <div
          className="
            relative z-30 
            w-full md:w-1/2 
            mt-5 md:mt-5 
            bg-white p-6 
            rounded-xl shadow-xl border-l-8
          "
          style={{ borderColor: PRIMARY_PINK }}
        >
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Why Education about Reproductive Health is Important?
          </h2>

          <p className="text-gray-600 mb-4 text-base md:text-lg leading-relaxed">
            Education on reproductive health is a cornerstone of well-being. By
            providing accurate information on topics like menstruation and
            pregnancy, it empowers individuals to make informed decisions about
            their bodies and futures. This knowledge is crucial for physical and
            mental health, helping to reduce stigma and encourage proactive
            healthcare. Ultimately, it fosters open communication and builds a
            more confident and equitable society.
          </p>
        </div>

        {/* WATCH TEXT */}
        <button className="font-bold text-lg mt-4 md:ml-30 md:mt-10 flex items-center">
          Watch Videos
        </button>

        {/* PLAY/PAUSE BUTTON */}
        <div className="
          flex items-center justify-center 
          mt-4 
          md:absolute md:inset-100 md:-ml-90 md:z-20
        ">
          <button
            style={{ backgroundColor: PRIMARY_PINK }}
            className="
              p-4 rounded-full text-white shadow-xl 
              transition-all cursor-pointer
              hover:scale-105
            "
          >
            <Play size={20} />
          </button>
        </div>

      </div>
    </div>
  );
};

export default HeroEducation;
