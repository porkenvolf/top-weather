import Chart from "chart.js/auto";
// it's already in dependencies, this is weird...
// eslint-disable-next-line import/no-extraneous-dependencies
import annotationPlugin from "chartjs-plugin-annotation";
import Pubsub from "../Pubsub";
import Cache from "./Cache";
import "../../css/components/Graph.css";

export default class Graph {
  constructor() {
    Chart.register(annotationPlugin);
    this.container = document.createElement("div");
    this.container.id = "graphContainer";

    this.btnBar = document.createElement("div");
    this.btnBar.id = "btnBar";

    this.btnTemp = document.createElement("div");
    this.btnTemp.innerText = "Temperature";
    this.btnTemp.id = "btnTemp";
    this.btnTemp.classList.add("selected");

    this.btnRain = document.createElement("div");
    this.btnRain.innerText = "Chance of rain";
    this.btnRain.id = "btnRain";

    this.settingWhichGraph = "temp"; // or 'rain'

    this.btnBar.append(this.btnTemp, this.btnRain);
    this.container.append(this.btnBar);
    this.bindEvents();
  }

  bindEvents() {
    Pubsub.on("renderGraph", (index) => {
      let property;
      if (this.settingWhichGraph === "temp") {
        property = `temp_${Cache.tempUnits}`;
      } else if (this.settingWhichGraph === "rain") {
        property = `chance_of_rain`;
      }
      const toParse = Object.values(
        Cache.cachedData.forecast.forecastday[index].hour,
      );
      const parsedData = [];
      toParse.forEach((element) => {
        const hour = new Date(element.time).getHours();
        parsedData.push({
          hour,
          temp: element[property],
        });
      });
      const isCurrentDay = index === 0;
      this.render({ parsedData, isCurrentDay });
    });

    this.btnTemp.addEventListener("click", () => {
      this.settingWhichGraph = "temp";
      this.btnTemp.classList.add("selected");
      this.btnRain.classList.remove("selected");

      Pubsub.emit("renderGraph", Cache.selectedDay);
    });

    this.btnRain.addEventListener("click", () => {
      this.settingWhichGraph = "rain";
      this.btnRain.classList.add("selected");
      this.btnTemp.classList.remove("selected");

      Pubsub.emit("renderGraph", Cache.selectedDay);
    });
  }

  render(data) {
    const lineNow = data.isCurrentDay ? 1 : 0;
    const lineNowValue = new Date(
      Cache.cachedData.current.last_updated,
    ).getHours();
    let units;
    let color;
    if (this.settingWhichGraph === "temp") {
      units = "°";
      color = "#1A83DD";
    } else if (this.settingWhichGraph === "rain") {
      units = "%";
      color = "#dd1a79";
    }
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
            borderColor: color,
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
                return `${value}${units}`;
              },
              stepSize: 1,
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
