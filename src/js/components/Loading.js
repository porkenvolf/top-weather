import imgLoading from "../../img/loading.svg";
import "../../css/components/Loading.css";

export default class Loading {
  constructor() {
    this.container = document.createElement("div");
    this.container.id = "loadingContainer";
    this.wheel = document.createElement("img");
    this.wheel.classList = "loadingWheel";
    this.wheel.src = imgLoading;
    this.container.append(this.wheel);
  }
}
