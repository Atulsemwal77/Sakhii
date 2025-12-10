import { PRIMARY_PINK, PRIMARY_DARK, recentlyWatching } from '../../data/mockData';

const RecentlyMatching = () => {
    // Only the first item
    const item = recentlyWatching[0];

    return (
        <div className="pt-8 border-t m-10 border-gray-100">
            <h3 className="text-2xl md:text-4xl text-center font-bold mb-6" style={{ color: PRIMARY_DARK }}>
                Recently Watching
            </h3>
            <div
                className="bg-white rounded-2xl flex flex-col md:flex-row  p-10 overflow-hidden 
                border border-gray-100 transition duration-500 hover:shadow-2xl"
            >
                {/* Thumbnail */}
                <div className="w-full md:w-1/2 lg:w-1/2 md:ml-20 h-64 md:h-80 overflow-hidden">
                    <img
                        src={item.thumbnail}
                        alt={item.title}
                        className="w-full h-full object-cover transition duration-500 hover:scale-105"
                        onError={(e) =>
                            e.target.src =
                                'https://placehold.co/700x400/cccccc/333333?text=Image+Load+Failed'
                        }
                    />
                </div>

                {/* Content */}
                <div className="w-full md:w-3/5 lg:w-2/3 p-6 md:p-8 flex flex-col justify-center">
                    <span className="text-md font-bold uppercase tracking-wider mb-20 text-black">
                        {item.date}
                    </span>

                    <h4 className="text-xl font-bold mb-10 text-blue-900" >
                        {item.title}
                    </h4>

                    <p className="text-gray-600 mb-10">{item.description}</p>

                    <a
                        href={item.link}
                        className="font-semibold text-sm cursor-pointer hover:underline"
                        style={{ color: PRIMARY_PINK }}
                    >
                        Continue Watching →
                    </a>
                </div>
            </div>
        </div>
    );
};

export default RecentlyMatching;
