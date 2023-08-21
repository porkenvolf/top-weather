import Pubsub from "../Pubsub";
import Cache from "./Cache";
import "../../css/modules/HourlyForecast.css";

export default class HourlyForecast {
  constructor() {
    this.container = document.createElement("div");
    this.container.id = "hourlyContainer";
    this.bindEvents();
  }

  render(data) {
    data.forEach((element) => {
      const hourlyIcon = document.createElement("img");
      hourlyIcon.src = element.icon;
      this.container.append(hourlyIcon);
    });
  }

  bindEvents() {
    Pubsub.on("renderHourly", (index) => {
      const toParse = Object.values(
        Cache.cachedData.forecast.forecastday[index].hour,
      );
      const parsedData = [];
      toParse.forEach((element) => {
        const hour = new Date(element.time).getHours();
        parsedData.push({
          hour,
          icon: element.condition.icon,
        });
      });
      this.render(parsedData);
    });
  }
}
