import { topicsData } from "../../data/mockData";
import TopicCard from "./TopicCard";

const TopicsSection = () => {
    return (
        <div className="mt-0">
            <div className=" px-4 sm:px-6 lg:px-8">
                
                {/* Section Header */}
                <h2 className="text-4xl font-extrabold text-gray-900 text-center mb-10">
                    Topics
                </h2>

                {/* Topics Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
                    {topicsData.map((topic) => (
                        <TopicCard
                            key={topic.id}
                            title={topic.title}
                            description={topic.description}
                            imageUrl={topic.imageUrl}
                            readMoreUrl={topic.readMoreUrl}
                        />
                    ))}
                </div>

                {/* More Topics Button */}
                <div className="text-center mt-10 mb-2">
                    <button className="bg-pink-600 text-white font-semibold px-8 py-3 rounded-full text-lg shadow-lg hover:bg-pink-700 transition duration-300">
                        More Topics
                    </button>
                </div>

            </div>
        </div>
    );
};
export default TopicsSection;