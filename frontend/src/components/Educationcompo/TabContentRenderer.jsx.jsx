import React from 'react';
import ContentCard from './ContentCard';
import { tabContentData } from '../../data/mockData';

const TabContentRenderer = ({ activeTab }) => {
    const data = tabContentData[activeTab] || [];

    if (activeTab === 'facts') {
        return (
            <div className="p-6 bg-yellow-50 rounded-xl border border-yellow-200 shadow-inner">
                <p className="text-xl font-bold text-yellow-800 mb-3">Quick Facts & Figures</p>
                <ul className="list-disc list-inside mt-2 space-y-2 text-gray-700">
                    {data.map((item, index) => (
                        <li key={index} className="pl-1">{item.text}</li>
                    ))}
                </ul>
            </div>
        );
    }

    return (
        <div className="grid pl-10 pr-10 grid-cols-1 md:grid-cols-3 gap-6">
            {data.map((item, index) => (
                <ContentCard key={index} {...item} />
            ))}
        </div>
    );
};

export default TabContentRenderer;