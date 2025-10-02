import React, { useState, useEffect, useTransition  } from "react";
import { getCountryData } from "../../Api/Country/CountryApi";
import CountryCard from "./CountryCard";
import Loading from "../../Component/Ui/Loading/Loading";
import CountrySearchFilter from "../../Component/Ui/CountrySearchFilter";


export default function Country() {
 
  const [countries, setCountries] = useState([]);
  const [isPending, startTransition] = useTransition();
  const [search, setSearch] = useState();
  const [filter, setFilter] = useState("All");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await getCountryData();
        startTransition(() => {
          setCountries(res.data);
          console.log(res.data);
        });
      } catch (err) {
        console.error("Error fetching countries:", err);
      }
    };

    fetchData();
  }, []);

  if (isPending) {
    return (
      <div className="h-lvh flex items-center  justify-center">
        <Loading/>
        {/* <h2>Loading...</h2> */}
      </div>
    );
  }

  // Search and filter functionality

  // search
  const searchCountry=(country)=>{
    if(search){
      return country.name.common.toLowerCase().includes(search.toLowerCase())

    } return country;

  }
  // filter
  const filterRegion=(country)=>{
    if(filter=== "All") return country;
    return country.region === filter;
  }

  const shortedCountries = countries.filter((country)=> searchCountry(country) && filterRegion(country));

  return (
    <div className="h-full w-full p-10">
      <div className="max-w-5xl min-w-[20rem] m-auto">
        <h1 className="text-2xl font-bold mb-6">Country List</h1>
        {/* Search fild */}
        <CountrySearchFilter
          search={search}
          setSearch={setSearch}
          filter={filter}
          setFilter={setFilter}
          countries = {countries}
          setCountries = {setCountries}
        />
        <ul className="grid md:grid-cols-4 mt-10 gap-6">
          {shortedCountries.map((currCountry, index) => {
            return <CountryCard country={currCountry} key={index} />;
          })}
        </ul>
      </div>
    </div>
  );
}