import Pubsub from "../Pubsub";
import "../../css/Day.css";
import svgRainy from "../../img/cloud-drizzle.svg";

export default class Day {
  #output;

  #weatherObject;

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
  }

  render(data) {
    console.log(data);
    this.imgIcon.src = data.day.condition.icon;
    this.divDayOfWeek.innerText = new Date(data.date).toLocaleDateString(
      "en-US",
      { weekday: "long" },
    );
    this.divTemperatureMAX.innerText = `${data.day.maxtemp_c}°`;
    this.divTemperatureMIN.innerText = `${data.day.mintemp_c}°`;
  }
}
