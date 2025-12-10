import { Archive, Bug, Coffee, Funnel, Search } from "lucide-react";
import React from "react";

const categories = [
  { icon: Funnel, label: "Sanitary Products" },
  { icon: Bug, label: "Sanitary Products" },
  { icon: Archive, label: "Sanitary Products" },
  { icon: Coffee, label: "Sanitary Products" },
];

const ShopCategory = () => {
  return (
    <div className="mt-10 max-w-screen-xl mx-auto mb-5">
      <div className=" text-center">
        <h2 className="font-bold text-3xl md:text-4xl">Shop by Category</h2>
      </div>
      <div className="bg-red-100 rounded-lg mt-15">
        <div className="flex  h-50 justify-around  mb-10">
          {categories.map((item, i) => {
            const Icon = item.icon;
            return (
              <div
                key={i}
                className="flex flex-col items-center justify-center text-center gap-2"
              >
                <Icon className=" h-15 w-15 md:h-20 md:w-20 text-pink-700" />
                <h3 className="font-medium">{item.label}</h3>
              </div>
            );
          })}
        </div>
        <div className="relative -mt-10 p-4 pl-10">
          <span className="absolute left-0 left-15 top-1/2 -translate-y-1/2 text-gray-500">
                <Search className="w-5 h-5" />
            </span>
        <input type="text" placeholder="Search products..." className="bg-white pl-15 rounded-full h-10 md:w-[950px] " />
        <button className="text-white bg-pink-700 rounded-lg h-10 ml-15 w-[100px] md:w-[150px]">Shop Now</button>
        </div>
      </div>
    </div>
  );
};

export default ShopCategory;
