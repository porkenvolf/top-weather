import Pubsub from "../Pubsub";
import Day from "./Day";
import "../../css/DaysBar.css";

export default class DaysBar {
  #output;

  #weatherObject;

  constructor() {
    // DOM
    this.container = document.createElement("div");
    this.container.id = "container";
    this.day1 = new Day();
    this.day2 = new Day();
    this.day3 = new Day();
    this.container.append(
      this.day1.container,
      this.day2.container,
      this.day3.container,
    );

    // EVENTS
    this.bindEvents();
  }

  bindEvents() {
    Pubsub.on("render", (data) => {
      this.render(data);
    });
  }

  render(data) {
    this.day1.render(data.forecast.forecastday[0]);
    this.day2.render(data.forecast.forecastday[1]);
    this.day3.render(data.forecast.forecastday[2]);
  }
}
