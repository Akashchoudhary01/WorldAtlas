import React, { useEffect, useState, useTransition } from "react";
import { useParams, NavLink } from "react-router-dom";
import { getCountryDetails } from "../api/CountryApi/CountryApi";
import Loading from "../Components/Ui/Loading/Loading";

export default function CountryDetails() {
  const { id } = useParams();
  const [country, setCountry] = useState();
  const [isPending, startTransition] = useTransition();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await getCountryDetails(id);
        startTransition(() => {
          setCountry(res.data[0]);
          console.log(res.data[0]);
        });
      } catch (err) {
        console.log(err);
      }
    };

    fetchData();
  }, [id]);

  if (isPending) {
    return (
      <div className="h-screen flex items-center justify-center bg-zinc-950 text-white">
        <Loading />
      </div>
    );
  }

  return (
    <div className="bg-zinc-950 min-h-screen text-white p-8">
      <div className="max-w-5xl mx-auto">
        {country && (
          <div className="flex flex-col md:flex-row mt-16 gap-8 items-center md:items-start">
            {/* Flag */}
            <div className="w-full md:w-1/2 flex justify-center">
              <img
                src={country.flags?.svg}
                alt={`Flag of ${country.name?.common}`}
                className="w-full max-w-sm md:max-w-md rounded-lg shadow-md outline-1 outline-white object-contain"
              />
            </div>

            {/* Details */}
            <div className="w-full md:w-1/2 flex flex-col gap-4 text-center md:text-left">
              {/* Name */}
              <h1 className="text-4xl md:text-4xl font-bold">
                {country.name?.common?.toUpperCase()}
              </h1>
              {/* ANative Name */}
              <h3 className="text-xl md:text-xl">
                Native Name :{" "}
                <span className="font-semibold">
                  {Object.keys(country.name.nativeName)
                    .map((key) => country.name.nativeName[key].common)
                    .slice(0, 4)
                    .join(" , ")}
                </span>
              </h3>
              {/* Region */}

              <h3 className="text-xl md:text-xl">
                <span className="font-semibold">Region :</span> {country.region}
              </h3>
              {/* Subregion */}
              <h3 className="text-xl md:text-xl">
                <span className="font-semibold">Subregion :</span>{" "}
                {country.subregion}
              </h3>
              {/* Currency */}
              {country.currencies && (
                <h3 className="text-xl md:text-xl">
                  <span className="font-semibold">Currency :</span>{" "}
                  {Object.values(country.currencies)[0].name}
                </h3>
              )}
              {/* Currency Symbol */}
              {country.currencies && (
                <h3 className="text-xl md:text-xl">
                  <span className="font-semibold">Currency Symbol :</span>{" "}
                  {Object.values(country.currencies)[0].symbol}
                </h3>
              )}
              {/* Subregion */}
              <h3 className="text-xl md:text-xl">
                <span className="font-semibold">Population :</span>{" "}
                {country.population}
              </h3>
              {/* Top level Domain */}
              <h3 className="text-xl md:text-xl">
                <span className="font-semibold">top level Domain :</span>{" "}
                {country.tld[0]}
              </h3>
              {/* Languages */}
              <h3 className="text-xl md:text-xl">
                <span className="font-semibold">Languages :</span>{" "}
                {Object.values(country.languages).join(" , ")}
              </h3>
            </div>
          </div>
        )}
        {/* Back btn */}
        <div className="flex items-center justify-center p-8 md:justify-start">
          <NavLink to="/country">
            <button className="px-4 py-1 border-1 border-amber-50 rounded-xl text-xl ">
              Back
            </button>
          </NavLink>
        </div>
      </div>
    </div>
  );
}