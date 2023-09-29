export class SearchBar extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.handleEnterKey = this.handleEnterKey.bind(this);
  }

  connectedCallback() {
    this.render();
    const searchBarInput = this.shadowRoot!.getElementById("searchBar") as HTMLInputElement;
    searchBarInput.addEventListener("keydown", this.handleEnterKey);
  }

  handleEnterKey(event: KeyboardEvent) {
    if (event.key === "Enter") {
      const searchText = (event.target as HTMLInputElement).value.toLowerCase();
      const searchEvent = new CustomEvent("search", { detail: searchText });
      this.dispatchEvent(searchEvent);
    }
  }

  render() {
    this.shadowRoot!.innerHTML = `
      <link rel="stylesheet" href="../main.css">
      <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />

      <div class="searchBar">
        <div class="box">
          <span class="material-symbols-outlined">search</span>
          <input id="searchBar" type="text" name="search" placeholder="Search...">
        </div>
      </div>
    `;
  }
}

customElements.define("searchbar-container", SearchBar);

