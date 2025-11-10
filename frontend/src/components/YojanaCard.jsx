import React from 'react';
import { Link } from 'react-router-dom';

const YojanaCard = ({ title, description }) => {
    
    const slug = title.toLowerCase().replace(/\s+/g, '-'); 
    
    return (
        <div className="my-4 flex flex-col md:flex-row justify-between items-start md:items-center border-b-4 border-gray-200 pb-3">
            
            <div className="flex-1 pr-4"> 
                <h2 className="text-md md:text-2xl text-gray-800 font-semibold">{title}</h2>
                <p className="text-gray-600 text-xs md:text-base">{description}</p>
            </div>
            
          
            <Link 
                to={`/yojana/${slug}`} 
                className="bg-pink-600 text-white py-2 px-4 w-auto text-xs md:text-sm  rounded mt-3 md:mt-0 transition hover:bg-pink-700"
            >
                Know More
            </Link>
        </div>
    )
}

export default YojanaCard;