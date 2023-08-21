import "../../css/modules/Day.css";
import Pubsub from "../Pubsub";
import Cache from "./Cache";

export default class Day {
  constructor(index, current = false) {
    this.index = index;
    this.isCurrentDay = current;
    // DOM
    this.container = document.createElement("div");
    this.container.id = "dayContainer";
    if (current) {
      this.container.classList.add("selected");
    }

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
    this.divTemperatureMAX.innerText = `${
      data.day[`maxtemp_${Cache.tempUnits}`]
    }°`;
    this.divTemperatureMIN.innerText = `${
      data.day[`mintemp_${Cache.tempUnits}`]
    }°`;
  }

  bindEvents() {
    this.container.addEventListener("click", () => {
      Pubsub.emit("renderHeader", this.index);
      Pubsub.emit("renderGraph", this.index);
      Pubsub.emit("renderHourly", this.index);
      Pubsub.emit("selectedDay", this.index);
    });
  }
}
