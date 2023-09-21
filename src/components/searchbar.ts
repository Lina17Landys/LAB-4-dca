class SearchBar extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  connectedCallback() {
    this.render();
  }

  render() {
    this.shadowRoot!.innerHTML = `
    <link rel="stylesheet" href="../main.css">
    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />
    
    <div class="searchBar">
        <div class="box">
        <span class="material-symbols-outlined">search</span>
            <input id="searchBar" onkeyup="searchItem()" type="text" name="search" placeholder="Search..">
          </div>
`;
  }
}

customElements.define("searchbar-container", SearchBar);
export default SearchBar;
