import boar from "../../img/boar.png";
import "../../css/components/Title.css";

export default class Title {
  constructor() {
    this.container = document.createElement("div");
    this.container.id = "titleContainer";

    this.icon = document.createElement("img");
    this.icon.src = boar;

    this.titleText = document.createElement("div");
    this.titleText.innerText = "SwineSky";

    this.container.append(this.titleText, this.icon);
  }
}
