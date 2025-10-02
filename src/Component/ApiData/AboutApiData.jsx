import { useContext } from "react";
import Api from "../../Api/Api.json";
import { ThemeContext } from "../../Hooks/DarkLight";

export default function AboutApiData() {
  const {theme} = useContext(ThemeContext);
  return (
    <div className="md:mt-12 mt-8 mb-8 flex flex-col items-center text-center">
      <h1 className="md:text-4xl text-2xl tracking-wide  mb-8">
        Here are Some Interesting Facts About the World
      </h1>
      
      <div className="flex justify-center mt-8">
        <div className="grid md:grid-cols-3 gap-6">
          {Api.map((country) => (
            <div
              key={country.id}
              className={`px-6 py-6 hover:outline rounded-md bg-gradient-to-tr  hover:scale-105 transition-transform duration-300${theme == "dark" ? " from-black via-gray-700 to-black   text-white shadow-md" : "bg-amber-50 shadow-2xl"}`}
            >
              <h2 className="text-xl font-bold mb-2">{country.name}</h2>
              <p>
                <span className="font-semibold">Capital:</span>{" "}
                {country.capital}
              </p>
              <p>
                <span className="font-semibold">Population:</span>{" "}
                {country.population}
              </p>
              <p>
                <span className="font-semibold">Festival:</span>{" "}
                {country.main_festival}
              </p>
              <p className="italic mt-2 text-sm">
                "{country.interesting_fact}"
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}