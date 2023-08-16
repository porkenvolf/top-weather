import Chart from "chart.js/auto";

export default class Graph {
  constructor() {
    this.container = document.createElement("div");
    this.canvas = document.createElement("canvas");
    this.container.append(this.canvas);

    const data = [
      { year: 2010, count: 10 },
      { year: 2011, count: 20 },
      { year: 2012, count: 15 },
      { year: 2013, count: 25 },
      { year: 2014, count: 22 },
      { year: 2015, count: 30 },
      { year: 2016, count: 28 },
    ];
    this.cachedChart = new Chart(this.canvas, {
      type: "line",
      data: {
        labels: data.map((row) => row.year),
        datasets: [
          {
            data: data.map((row) => row.count),
            tension: 0.2,
          },
        ],
      },
    });
  }
}
