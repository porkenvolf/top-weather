import Pubsub from "../Pubsub";
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
    Pubsub.on("renderHeader", (data) => {
      console.log(data);
      if (!data.alreadyProcessed) {
        const { icon } = data.forecast.forecastday[0].day.condition;
        const { temp_c } = data.current;
        const { humidity } = data.current;
        const { wind_kph } = data.current;
        const { daily_chance_of_rain } = data.forecast.forecastday[0].day;
        const condition = data.forecast.forecastday[0].day.condition.text;
        const day = new Date(data.current.last_updated).toLocaleDateString(
          "en-US",
          { weekday: "long", timeZone: "UTC" },
        );
        this.render({
          icon,
          temp_c,
          humidity,
          wind_kph,
          daily_chance_of_rain,
          day,
          condition,
        });
      } else {
        this.render(data);
      }
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
