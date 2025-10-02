import React, { useContext, useState } from "react";
import { ThemeContext } from "../../Hooks/DarkLight";

export default function CountrySearchFilter({
  search,
  setSearch,
  filter,
  setFilter,
  countries,
  setCountries,
}) {
  const { theme } = useContext(ThemeContext);
  const [sortOrder, setSortOrder] = useState(""); // keep track of Asc/Desc

  // Search Event
  const HandleSearch = (event) => {
    setSearch(event.target.value);
  };

  // Filter Region
  const SelectRegionChange = (event) => {
    setFilter(event.target.value);
  };

  // Sort countries
  const handelSort = (value) => {
    const sortCountrys = [...countries].sort((a, b) => {
      return value === "Asc"
        ? a.name.common.localeCompare(b.name.common)
        : b.name.common.localeCompare(a.name.common);
    });
    setCountries(sortCountrys);
    setSortOrder(value); // update active sort
  };

  return (
    <div className="flex flex-col gap-4">
      {/* Search */}
      <div>
        <input
          type="text"
          placeholder="Country Name..."
          className={`w-full max-w-[600px]  mx-auto block justify-center
          text-md pl-3 py-3 border  rounded-xl outline-none ${
            theme == "dark" ? "border-white text-white" : "border-black text-black"
          }`}
          value={search}
          onChange={HandleSearch}
        />
      </div>

      {/* Sort */}
      <div name="Order" className="justify-end flex gap-2">
        <button
          onClick={() => handelSort("Asc")}
          className={`px-4 py-1 outline-1 rounded  
             ${sortOrder === "Asc" ? "text-blue-400 font-bold" : ""} 
            ${
            theme == "dark"
              ? "text-white outline-white"
              : " text-black outline-black"
          }`}
        >
          Asc
        </button>
        <button
          onClick={() => handelSort("Desc")}
          className={`px-4 py-1 outline-1 rounded 
            ${sortOrder === "Desc" ? "text-blue-400 font-bold" : ""} 
            ${
            theme == "dark"
              ? "text-white outline-white"
              : " text-black outline-black"
          }`}
        >
          Desc
        </button>
      </div>

      {/* Filter by Region */}
      <div className="justify-end flex">
        <select
          className="px-6 py-1  outline-1 md:mt-0 mt-2 text-md  rounded-md"
          value={filter}
          onChange={SelectRegionChange}
        >
          <option value="all">All</option>
          <option value="Africa">Africa</option>
          <option value="Americas">Americas</option>
          <option value="Asia">Asia</option>
          <option value="Europe">Europe</option>
          <option value="Oceania">Oceania</option>
        </select>
      </div>
    </div>
  );
}
