import Header from "./Header";
import DaysBar from "./DaysBar";
import Loading from "./Loading";
import Graph from "./Graph";
import queryWeatherAPI from "./API";
import Pubsub from "../Pubsub";
import Cache from "./Cache";
import Footer from "./Footer";
import "../../css/components/App.css";

export default class App {
  constructor() {
    // DOM
    this.container = document.createElement("div");
    this.container.id = "appContainer";
    this.loading = new Loading();
    this.header = new Header();
    this.graph = new Graph();
    this.daysBar = new DaysBar(8);
    this.footer = new Footer(2023);
    this.container.append(
      this.header.container,
      this.graph.container,
      this.daysBar.container,
      this.footer.output,
    );
    App.bindEvents(this);
    App.apiCall();
  }

  static apiCall(location) {
    queryWeatherAPI(location)
      .then((data) => {
        Cache.cachedData = data;
        Pubsub.emit("renderHeader", 0);
        Pubsub.emit("renderDaysBar");
        Pubsub.emit("renderGraph", 0);
        Pubsub.emit("renderHourly", 0);
      })
      .catch(console.log);
  }

  static bindEvents(instance) {
    Pubsub.on("apiCall", (location) => {
      App.apiCall(location);
    });
    Pubsub.on("loading", () => {
      instance.container.append(instance.loading.container);
    });
    Pubsub.on("stopLoading", () => {
      instance.loading.container.remove();
    });
  }
}
