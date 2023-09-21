class RecipeCards extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: "open" });
    }

    connectedCallback() {
        this.render();
    }

   render(){
        this.shadowRoot!.innerHTML = `
        <link rel="stylesheet" href="../main.css">

            
        `;
    }
}


customElements.define("recipe-container", RecipeCards);
export default RecipeCards;