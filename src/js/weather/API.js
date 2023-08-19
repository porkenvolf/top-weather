async function queryLocationAPI() {
  const requestLocation = await fetch("http://ip-api.com/json/", {
    mode: "cors",
  });
  const parsedRequest = await requestLocation.json();
  const location = parsedRequest.city;
  return location;
}
export default async function queryWeatherAPI(_location) {
  const location = _location || 'montevideo';
  const requestWeather =
    await fetch(`https://api.weatherapi.com/v1/forecast.json?key=6b50d5938f0b4173a06202148231208&q=${location}&days=10&aqi=no&alerts=no
    `);
  const data = await requestWeather.json();
  return data;
}

// TODO mixed content, remove ip location?
