import Chart from "chart.js/auto";
import Pubsub from "./Pubsub";
import Cache from "./weather/Cache";

export default class Graph {
  constructor() {
    this.container = document.createElement("div");

    this.data = [
      { year: 2010, count: 10 },
      { year: 2011, count: 20 },
      { year: 2012, count: 15 },
      { year: 2013, count: 25 },
      { year: 2014, count: 22 },
      { year: 2015, count: 30 },
      { year: 2016, count: 28 },
    ];
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
    });
  }
}
