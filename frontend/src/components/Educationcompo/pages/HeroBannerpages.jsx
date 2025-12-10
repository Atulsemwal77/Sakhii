import hero from '../../../assets/1 24.png';
const HeroBannerpages = ({ 
    title = "Menstrual Health", 
    description = "The topic of understanding the menstrual cycle, managing period symptoms, and maintaining proper hygiene.", 
    readMoreUrl = "/menstrual-health-details",
    imageUrl = hero
}) => {
    return (
        <div className="relative w-full overflow-hidden bg-gray-50">
            {/* 1. Background Image Section (Right Side) */}
            <div className="absolute right-0 top-0 h-full w-2/3 md:w-1/2 hidden sm:block">
                <img
                    src={imageUrl}
                    alt="Doctor pointing at a uterus model"
                    className="w-full h-full object-cover object-center"
                    onError={(e) => e.target.src = 'https://placehold.co/800x400/F0F0F0/333333?text=Image+Load+Error'}
                />
            </div>

            {/* 2. Content & Overlay Section (Left Side) */}
            <div className="relative z-10 w-full md:w-2/3 lg:w-1/2 bg-pink-700 p-10 sm:p-12 lg:p-14 min-h-[300px]"> 
                {/* ^^^ यहाँ min-h-[300px] किया गया है, पहले 400px था।
                     पैडिंग (p-10, lg:p-14) भी कम की गई है। */}
                
                {/* Text Content */}
                <div className="max-w-md mb-5 text-white">
                    <h1 className="text-3xl sm:text-4xl font-extrabold mb-3 leading-tight"> {/* फॉन्ट साइज भी थोड़ा कम किया */}
                        {title}
                    </h1>
                    <p className="text-base font-light mb-5 opacity-90 line-clamp-3"> {/* लाइन-क्लैंप जोड़ा ताकि डिस्क्रिप्शन छोटी दिखे */}
                        {description}
                    </p>
                    
                    {/* Read More Link */}
                    <a 
                        href={readMoreUrl} 
                        className="text-white font-semibold border-b border-white hover:text-pink-100 hover:border-pink-100 transition duration-150 text-sm"
                    >
                        Read more
                    </a>
                </div>
                
                {/* Divider (The small white dot in your image) */}
                {/* <div className="w-2 h-2 rounded-full mt-4 mb-6"></div> */}


                {/* Search Input */}
                <form action="#" method="GET" className="w-full max-w-sm">
                    <div className="relative">
                        <input
                            type="text"
                            placeholder="Search topic"
                            className="w-full py-3 pl-6 pr-16 text-base text-gray-800 bg-white rounded-full focus:outline-none focus:ring-2 focus:ring-pink-400 shadow-md"
                        />
                        <button
                            type="submit"
                            className="absolute right-0 top-0 h-full w-14 flex items-center justify-center text-red-500 hover:text-pink-700 transition duration-150"
                            aria-label="Search"
                        >
                            {/* Search Icon (Magnifying Glass) */}
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                            </svg>
                        </button>
                    </div>
                </form>

            </div>
            
            {/* Small screens के लिए, यह सुनिश्चित करता है कि कंटेंट एरिया पूरी चौड़ाई लेता है */}
            <div className="sm:hidden absolute inset-0 bg-pink-600 opacity-90 -z-10"></div>
        </div>
    );
};

export default HeroBannerpages;