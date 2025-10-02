import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import { NavLink } from "react-router-dom";

import image from "../assets/bg1.png";
// import image2 from "../assets/bg2.png";

import AboutApiData from "../Component/ApiData/AboutApiData";


export default function Home() {
  return (
    <div className=" h-full w-full p-10">
      <div className="max-w-5xl min-w-[20rem] m-auto">
        {/* grid for image and Slogan */}
        <div className="grid justify-center items-center grid-row md:grid-cols-2 mt-4">
          <div className="md:ml-20 md:order-2">
            <img className="w-xl mt-5 md:mt-0" src={image} alt="" />
          </div>
          <div className=" text-center md:order-1">
            <h1 className="text-3xl md:text-5xl mb-8">
              Discover the World at Your Fingertips
            </h1>
            <p className="text-xl font-light ">
              Explore countries, cultures, and continents with our World Atlas.
              Discover maps, facts, and stories that bring the{" "}
              <span className="text-blue-600 font-bold">Earth</span> closer.
            </p>

            {/* Button */}
            <div className="flex justify-center md:justify-start mt-6">
              <NavLink to='/country'>

                <button className="flex items-center gap-2 outline-1 hover:bg-gradient-to-l from-black via-gray-700 to-black-600 text-white px-6 py-3 rounded-full font-medium transition-all duration-300">
                  Start Explore <FaArrowRightLong className="text-lg" />
                </button>
              </NavLink>
            </div>
          </div>
        </div>

        {/*country Details */}
        <AboutApiData/>
      </div>
    </div>
  );
}