import "./css/font.css";
import "./css/style.css";
import App from "./js/App";

const body = document.querySelector("body");
const app = new App();
body.append(app.container);
