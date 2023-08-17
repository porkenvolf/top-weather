import Pubsub from "../Pubsub";
import Day from "./Day";
import Cache from "./Cache";
import "../../css/modules/DaysBar.css";

export default class DaysBar {
  days = [];

  constructor() {
    // DOM
    this.container = document.createElement("div");
    this.container.id = "container";

    for (let i = 0; i < 3; i++) {
      const isCurrentDay = i === 0;
      this.days.push(new Day(i, isCurrentDay));
      this.container.append(this.days[i].container);
    }

    // EVENTS
    this.bindEvents();
  }

  bindEvents() {
    Pubsub.on("renderDaysBar", () => {
      this.render(Cache.cachedData);
    });
  }

  render(data) {
    this.days.forEach((day) => {
      day.render(data.forecast.forecastday[day.index]);
    });
  }
}
