import Chart from "chart.js/auto";
// it's already in dependencies, this is weird...
// eslint-disable-next-line import/no-extraneous-dependencies
import annotationPlugin from "chartjs-plugin-annotation";
import Pubsub from "./Pubsub";
import Cache from "./weather/Cache";
import "../css/modules/Graph.css";

export default class Graph {
  constructor() {
    Chart.register(annotationPlugin);
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
        const hour = new Date(element.time).getHours();
        parsedData.push({
          hour,
          temp: element[`temp_${Cache.tempUnits}`],
        });
      });

      const isCurrentDay = index === 0;
      this.render({ parsedData, isCurrentDay });
    });
  }

  render(data) {
    const lineNow = data.isCurrentDay ? 1 : 0;
    const lineNowValue = new Date(
      Cache.cachedData.current.last_updated,
    ).getHours();
    if (this.container.contains(this.canvas)) {
      this.container.removeChild(this.canvas);
    }
    this.canvas = document.createElement("canvas");
    this.container.append(this.canvas);

    this.cachedChart = new Chart(this.canvas, {
      type: "line",
      data: {
        labels: data.parsedData.map((row) => `${row.hour}:00`),
        datasets: [
          {
            data: data.parsedData.map((row) => row.temp),
            tension: 0.2,
          },
        ],
      },
      options: {
        scales: {
          y: {
            beginAtZero: false,
            ticks: {
              // Add units to y-axis labels
              callback(value) {
                return `${value}°`;
              },
            },
          },
        },
        maintainAspectRatio: false,
        responsive: true,
        plugins: {
          annotation: {
            annotations: {
              line1: {
                adjustScaleRange: true,
                drawTime: "afterDatasetsDraw",
                type: "line",
                mode: "horizontal",
                scaleID: "x",
                borderColor: "orange",
                borderWidth: lineNow,
                value: lineNowValue,
              },
            },
          },
          legend: {
            display: false,
          },
        },
        annotations: {
          line1: {
            /* label: {
              enabled: true,
              display: true,
              content: "NOW", 
              color: "white",
              backgroundColor: "orange",
              position: "center",
            }, */
          },
        },
      },
    });
  }
}
