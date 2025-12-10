import React from 'react';


const PopularVideoItem = ({ title, description, thumbnail, videoUrl }) => (
    // Responsive layout: Small screens (stacked), Medium/Large screens (side-by-side)
    <div className="bg-white rounded-2xl flex flex-col md:flex-row shadow-md border border-gray-100 
    transition duration-300 hover:shadow-xl p-6 md:p-8 gap-6 md:gap-8 overflow-hidden">
        <div className="w-full md:w-1/2 rounded-xl overflow-hidden 
                       h-48 md:h-64 lg:h-72  flex items-center justify-center"> 
            
            <img
                src={thumbnail}
                onClick={() => window.open(videoUrl, "_blank")}
                alt={title}
                className="w-full h-full cursor-pointer object-contain"
                onError={(e) =>
                    (e.target.src =
                        'https://placehold.co/700x400/cccccc/333333?text=Image+Load+Failed')
                }
            />
        </div>

        {/* Content Section */}
        <div className="w-full md:w-1/2 flex flex-col justify-between">
            
            <div className="flex-grow">
                <h3
                    className="text-xl md:text-2xl font-bold mb-20"
                   
                >
                    {title}
                </h3>

                <p className="text-sm md:text-base text-gray-600 mb-6 line-clamp-4">
                    {description}
                </p>
            </div>

            <button
                onClick={() => window.open(videoUrl, "_blank")}
                className="self-start font-semibold cursor-pointer text-md bg-black text-white px-5 py-2.5 rounded-full hover:bg-gray-800 transition duration-200"
            >
                Watch Video 
            </button>
        </div>
    </div>
);

export default PopularVideoItem;