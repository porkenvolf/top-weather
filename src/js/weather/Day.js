import "../../css/modules/Day.css";
import Pubsub from "../Pubsub";

export default class Day {
  constructor() {
    // DOM
    this.container = document.createElement("div");
    this.container.id = "dayContainer";

    this.imgIcon = document.createElement("img");
    this.imgIcon.id = "dayIcon";

    this.divDayOfWeek = document.createElement("div");
    this.divDayOfWeek.id = "dayDay";

    this.divTemperatureMAX = document.createElement("div");
    this.divTemperatureMAX.id = "dayMax";

    this.divTemperatureMIN = document.createElement("div");
    this.divTemperatureMIN.id = "dayMin";

    this.container.append(
      this.imgIcon,
      this.divDayOfWeek,
      this.divTemperatureMAX,
      this.divTemperatureMIN,
    );

    // EVENTS
    this.bindEvents();
  }

  render(data) {
    this.cachedData = data;
    this.imgIcon.src = data.day.condition.icon;
    this.divDayOfWeek.innerText = new Date(
      data.date_epoch * 1000,
    ).toLocaleDateString("en-US", { weekday: "short", timeZone: "UTC" });
    this.divTemperatureMAX.innerText = `${data.day.maxtemp_c}°`;
    this.divTemperatureMIN.innerText = `${data.day.mintemp_c}°`;
  }

  bindEvents() {
    this.container.addEventListener("click", () => {
      const data = {
        alreadyProcessed: true,
        icon: this.cachedData.day.condition.icon,
        temp_c: this.cachedData.day.avgtemp_c,
        humidity: this.cachedData.day.avghumidity,
        wind_kph: this.cachedData.day.maxwind_kph,
        daily_chance_of_rain: this.cachedData.day.daily_chance_of_rain,
        day: this.cachedData.date,
        condition: this.cachedData.day.condition.text,
      };
      Pubsub.emit("renderHeader", data);
    });
  }
}
