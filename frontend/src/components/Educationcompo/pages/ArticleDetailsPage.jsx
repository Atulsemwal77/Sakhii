import React from "react";
import { useParams } from "react-router-dom";
import { tabContentData } from "../../../data/mockData"; // ← yahi se data aa raha hai

const ArticleDetailsPage = () => {
    const { id } = useParams();

    // Convert id (string) → number
    const articleId = parseInt(id);

    // Fetch article list from mockData
    const articles = tabContentData["articles"] || [];

    // Find article by id
    const article = articles.find((item) => item.id === articleId);

    if (!article) {
        return (
            <div className="max-w-3xl mx-auto p-6 text-center">
                <h1 className="text-3xl font-bold mb-4">Article Not Found</h1>
                <p className="text-gray-600">The article you're looking for doesn't exist.</p>
            </div>
        );
    }

    return (
        <div className="max-w-7xl mx-auto p-10">
           <div className="text-center">
              {/* Title */}
            <h1 className="text-4xl font-bold mb-4">{article.title}</h1>

            {/* Badge */}
            <span
                className={`px-3 py-1 rounded-full text-sm font-semibold ${article.badgeColor}`}
            >
                {article.badge}
            </span>

            {/* Thumbnail */}
            <img
                src={article.thumbnail || article.imageUrl}
                alt={article.title}
                className="w-full h-100 object-cover rounded-xl mt-6 shadow-md"
            />

           </div>
          
               {/* Extra Full Content */}
            
                <div className="mt-8 p-10 bg-pink-700 text-white text-md rounded-lg whitespace-pre-line">
                   <p className="p-2" 
                   > {article.text}</p>
                </div>
           
          
 
         
        </div>
    );
};

export default ArticleDetailsPage;
