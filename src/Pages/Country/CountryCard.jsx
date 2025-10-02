import React from "react";
import {NavLink} from 'react-router-dom'
export default function CountryCard({ country }) {
  const { flags, name, population, capital, region } = country;

  return (
    <li className="flex flex-col rounded-lg overflow-hidden shadow-lg bg-gray-800 text-white transition-transform duration-300 hover:scale-105 hover:shadow-xl">
      {/* Flag Image Section */}
      <div className="relative w-full h-40 overflow-hidden">
        <img
          src={flags.svg}
          alt={`Flag of ${name.common}`}
          className="absolute inset-0 w-full h-full object-cover"
        />
      </div>

      {/* Content Section */}
      <div className="p-6 space-y-3">
        {/* Country Name */}
        <h3 className="text-xl font-bold tracking-wide">{name.common}</h3>

        {/* Details List */}
        <ul className="text-sm font-light space-y-1">
          <li>
            <span className="font-semibold">Population:</span> {population.toLocaleString()}
          </li>
          <li>
            <span className="font-semibold">Region:</span> {region}
          </li>
          <li>
            <span className="font-semibold">Capital:</span> {capital}
          </li>
        </ul>
        <NavLink to={`/country/${name.common}`}>
      <button className="px-3 pt-.8 text-sm rounded-md m-auto p-2 outline-1">Show more</button>

        </NavLink>
      </div>
    </li>
  );
}