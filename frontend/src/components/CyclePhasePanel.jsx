const CalendarCell = ({
  day,
  isHeader = false,
  isPeriod = false,
  isSelected = false,
}) => (
  <div
    className={`h-20 w-full flex items-center justify-center text-md 
      ${isHeader ? "bg-gray-50 font-semibold text-gray-600" : ""}
      ${
        isPeriod
          ? "bg-pink-600 text-white font-bold border-liner border-pink-300"
          : ""
      }
      ${isSelected ? "border-2 border-pink-600 rounded-lg" : ""}
      ${!isHeader && !isPeriod ? "text-gray-700" : ""}
      ${
        !isHeader && !isSelected && !isPeriod
          ? "hover:bg-gray-100 cursor-pointer"
          : ""
      }
    `}
    style={{ borderCollapse: "collapse", margin: 0 }}
  >
    {day}
  </div>
);

const CyclePhasePanel = () => {
  return (
    <div className="w-full bg-pink-100 p-6 mt-5 border border-black grid grid-cols-1 md:grid-cols-2 gap-6">
      <div className="md:col-span-1 space-y-4 pr-4">
        <div className="bg-white p-4 rounded-xl">
          <p className="text-gray-700 font-semibold mb-2 text-base text-center">
            Current Cycle Phase:
          </p>

          <div className="bg-white p-6 rounded-xl relative w-full">
            <p className="text-gray-700 font-semibold mb-3 text-base">
              Current Cycle Phase:
            </p>

            <div className="flex flex-col items-center justify-center relative h-44">
              <div className="relative w-48 h-[7rem] overflow-hidden rounded-t-full bg-gray-300 flex justify-center items-end">
              <div className="relative w-42 h-[5.9rem] overflow-hidden rounded-t-full bg-pink-100 flex justify-center items-end">

                <div className="absolute bottom-0 w-[90%] h-4/5 bg-pink-600 flex flex-col items-center justify-center rounded-t-full">
                  <span className="text-white text-sm">Period in</span>
                  <span className="text-white text-xl font-bold leading-none">
                    3 Days
                  </span>
                </div>
                </div>
              </div>
            </div>

            <div className="absolute bottom-4 left-0 w-full flex justify-between px-6 text-xs font-semibold">
              <p className="text-pink-600">Next Period: 4 days</p>
              <p className="text-black">Cycle Length: 28 days</p>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-xl relative shadow-sm w-full">
          <p className="text-gray-700 font-semibold mb-3 text-base">
            Current Cycle Phase:
          </p>

          <div className="flex flex-col items-center justify-center relative h-44">
            <div className="relative w-28 h-28 flex items-center justify-center rounded-full bg-pink-100 shadow-inner">
              <span className="text-gray-800 font-bold text-base text-center leading-tight">
                Luteal Phase
                <br /> <span className="text-gray-500">Day 24</span>
              </span>
            </div>
          </div>

          <div className="absolute bottom-4 left-0 w-full flex justify-between px-6 text-xs font-semibold">
            <p className="text-pink-600">Next Period: 4 days</p>
            <p className="text-black">Cycle Length: 28 days</p>
          </div>
        </div>
      </div>

      <div className="md:col-span-1 rounded-xl bg-white p-2">
        <div className="grid grid-cols-7 h-full  divide-x divide-y divide-gray-200 [&>*]:border-dashed">
          {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day) => (
            <CalendarCell key={day} day={day.substring(0, 3)} isHeader={true} />
          ))}

          {Array(2) //
            .fill("")
            .map((_, i) => (
              <CalendarCell key={`empty-${i}`} day={""} />
            ))}

          <CalendarCell day="01" isSelected={false} />
          <CalendarCell day="02" isSelected={true} />

          {[3, 4, 5].map((date) => (
            <CalendarCell key={date} day={`0${date}`} />
          ))}

          <CalendarCell day="06" isPeriod={true} />

          {Array.from({ length: 24 }, (_, i) => 7 + i).map((date) => (
            <CalendarCell key={date} day={date < 10 ? `0${date}` : `${date}`} />
          ))}

          <CalendarCell day="01" />
          <CalendarCell day="02" />
          <CalendarCell day="03" />
        </div>
      </div>
    </div>
  );
};

export default CyclePhasePanel;
