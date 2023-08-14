import Pubsub from "../Pubsub";

export default class Header {
  constructor() {
    // DOM
    this.container = document.createElement("div");
    this.imgIcon = document.createElement("img");
    this.divTemperature = document.createElement("div");
    this.divHumidity = document.createElement("div");
    this.divWindSpeed = document.createElement("div");
    this.divChanceRain = document.createElement("div");
    this.divDay = document.createElement("div");
    this.divCondition = document.createElement("div");
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
    Pubsub.on("render", (data) => {
      this.render(data);
    });
  }

  render(data) {
    console.log(data);
    this.imgIcon.src = data.forecast.forecastday[0].day.condition.icon;
    this.divTemperature.innerText = `${data.current.temp_c}°`;
    this.divHumidity.innerText = `Humidity: ${data.current.humidity}%`;
    this.divWindSpeed.innerText = `Wind speed: ${data.current.wind_kph}`; // TODO units
    this.divChanceRain.innerText = `Chance of rain: ${data.forecast.forecastday[0].day.daily_chance_of_rain}%`;
    this.divDay.innerText = new Date(
      data.current.last_updated,
    ).toLocaleDateString("en-US", { weekday: "long", timeZone: "UTC" });
    this.divCondition.innerText =
      data.forecast.forecastday[0].day.condition.text;
  }
}
