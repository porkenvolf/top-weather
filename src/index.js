import queryWeatherAPI from "./js/weather/API";
import DaysBar from "./js/weather/DaysBar";
import Pubsub from "./js/Pubsub";
import Header from "./js/weather/Header";

const body = document.querySelector("body");
const bar = new DaysBar();
const header = new Header();
body.append(header.container, bar.container);

queryWeatherAPI().then((data) => Pubsub.emit("render", data));
