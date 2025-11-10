import React from 'react';

const ngoList = [
    {
        name: "Beti Bachao Beti Padhao",
        distance: "2.3 km away, Dadar, Mumbai",
        tags: ["Women's Rights", "Counselling", "Legal Aid"]
    },
    {
        name: "Beti Bachao Beti Padhao",
        distance: "2.3 km away, Dadar, Mumbai",
        tags: ["Women's Rights", "Counselling", "Legal Aid"]
    },
    {
        name: "Beti Bachao Beti Padhao",
        distance: "2.3 km away, Dadar, Mumbai",
        tags: ["Women's Rights", "Counselling", "Legal Aid"]
    },
];

const NGOSSection = () => {
    return (
        <div className="flex justify-center mt-6">

            <div className="main 
                        w-full md:w-[95%] lg:w-[90%] xl:w-[85%] 
                        p-8 md:p-16 rounded-2xl 
                         bg-white mx-auto"> 
                <div className="mb-6">
                    <h2 className="text-2xl md:text-3xl font-semibold text-gray-800">
                        Near by NGOs &amp; Help Centers
                    </h2>
                    <div className="flex items-center justify-between mt-2">
                        <div className="flex items-center text-gray-600 text-sm md:text-base">
                            <svg className="w-5 h-5 text-pink-600 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.828 0L6.343 16.657a8 8 0 1111.314 0z" />
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                            </svg>
                            <span>Using Location: Mumbai, Maharashtra</span>
                        </div>
                        <button className="text-pink-600 font-medium hover:text-pink-800 transition duration-150 text-sm">
                            change
                        </button>
                    </div>
                </div>

               
                <div className="space-y-4">
                    {ngoList.map((ngo, index) => (
                        <div 
                            key={index} 
                          
                            className="p-4 md:p-5 bg-blue-50 rounded-xl shadow-inner flex flex-col md:flex-row justify-between items-start md:items-center"
                        >
                            <div className="flex-1 min-w-0 mb-3 md:mb-0">
                                <h3 className="text-lg md:text-xl font-semibold text-gray-800 truncate">
                                    {ngo.name}
                                </h3>
                                
                               
                                <div className="flex items-center text-sm text-gray-500 mt-1 mb-2">
                                    <svg className="w-4 h-4 text-gray-400 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.828 0L6.343 16.657a8 8 0 1111.314 0z" />
                                    </svg>
                                    <span>{ngo.distance}</span>
                                </div>
                                
                               
                                <div className="flex flex-wrap gap-2 mt-2">
                                    {ngo.tags.map((tag, tagIndex) => (
                                        <span key={tagIndex} className="text-xs font-medium text-blue-700 bg-blue-100 px-2 py-0.5 rounded-full">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>

                           
                            <div className="flex flex-col space-y-2 w-full md:w-auto md:space-y-0 md:space-x-3 md:flex-row">
                              
                                <button className="flex items-center justify-center bg-pink-600 hover:bg-pink-700 text-white text-sm font-medium py-2 px-4 rounded-lg shadow-md transition duration-150 w-full md:w-20">
                                    <svg className="w-4 h-4 mr-1 md:hidden" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                                    Call
                                </button>
                                
                               
                                <button className="flex items-center justify-center bg-gray-200 hover:bg-gray-300 text-gray-800 text-sm font-medium py-2 px-4 rounded-lg transition duration-150 w-full md:w-20">
                                    <svg className="w-4 h-4 mr-1 md:hidden" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.828 0L6.343 16.657a8 8 0 1111.314 0z" /></svg>
                                    Map
                                </button>
                            </div>
                        </div>
                    ))}
                </div>

               
                <div className="mt-8 pt-4 border-t border-gray-100">
                    <button className="flex items-center justify-center w-full border border-pink-300 text-pink-600 hover:bg-pink-50 font-medium py-3 rounded-xl transition duration-150">
                        <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                        View More NGOs
                    </button>
                </div>

            </div>
        </div>
    );
};

export default NGOSSection;