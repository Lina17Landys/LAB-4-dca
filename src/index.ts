console.log("hola");
import "./components/exports";

export const recipies = fetch('https://www.themealdb.com/api/json/v1/1/filter.php?c=Dessert');
recipies
.then ((res) => {
    return res.json()
})
.then((data) => {
    console.log(data)
})
.catch((error) => console.log(error));

class App extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  connectedCallback() {
    this.render();
  }

  render() {
    this.shadowRoot!.innerHTML = `
      <searchbar-container></searchbar-container>
      <recipe-container></recipe-container>
    `;
  }
}

customElements.define("app-container", App);
