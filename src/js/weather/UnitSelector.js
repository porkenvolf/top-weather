import Cache from "./Cache";
import "../../css/modules/UnitSelector.css";

export default class UnitSelector {
  constructor() {
    this.container = document.createElement("div");
    this.container.id = "unitSelectorContainer";

    this.divC = document.createElement("div");
    this.divC.innerText = "°C";

    this.divF = document.createElement("div");
    this.divF.innerText = "°F";

    this.container.append(this.divC, this.divF);

    if (Cache.units === "si") {
      this.divC.classList.toggle("selected");
    } else this.divF.classList.toggle("selected");

    this.bindEvents();
  }

  bindEvents() {
    this.divC.addEventListener("click", () => {
      this.divF.classList.remove("selected");
      this.divC.classList.add("selected");
      Cache.units = "si";
    });
    this.divF.addEventListener("click", () => {
      this.divC.classList.remove("selected");
      this.divF.classList.add("selected");
      Cache.units = "imperial";
    });
  }
}
