import { useState } from "react";

const HealthTrackerPanel = () => {
  const moods = [
    { emoji: "😊", label: "Happy" },
    { emoji: "😴", label: "Tired" },
    { emoji: "😔", label: "Sad" },
    { emoji: "😐", label: "Okay" },
    { emoji: "😁", label: "Fine" },
  ];

  const symptoms = [
    { emoji: "🤕", label: "Headache" },
    { emoji: "💆‍♀️", label: "Cramping" },
    { emoji: "🤰", label: "Bloating" },
    { emoji: "🤢", label: "Nausea" },
    { emoji: "😩", label: "Fatigue" },
    { emoji: "😬", label: "Acne" },
  ];

  const [selectedMood, setSelectedMood] = useState("😴 Tired");
  const [selectedSymptoms, setSelectedSymptoms] = useState(["😩 Fatigue"]);

  const toggleSymptom = (label) => {
    setSelectedSymptoms((prev) =>
      prev.includes(label)
        ? prev.filter((item) => item !== label)
        : [...prev, label]
    );
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-10">
      <div className="bg-white p-6 rounded-xl  border border-gray-100">
        <h3 className="text-lg font-bold text-gray-800 mb-4">Track Symptoms</h3>
        <p className="text-sm text-gray-600 mb-3">How are you feeling today?</p>

        {/* Moods */}
        <div className="flex flex-wrap gap-3 mb-6">
          {moods.map(({ emoji, label }) => {
            const moodText = `${emoji} ${label}`;
            return (
              <button
                key={label}
                onClick={() => setSelectedMood(moodText)}
                className={`px-4 py-2 text-sm font-medium rounded-full border transition flex items-center gap-2 ${
                  selectedMood === moodText
                    ? "bg-pink-600 text-white border-pink-600"
                    : "bg-white text-gray-700 border-gray-300 hover:bg-pink-50 hover:text-pink-600"
                }`}
              >
                <span>{emoji}</span>
              </button>
            );
          })}
        </div>

        <div className="bg-white p-6 rounded-xl ">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Pin Level
          </label>
          <div className="flex justify-between text-xs text-gray-500 mb-2">
            <span>None</span>
            <span>Severe</span>
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
          />{" "}
        </div>

        <h3 className="text-lg font-bold text-gray-800 mb-4">Other Symptoms</h3>

        {/* Emoji + Checkbox Symptoms */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-6">
          {symptoms.map(({ emoji, label }) => (
            <div
              key={label}
              onClick={() => toggleSymptom(label)}
              className={`flex items-center justify-between p-2 rounded border cursor-pointer transition ${
                selectedSymptoms.includes(label)
                  ? "bg-pink-50 border-pink-400"
                  : "bg-gray-50 border-gray-200 hover:bg-pink-50"
              }`}
            >
              <div className="flex items-center gap-2">
                <span className="text-xl">{emoji}</span>
                <span className="text-sm text-gray-700">{label}</span>
              </div>
              <input
                type="checkbox"
                checked={selectedSymptoms.includes(label)}
                onChange={() => toggleSymptom(label)}
                onClick={(e) => e.stopPropagation()}
                className="h-4 w-4 text-pink-600 border-gray-300 rounded focus:ring-pink-500"
              />
            </div>
          ))}
        </div>

        {/* Notes Input */}
        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Notes
          </label>
          <textarea
            rows="2"
            className="w-full border border-gray-300 rounded-md p-2 focus:ring-pink-500 focus:border-pink-500 text-sm"
            placeholder="Feeling more tired than usual today. Craving orange in the afternoon."
          ></textarea>
        </div>

        <button className="w-full bg-pink-600 text-white font-semibold py-2 rounded-lg hover:bg-pink-700 transition">
          Save Symptoms
        </button>
      </div>

      {/* RIGHT SECTION — Notes Panel */}
      <div className="bg-pink-600 p-6 md:p-8 rounded-xl flex flex-col h-full min-h-[600px]">
        <h3 className="text-3xl font-extrabold text-white text-center mb-4 tracking-wider">
          NOTES
        </h3>
        <textarea
          rows="15"
          className="flex-grow w-full bg-pink-300/50 text-white p-3 rounded-lg border border-pink-400 focus:outline-none focus:ring-2 focus:ring-white placeholder-pink-200 resize-none"
          placeholder="Write your general thoughts or observations here..."
        ></textarea>
      </div>
    </div>
  );
};

export default HealthTrackerPanel;
