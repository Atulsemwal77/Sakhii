import PopularVideoItem from "./PopularVideoItem";
import { popularVideosData } from "../../data/mockData";

const PopularVideos = () => {
    return (
        <div className="space-y-6 m-10">
            <h3 className="text-2xl md:text-4xl font-bold mb-4 text-center">Popular Videos</h3>
            {popularVideosData.map((video) => (
                <PopularVideoItem
                    key={video.id}
                    title={video.title}
                    description={video.description}
                    thumbnail={video.thumbnail}
                    videoUrl={video.videoUrl}
                    badge={video.badge}
                    badgeColor={video.badgeColor}
                />
            ))}
        </div>
    );
};

export default PopularVideos;
