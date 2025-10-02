import axios from "axios";

const api = axios.create({
  baseURL: "https://restcountries.com/v3.1/",
})

//get Method HTTP
export const getCountryData = ()=>{
  return api.get("/all?fields=name,flags,population,capital,region")
};


//get Method for countryDetailsPage
export const getCountryDetails = (name)=>{
  return api.get(`/name/${name}?fullText=true&fields=name,flags,population,subregion,tld,currencies,border,languages,capital,region`)
};