import Header from "./weather/Header";
import DaysBar from "./weather/DaysBar";
import Graph from "./Graph";
import queryWeatherAPI from "./weather/API";
import Pubsub from "./Pubsub";
import "../css/modules/App.css";

export default class App {
  constructor() {
    // DOM
    this.container = document.createElement("div");
    this.container.id = "appContainer";
    this.header = new Header();
    this.graph = new Graph();
    this.daysBar = new DaysBar();
    this.container.append(
      this.header.container,
      this.graph.container,
      this.daysBar.container,
    );
    this.bindEvents();
    this.apiCall();
  }

  apiCall() {
    queryWeatherAPI().then((data) => {
      this.cachedWeather = data;
      Pubsub.emit("renderHeader", data);
      Pubsub.emit("renderDays", data);
    });
  }

  bindEvents() {
    Pubsub.on("apiCall", () => {
      this.apiCall();
    });
  }

  render() {}
}
