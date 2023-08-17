import Pubsub from "../Pubsub";
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
    this.container.append(
      this.imgIcon,
      this.divTemperature,
      this.divHumidity,
      this.divWindSpeed,
      this.divChanceRain,
      this.divDay,
      this.divCondition,
    );
    this.bindEvents();
  }

  bindEvents() {
    Pubsub.on("renderHeader", (index) => {
      // This data is accessed the same way irrespective of index
      const { icon } =
        Cache.cachedData.forecast.forecastday[index].day.condition;
      const { daily_chance_of_rain } =
        Cache.cachedData.forecast.forecastday[index].day;
      const condition =
        Cache.cachedData.forecast.forecastday[index].day.condition.text;
      const day = new Date(
        Cache.cachedData.forecast.forecastday[index].date,
      ).toLocaleDateString("en-US", { weekday: "long", timeZone: "UTC" });

      // This data is accessed differently if index === 0
      let temp_c;
      let humidity;
      let wind_kph;
      if (index === 0) {
        // index 0 denotes the Current day, as opposed to a forecasted day
        temp_c = Math.floor(Cache.cachedData.current.temp_c);
        humidity = Cache.cachedData.current.humidity;
        wind_kph = Cache.cachedData.current.wind_kph;
      } else {
        // if index !== 0 it must access data from the forcast section
        temp_c = Math.floor(
          Cache.cachedData.forecast.forecastday[index].day.avgtemp_c,
        );
        humidity = Cache.cachedData.forecast.forecastday[index].day.avghumidity;
        wind_kph = Cache.cachedData.forecast.forecastday[index].day.maxwind_kph;
      }

      this.render({
        icon,
        temp_c,
        humidity,
        wind_kph,
        daily_chance_of_rain,
        day,
        condition,
      });
    });
  }

  render(data) {
    this.imgIcon.src = data.icon;
    this.divTemperature.innerText = `${data.temp_c}°`;
    this.divHumidity.innerText = `Humidity: ${data.humidity}%`;
    this.divWindSpeed.innerText = `Wind speed: ${data.wind_kph}`; // TODO units
    this.divChanceRain.innerText = `Chance of rain: ${data.daily_chance_of_rain}%`;
    this.divDay.innerText = data.day;
    this.divCondition.innerText = data.condition;
  }
}
