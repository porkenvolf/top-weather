export default async function queryWeatherAPI() {
  const requestLocation = await fetch("http://ip-api.com/json/");
  const location = await requestLocation.json();
  const requestWeather =
    await fetch(`https://api.weatherapi.com/v1/forecast.json?key=6b50d5938f0b4173a06202148231208&q=${location.country}&days=3&aqi=no&alerts=no
    `);
  const data = await requestWeather.json();
  return data;
}
