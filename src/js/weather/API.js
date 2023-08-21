import Pubsub from "../Pubsub";
import Cache from "./Cache";

async function queryLocationAPI() {
  const requestLocation = await fetch("https://ipapi.co/json/");
  const parsedRequest = await requestLocation.json();
  if (
    requestLocation.country_code_iso3 === "LBR" ||
    requestLocation.country_code_iso3 === "MMR" ||
    requestLocation.country_code_iso3 === "USA"
  ) {
    Cache.tempUnits = "f";
    Cache.windUnits = "mph";
  }
  return parsedRequest.city;
}
export default async function queryWeatherAPI(_location) {
  Pubsub.emit("loading");
  const location = _location || (await queryLocationAPI().catch(console.log));
  const requestWeather =
    await fetch(`https://api.weatherapi.com/v1/forecast.json?key=6b50d5938f0b4173a06202148231208&q=${location}&days=10&aqi=no&alerts=no
    `);
  const data = await requestWeather.json();
  Pubsub.emit("stopLoading");
  return data;
}
