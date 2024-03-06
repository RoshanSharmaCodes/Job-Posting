import React from "react"
import {FiMapPin, FiSearch} from "react-icons/fi"

export default function Banner({positon, handlePositionChange}) {
  return (
    <div className="max-w-screen-2xl container mx-auto xl:px-24 px-4 md:py-20 py-14">
      <h1 className="text-5xl font-bold mb-3 text-primary">
        This could be <span className="text-blue">Life Changing...</span>
      </h1>
      <p className="text-lg text-black/70 mb-8">Thousands of Remote Jobs are awaiting for you, Take the first step towards success.</p>

      <form>
        <div className="flex justify-start md:flex-row flex-col md:gap-0 gap-4">
          <div className="flex md:rounded-s-md rounded shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 md:w-1/2 w-full">
            <input
              type="text"
              name="title"
              id="title"
              onChange={handlePositionChange}
              placeholder="What kind of Job are you looking for?"
              className="block flex-1 border-0 bg-transparent py-1.5 pl-8 text-gray-990 placeholder:text-gray-400 focus:right-0 sm:text-sm sm:leading-6"
            />
            <FiSearch className="absolute mt-2.5 ml-2 text-gray-400"/>
          </div>
          <div className="flex md:rounded-s-md rounded shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 md:w-1/3 w-full ml-1">
            <input
              type="text"
              name="title"
              id="title"
              placeholder="What locations are you searching for?"
              className="block flex-1 border-0 bg-transparent py-1.5 pl-8 text-gray-990 placeholder:text-gray-400 focus:right-0 sm:text-sm sm:leading-6"
            />
            <FiMapPin className="absolute mt-2.5 ml-2 text-gray-400"/>
          </div>
          <button type="submit" className="bg-blue text-white py-2 px-8 md:rounded-s-none rounded ml-1">Search</button>
        </div>
      </form>
    </div>
  )
}
