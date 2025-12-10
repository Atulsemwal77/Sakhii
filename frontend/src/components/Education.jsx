import React, { useState } from 'react';
import HeroEducation from './Educationcompo/HeroEducation';
import JoinMovementBanner from './Educationcompo/JoinMovementBanner';
import TabSection from './Educationcompo/TabSection';
import RecentlyMatching from './Educationcompo/RecentlyMatching';
import PopularVideos from './Educationcompo/PopularVideos';
import TopicsSection from './Educationcompo/TopicsSection';


const Education = () => {
    // State managed here, passed to TabSection
    const [activeTab, setActiveTab] = useState('videos');

    return (
        // Wrapper for the entire content section, adjust padding/margin as needed for your layout
        <div className="border max-w-screen-2xl mx-auto ">

            {/* Faded Section Title */}

            <HeroEducation />

            <JoinMovementBanner />

            {/* Tabbed Content */}
            <TabSection activeTab={activeTab} setActiveTab={setActiveTab} />
            <TopicsSection />

            <RecentlyMatching />

            <PopularVideos />
        </div>
    );
};

export default Education;