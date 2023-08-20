import Pubsub from "../Pubsub";
import SearchBar from "./SearchBar";
import UnitSelector from "./UnitSelector";
import Cache from "./Cache";
import "../../css/modules/Header.css";

export default class Header {
  constructor() {
    // DOM
    this.container = document.createElement("div");
    this.container.id = "headerContainer";

    this.imgIcon = document.createElement("img");
    this.imgIcon.id = "headerIcon";

    this.divTemperature = document.createElement("div");
    this.divTemperature.id = "headerTemperature";

    this.divHumidity = document.createElement("div");
    this.divHumidity.id = "headerHumidity";

    this.divWindSpeed = document.createElement("div");
    this.divWindSpeed.id = "headerWind";

    this.divChanceRain = document.createElement("div");
    this.divChanceRain.id = "headerChanceRain";

    this.divDay = document.createElement("div");
    this.divDay.id = "headerDay";

    this.divCondition = document.createElement("div");
    this.divCondition.id = "headerCondition";

    this.divLocation = document.createElement("div");
    this.divLocation.id = "headerLocation";

    this.searchBar = new SearchBar();

    this.unitSelector = new UnitSelector();

    this.container.append(
      this.imgIcon,
      this.divTemperature,
      this.divHumidity,
      this.divWindSpeed,
      this.divChanceRain,
      this.divDay,
      this.divCondition,
      this.searchBar.container,
      this.divLocation,
      this.unitSelector.container,
    );
    this.bindEvents();
  }

  bindEvents() {
    Pubsub.on("renderHeader", (index) => {
      // This data is accessed the same way irrespective of index
      const { icon } =
        Cache.cachedData.forecast.forecastday[index].day.condition;
      const chanceOfRain =
        Cache.cachedData.forecast.forecastday[index].day.daily_chance_of_rain;
      const condition =
        Cache.cachedData.forecast.forecastday[index].day.condition.text;
      const day = new Date(
        Cache.cachedData.forecast.forecastday[index].date,
      ).toLocaleDateString("en-US", {
        weekday: "long",
        day: "numeric",
        month: "long",
        timeZone: "UTC",
      });
      const location = `${Cache.cachedData.location.name}, ${Cache.cachedData.location.country}`;

      // This data is accessed differently if index === 0
      let temp; // TODO im changing units
      let humidity;
      let wind;
      if (index === 0) {
        // index 0 denotes the Current day, as opposed to a forecasted day
        temp = Math.floor(Cache.cachedData.current[`temp_${Cache.tempUnits}`]);
        humidity = Cache.cachedData.current.humidity;
        wind = Cache.cachedData.current[`wind_${Cache.windUnits}`];
      } else {
        // if index !== 0 it must access data from the forcast section
        temp = Math.floor(
          Cache.cachedData.forecast.forecastday[index].day[
            `avgtemp_${Cache.tempUnits}`
          ],
        );
        humidity = Cache.cachedData.forecast.forecastday[index].day.avghumidity;
        wind =
          Cache.cachedData.forecast.forecastday[index].day[
            `maxwind_${Cache.windUnits}`
          ];
      }

      this.render({
        icon,
        temp,
        humidity,
        wind,
        chanceOfRain,
        day,
        condition,
        location,
      });
    });
  }

  render(data) {
    this.imgIcon.src = data.icon;
    this.divTemperature.innerText = `${data.temp}°`;
    this.divHumidity.innerText = `Humidity: ${data.humidity}%`;
    this.divWindSpeed.innerText = `Wind speed: ${data.wind} ${Cache.windUnits}`;
    this.divChanceRain.innerText = `Chance of rain: ${data.chanceOfRain}%`;
    this.divDay.innerText = data.day;
    this.divCondition.innerText = data.condition;
    this.divLocation.innerText = data.location;
  }
}
