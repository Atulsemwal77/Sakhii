import { Search } from "lucide-react";
import shopbanner from "../../assets/shopbanner2.png";

const Shopbanner = () => {
  return (
        <div
          className="relative h-120 border-t border-gray-200 mb-5 p-8 md:p-16"
        >
             <img
            src={shopbanner}
            alt="Background Image"
            className="absolute inset-0 w-full h-full object-cover" 
          />
          <div className="bg-pink-700 w-full h-full absolute inset-0 opacity-50"></div>
          <div className="relative max-w-xl mx-auto text-center text-white p-6 rounded-lg z-10">
            <h1 className="text-3xl md:text-4xl font-extrabold leading-tight">
              Comfort & Care Delivered
            </h1>
    
            <h1 className="text-3xl md:text-4xl font-bold leading-snug mb-2">
              at one Place
            </h1>
            <p className="text-md text-white mb-8">
             Get sanitary products and natural cramp relief including heating pads, therapeutic teas, and TENS machines delivered right to your door.
            </p>
        <div className="relative w-full sm:w-80">
    
            <input
                type="text"
                placeholder=""
                className="w-[350px] md:w-[500px] pl-12 pr-5 py-3 rounded-full bg-white text-gray-800 
                       focus:outline-none focus:ring-2 focus:ring-white transition"
            />
            <span className="absolute right-8 md:-right-35 top-1/2 -translate-y-1/2 text-black">
                <Search className="w-7 h-7" />
            </span>
        </div>
            
          </div>
        </div>
  )
}

export default Shopbanner
