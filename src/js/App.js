import Header from "./weather/Header";
import DaysBar from "./weather/DaysBar";
import Graph from "./Graph";
import queryWeatherAPI from "./weather/API";
import Pubsub from "./Pubsub";
import Cache from "./weather/Cache";
import "../css/modules/App.css";

export default class App {
  constructor() {
    // DOM
    this.container = document.createElement("div");
    this.container.id = "appContainer";
    this.header = new Header();
    this.graph = new Graph();
    this.daysBar = new DaysBar(8);
    this.container.append(
      this.header.container,
      this.graph.container,
      this.daysBar.container,
    );
    App.bindEvents();
    App.apiCall();
  }

  static apiCall() {
    queryWeatherAPI().then((data) => {
      Cache.cachedData = data;
      Pubsub.emit("renderHeader", 0);
      Pubsub.emit("renderDaysBar");
      Pubsub.emit("renderGraph", 0);
    });
  }

  static bindEvents() {
    Pubsub.on("apiCall", () => {
      App.apiCall();
    });
  }
}
