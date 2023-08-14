import queryWeatherAPI from "./js/weather/API";
import DaysBar from "./js/weather/DaysBar";
import Pubsub from "./js/Pubsub";

const body = document.querySelector("body");
const bar = new DaysBar();
body.append(bar.container);

queryWeatherAPI().then((data) => Pubsub.emit("render", data));
