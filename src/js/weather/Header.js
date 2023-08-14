export default class Header {
  #output;

  #weatherObject;

  constructor() {
    // DOM
    this.container = document.createElement("div");
    this.divIcon = document.createElement("img");
    this.divTemperature = document.createElement("div");
    this.divHumidity = document.createElement("div");
    this.divWindSpeed = document.createElement("div");
    this.container.append(
      this.divIcon,
      this.divTemperature,
      this.divHumidity,
      this.divWindSpeed,
    );
    this.render();
  }

  render(data) {
    console.log(data);
    this.divTemperature.innerText = "dsa";
    this.divHumidity.innerText = "caca";
    this.divWindSpeed.innerText = "4343";
  }
}
