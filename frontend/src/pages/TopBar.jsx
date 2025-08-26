import React, { useState } from "react";

import { FaSearch } from "react-icons/fa";



const TopBar = () => {
  
  

  return (
    <div className="w-full max-w-screen-2xl mx-auto bg-[#CA3561] shadow-md ">
        <div className=" max-w-7xl mx-auto  px-4 py-3 flex flex-col sm:flex-row sm:items-center sm:justify-end  gap-4">
      
      {/* Search Bar */}
      <div className="flex items-center border border-gray-300 rounded-full px-3 py-2 w-full sm:max-w-lg">
        <input
          type="text"
          placeholder="Search..."
          className="outline-none flex-1 text-sm bg-[#CA3561] text-white placeholder-white"
        />
        <FaSearch className="text-white" />
      </div>

      {/* Buttons */}
      <div className="flex items-center gap-3 sm:gap-6">
        <button
        //   onClick={() => setIsAskSakhiiOpen(true)}
          variant="secondary"
          className="px-6 py-1 rounded-lg bg-[#BC0707] text-white w-full sm:w-auto"
        >
          Ask Sakhii
        </button>

        <button className="px-6 py-1 rounded-lg text-white border border-white transition flex items-center gap-2 w-full sm:w-auto justify-center">
          English
          
        </button>

        <button className="px-6 py-1 rounded-lg bg-[#BC0707] text-white transition w-full sm:w-auto">
          SoS
        </button>
      </div>

      
      
    </div>
    </div>
  );
};

export default TopBar;
