import Cache from "./Cache";
import "../../css/components/UnitSelector.css";
import Pubsub from "../Pubsub";

export default class UnitSelector {
  constructor() {
    this.container = document.createElement("div");
    this.container.id = "unitSelectorContainer";

    this.divC = document.createElement("div");
    this.divC.innerText = "°C";

    this.divF = document.createElement("div");
    this.divF.innerText = "°F";

    this.container.append(this.divC, this.divF);

    if (Cache.tempUnits === "c") {
      this.divC.classList.toggle("selected");
    } else this.divF.classList.toggle("selected");

    this.bindEvents();
  }

  bindEvents() {
    this.divC.addEventListener("click", () => {
      this.divF.classList.remove("selected");
      this.divC.classList.add("selected");
      Cache.tempUnits = "c";
      Cache.windUnits = "kph";
      Pubsub.emit("renderHeader", Cache.selectedDay);
      Pubsub.emit("renderDaysBar");
      Pubsub.emit("renderGraph", Cache.selectedDay);
    });
    this.divF.addEventListener("click", () => {
      this.divC.classList.remove("selected");
      this.divF.classList.add("selected");
      Cache.tempUnits = "f";
      Cache.windUnits = "mph";
      Pubsub.emit("renderHeader", Cache.selectedDay);
      Pubsub.emit("renderDaysBar");
      Pubsub.emit("renderGraph", Cache.selectedDay);
    });
  }
}
