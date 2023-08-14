import "../../css/Day.css";

export default class Day {
  constructor() {
    // DOM
    this.container = document.createElement("div");
    this.container.id = "dayContainer";

    this.imgIcon = document.createElement("img");
    this.imgIcon.id = "dayIcon";

    this.divDayOfWeek = document.createElement("div");
    this.divDayOfWeek.id = "dayDay";

    this.divTemperatureMAX = document.createElement("div");
    this.divTemperatureMAX.id = "dayMax";

    this.divTemperatureMIN = document.createElement("div");
    this.divTemperatureMIN.id = "dayMin";

    this.container.append(
      this.imgIcon,
      this.divDayOfWeek,
      this.divTemperatureMAX,
      this.divTemperatureMIN,
    );
  }

  render(data) {
    this.imgIcon.src = data.day.condition.icon;
    this.divDayOfWeek.innerText = new Date(
      data.date_epoch * 1000,
    ).toLocaleDateString("en-US", { weekday: "long", timeZone: "UTC" });
    this.divTemperatureMAX.innerText = `${data.day.maxtemp_c}°`;
    this.divTemperatureMIN.innerText = `${data.day.mintemp_c}°`;
  }
}
