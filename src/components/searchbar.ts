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
    <link rel="stylesheet" type="text/css"
        href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css">

    <div class="searchBar">
        <div class="box">
            <i class="fa fa-search" aria-hidden="true"></i>
            <input id="searchBar" onkeyup="searchItem()" type="text" name="search" placeholder="Search..">
          </div>
`;
  }
}

customElements.define("searchbar-container", SearchBar);
export default SearchBar;
