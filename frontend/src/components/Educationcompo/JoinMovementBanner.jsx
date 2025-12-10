import React from 'react';
import { PRIMARY_PINK } from '../../data/mockData';
import { Search } from 'lucide-react';

const JoinMovementBanner = () => (
    <div className="p-8 md:mt-10 md:p-10 shadow-2xl" style={{ backgroundColor: PRIMARY_PINK }}>
        <div className=" md:ml-30 text-white">
            <h2 className="text-3xl md:text-4xl font-extrabold mb-10">Join The Movement</h2>
            <p className="text-md mb-6 max-w-4xl font-semibold">
                Let's work together to ensure every individual has access to vital reproductive health information.
                 By providing this education, we are not just teaching facts we're building a foundation of confidence,
                  well-being, and respect. It's the <br /> key to a healthier and more equitable future for our nation.
                </p>
           <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">

    <div className="relative w-full sm:w-80">

        <input
            type="text"
            placeholder="Search Topics..."
            className=" w-[350px] md:w-[500px] pl-12 pr-5 py-3 rounded-full bg-white text-gray-800 
                       focus:outline-none focus:ring-2 focus:ring-white transition"
        />
        <span className="absolute right-20 md:-right-35 top-1/2 -translate-y-1/2 text-red-400">
            <Search className="w-7 h-7" />
        </span>
    </div>

    <button
        className="px-8 py-3 bg-gray-900 mx-auto md:ml-50 w-[150px] md:w-[250px] text-white font-semibold rounded-full  
                   transition transform hover:scale-[1.02] hover:bg-gray-700"
    >
        Subscribe
    </button>

</div>

        </div>
    </div>
);

export default JoinMovementBanner;