const TopicCard = ({ title, description, imageUrl, readMoreUrl }) => (
    <div className="bg-white rounded-xl overflow-hidden shadow-lg transition duration-300 hover:shadow-2xl">
        
        {/* Image Section */}
        <div className="relative h-48 overflow-hidden">
            <img
                src={imageUrl}
                alt={title}
                className="w-full h-full object-cover transition duration-500 hover:scale-105"
                onError={(e) => e.target.src = 'https://placehold.co/400x300/cccccc/333333?text=Image+Not+Found'}
            />
        </div>

        {/* Content Section */}
        <div className="p-6">
            <h3 className="text-xl font-bold mb-2 text-gray-900">{title}</h3>
            <p className="text-gray-600 mb-4 text-sm line-clamp-4">{description}</p>
            
            {/* Read More Link (Redirect) */}
            <a 
                href={readMoreUrl} // इस URL पर रीडायरेक्ट होगा
                className="text-pink-600 font-semibold text-sm hover:text-pink-800 transition duration-150"
            >
                Read more
            </a>
        </div>
    </div>
);

export default TopicCard;