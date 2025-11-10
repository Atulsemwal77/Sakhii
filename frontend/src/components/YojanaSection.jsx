import React from 'react'
import YojanaCard from './YojanaCard'

const YojanaSection = ({ heading, data, showStateInput = false }) => {
  return (
    <div className="flex justify-center mt-6">
      <div className="main w-full md:w-[95%] lg:w-[90%] xl:w-[85%] p-8 md:p-16  rounded-b-2xl border-gray-200  bg-white">

        {/* Heading */}
        <h1 className="text-xl md:text-2xl text-pink-500 font-semibold mb-4">{heading}</h1>

       
        {showStateInput && (
          <div className="mb-6">
            <label htmlFor="state" className="block text-gray-700 font-medium mb-2">
              Enter Your State
            </label>
            <input
              type="text"
              id="state"
              placeholder="Maharashtra"
              className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-pink-400"
            />
          </div>
        )}

        {/* Yojana List */}
        {data.map((yojana, index) => (
          <YojanaCard
            key={index}
            title={yojana.title}
            description={yojana.description}
          />
        ))}
      </div>
    </div>
  )
}

export default YojanaSection
