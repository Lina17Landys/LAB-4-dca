import RecipeCards from "./recipecards";
class SearchBar extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  connectedCallback() {
    this.render();
    this.setupSearch();
  }

  render() {
    this.shadowRoot!.innerHTML = `
      <link rel="stylesheet" href="../main.css">
      <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />

      <div class="searchBar">
        <div class="box">
          <span class="material-symbols-outlined">search</span>
          <input id="searchBar" type="text" name="search" placeholder="Search..">
        </div>
      </div>
    `;
  }

  setupSearch() {
    const searchBar = this.shadowRoot!.getElementById("searchBar") as HTMLInputElement;
    searchBar.addEventListener("input", () => {
      const searchText = searchBar.value.toLowerCase();
      const recipeCards = document.querySelector("recipe-container") as RecipeCards;
      recipeCards.searchItem(searchText);
    });
  }
}

customElements.define("searchbar-container", SearchBar);
export default SearchBar;
