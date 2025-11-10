const StatsLogPanel = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10">
      {/* Quick Stats Card */}
      <div className="bg-white p-6 rounded-xl  border border-gray-100">
        <h3 className="text-lg font-bold text-gray-800 mb-4">Quick Stats</h3>
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-purple-50 p-3 rounded-lg border-2 border-purple-200">
            <p className="text-sm text-gray-600">Average Cycle</p>
            <p className="text-2xl font-bold text-black">28 Days</p>
          </div>

          <div className="bg-purple-50 p-3 rounded-lg border-2 border-purple-200">
            <p className="text-sm text-gray-600">Period Length</p>
            <p className="text-2xl font-bold text-black">5 days</p>
          </div>
          <div className="bg-purple-50 p-3 rounded-lg border-2 border-purple-200">
            <p className="text-sm text-gray-600">Last Period </p>
            <p className="text-2xl font-bold text-black">Mar 1</p>
          </div>
          <div className="bg-purple-50 p-3 rounded-lg border-2 border-purple-200">
            <p className="text-sm text-gray-600">Next Fertile Window </p>
            <p className="text-2xl font-bold text-black">Mar 15</p>
          </div>
        </div>
      </div>

      {/* Log Period Card  */}
      <div className="bg-white p-6 rounded-xl  border border-gray-100">
        <h3 className="text-lg font-bold text-gray-800 mb-4">Log Period</h3>

        <label className="block text-sm font-medium text-gray-700 mb-2">
          Date
        </label>
        <input
          type="date"
          className="w-full border border-gray-300 rounded-md p-2 mb-4 focus:ring-pink-500 focus:border-pink-500"
        />

        <label className="block text-sm font-medium text-gray-700 mb-2">
          Flow Intensity
        </label>
        <div className="flex justify-between text-xs text-gray-500 mb-2">
          <span>Light</span>
          <span>Heavy</span>
        </div>

        {/* Range Slider */}
        <input
          type="range"
          min="1"
          max="100"
          defaultValue="50"
          className="w-full h-2 bg-pink-100 rounded-lg appearance-none cursor-pointer mb-4"
          style={{
            "--webkit-slider-thumb-bg": "#dd68a3ff",
            background: "#9b9196ff",
            height: "6px",
          }}
        />

        <button className="w-full bg-pink-600 text-white font-semibold py-2 rounded-lg hover:bg-pink-700 transition">
          Save Period Data
        </button>
      </div>
    </div>
  );
};

export default StatsLogPanel;
