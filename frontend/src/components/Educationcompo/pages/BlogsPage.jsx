import React from "react";
import ContentCard from "../ContentCard";
import { tabContentData } from "../../../data/mockData";
import TabSection from "../TabSection";
import HeroBannerpages from "./HeroBannerpages";

const BlogsPage = () => {
    const data = tabContentData["blogs"] || [];

    return (
        <div className="max-w-screen-2xl mx-auto p-6">
            <HeroBannerpages />
            <TabSection  />
            <h1 className="text-3xl text-center font-bold mb-6">Blogs</h1>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {data.map((item, index) => (
                    <ContentCard key={index} {...item} />
                ))}
            </div>
        </div>
    );
};

export default BlogsPage;
