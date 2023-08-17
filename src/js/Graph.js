import Chart from "chart.js/auto";
import Pubsub from "./Pubsub";
import Cache from "./weather/Cache";
import "../css/modules/Graph.css";

export default class Graph {
  constructor() {
    this.container = document.createElement("div");
    this.container.id = "graphContainer";
    this.bindEvents();
  }

  bindEvents() {
    Pubsub.on("renderGraph", (index) => {
      const toParse = Object.values(
        Cache.cachedData.forecast.forecastday[index].hour,
      );
      const parsedData = [];
      toParse.forEach((element) => {
        parsedData.push({
          hour: element.time,
          temp_c: element.temp_c,
        });
      });
      this.render(parsedData);
    });
  }

  render(data) {
    if (this.container.contains(this.canvas)) {
      this.container.removeChild(this.canvas);
    }
    this.canvas = document.createElement("canvas");
    this.container.append(this.canvas);
    this.cachedChart = new Chart(this.canvas, {
      type: "line",
      data: {
        labels: data.map((row) => row.hour),
        datasets: [
          {
            data: data.map((row) => row.temp_c),
            tension: 0.2,
          },
        ],
      },
      options: {
        maintainAspectRatio: false,
        responsive: true,
      },
    });
  }
}
