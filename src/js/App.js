import Header from "./weather/Header";
import DaysBar from "./weather/DaysBar";
import "../css/modules/App.css";

export default class App {
  constructor() {
    this.container = document.createElement("div");
    this.container.id = "appContainer";

    this.header = new Header();
    this.daysBar = new DaysBar();

    this.container.append(this.header.container, this.daysBar.container);
  }

  bindEvents() {}

  render() {}
}
