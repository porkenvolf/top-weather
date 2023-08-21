export default class Footer {
  #year;

  #output;

  constructor(year) {
    this.#year = year;
    this.#output = this.#render();
    // this.#bindEvents();
  }

  #render() {
    const currentYear = new Date().getFullYear();
    let footerString;
    const year = this.#year.toString();
    footerString = year;
    if (!year.includes(currentYear)) {
      footerString = `${footerString}-${currentYear} - `;
    }
    const divFooter = document.createElement("footer");
    divFooter.innerHTML = `
            <small>
                &copy; Copyright ${footerString}
                <a href="https://github.com/porkenvolf" target="”_blank”">
                    Porkenvölf
                </a>
            </small>
            `;
    divFooter.style.display = "flex";
    divFooter.style.justifyContent = "center";
    divFooter.style.alignItems = "center";
    divFooter.style.color = "grey";
    divFooter.style.fontSize = "0.9rem";
    divFooter.style.position = "fixed";

    divFooter.style.bottom = "0";
    divFooter.style.left = "50%";
    divFooter.style.transform = "translateX(-50%)";
    divFooter.style.padding = "10px";

    divFooter.querySelector("a").style.color = "grey";

    return divFooter;
  }

  // #bindEvents() {}

  get output() {
    return this.#output;
  }
}
