(() => {
  "use strict";
  class e extends HTMLElement {
    constructor() {
      super(), this.attachShadow({ mode: "open" });
    }
    connectedCallback() {
      this.render();
    }
    render() {
      this.shadowRoot.innerHTML =
        '\n    <link rel="stylesheet" href="../main.css">\n    <link rel="stylesheet" type="text/css"\n        href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css">\n\n    <div class="searchBar">\n        <div class="box">\n            <i class="fa fa-search" aria-hidden="true"></i>\n            <input id="searchBar" onkeyup="searchItem()" type="text" name="search" placeholder="Search..">\n          </div>\n';
    }
  }
  customElements.define("searchbar-container", e),
    console.log("hola"),
    fetch("https://www.themealdb.com/api/json/v1/1/filter.php?c=Dessert")
      .then((e) => e.json())
      .then((e) => {
        console.log(e);
      })
      .catch((e) => console.log(e));
  class s extends HTMLElement {
    constructor() {
      super(), this.attachShadow({ mode: "open" });
    }
    connectedCallback() {
      this.render();
    }
    render() {
      this.shadowRoot.innerHTML =
        "\n        <searchbar-container></searchbar-container>\n        ";
    }
  }
  customElements.define("app-container", s);
})();
