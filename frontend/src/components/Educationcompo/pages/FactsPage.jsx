import React from "react";
import { tabContentData } from "../../../data/mockData";
import TabSection from "../TabSection";
import HeroBannerpages from "./HeroBannerpages";

const FactsPage = () => {
    const data = tabContentData["facts"] || [];

    return (
        <div className="max-w-screen-2xl mx-auto p-6">
            <HeroBannerpages />
            <TabSection  />
            <h1 className="text-3xl  m-10 text-center font-bold mb-6">Quick Facts & Figures</h1>

            <div className="p-6 bg-yellow-50 rounded-xl border border-yellow-200 shadow-inner">
                <ul className="list-disc list-inside space-y-2 text-gray-800">
                    {data.map((item, index) => (
                        <li key={index}>{item.text}</li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default FactsPage;
