import React from "react";
import { useNavigate } from "react-router-dom";

const ContentCard = ({ id, title, description,imageUrl, thumbnail, badge, badgeColor,buttonText,short }) => {
    const navigate = useNavigate();

    const handleOpen = () => {
        if (!id ) return;

        navigate(`/articles/${id}`);
    };

    return (
        <div className="bg-white rounded-2xl flex flex-col md:flex-row shadow-md border border-gray-100 
        transition duration-300 hover:shadow-xl p-6 md:p-8 gap-6 md:gap-8 overflow-hidden">

            {/* Thumbnail */}
            <div 
                className="w-full md:w-1/2 rounded-xl overflow-hidden h-48 md:h-64 relative block cursor-pointer"
                onClick={handleOpen}
            >
                <img
                    src={thumbnail ||imageUrl}
                    alt={title}
                    className="w-full h-full object-cover transition duration-300 hover:scale-105"
                />
            </div>

            {/* Content */}
            <div className="w-full md:w-1/2 flex flex-col justify-between">
                
                <div className="flex-grow">
                    <div className={`text-xs font-semibold uppercase tracking-wider mb-2 px-2 py-0.5 rounded-full inline-block ${badgeColor}`}>
                        {badge}
                    </div>

                    <h3 className="text-xl md:text-2xl font-bold mb-3 leading-tight text-gray-900">
                        {title}
                    </h3>

                   
                    <p className="text-sm md:text-base text-gray-600 line-clamp-3">
                        {description}
                    </p>
                      <p className="text-sm md:text-base text-gray-600 line-clamp-3">
                        {short}
                    </p>
                </div>
                
                {/* Button */}
                <button
                    onClick={handleOpen}
                    className="mt-4 font-semibold cursor-pointer text-md bg-black text-white px-5 py-2.5 rounded-full hover:bg-gray-800 transition duration-200"
                >
                   {buttonText}
                </button>
            </div>
        </div>
    );
};

export default ContentCard;
