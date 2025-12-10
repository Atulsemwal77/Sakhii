import React from 'react';
import { tabNames, tabTitles, PRIMARY_PINK } from '../../data/mockData';
import { useNavigate, useLocation } from "react-router-dom";

const TabSection = () => {
    const navigate = useNavigate();
    const { pathname } = useLocation();

    const getActiveTab = () => {
        if (pathname.includes("videos")) return "videos";
        if (pathname.includes("blogs")) return "blogs";
        if (pathname.includes("articles")) return "articles";
        if (pathname.includes("facts")) return "facts";
        return "videos"; 
    };

    const activeTab = getActiveTab();

    const handleRedirect = (tab) => {
        navigate(`/education/${tab}`);
    };

    return (
        <div className=" mt-10 py-4">
            <div className="flex justify-center md:gap-16 mb-6">
                {tabNames.map((tab) => (
                    <button
                        key={tab}
                        onClick={() => handleRedirect(tab)}
                        className={`
                            py-3 px-6 text-lg md:text-xl font-bold transition duration-300 capitalize
                            ${activeTab === tab
                                ? 'text-pink-600'
                                : 'text-gray-500 hover:text-pink-500'
                            }
                        `}
                        style={activeTab === tab ? { color: PRIMARY_PINK } : {}}
                    >
                        {tabTitles[tab]}
                    </button>
                ))}
            </div>
        </div>
    );
};

export default TabSection;
