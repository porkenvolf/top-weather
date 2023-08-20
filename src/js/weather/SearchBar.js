import "../../css/modules/SearchBar.css";
import Pubsub from "../Pubsub";

export default class SearchBar {
  constructor() {
    this.container = document.createElement("div");
    this.container.id = "searchContainer";

    this.searchBar = document.createElement("input");
    this.searchBar.type = "text";
    this.searchBar.placeholder = "Search location";

    this.container.append(this.searchBar);

    this.bindEvents();
  }

  bindEvents() {
    this.searchBar.addEventListener("change", () => {
      Pubsub.emit("apiCall", this.searchBar.value);
      Pubsub.emit("selectedDay", 0);
    });
  }
}
