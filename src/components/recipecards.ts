class RecipeCards extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: "open" });
    }

    connectedCallback() {
        this.fetchDataAndRender();
    }

    async fetchDataAndRender() {
        try {
            const response = await fetch("https://www.themealdb.com/api/json/v1/1/filter.php?c=Dessert");
            const data = await response.json();
            const meals = data.meals || [];

            const recipeList = document.createElement("ul");

            meals.forEach((meal: { strMeal: string, strMealThumb: string }) => {
                const recipeItem = document.createElement("li");
                const recipeContainer = document.createElement("div");

                const recipeImage = document.createElement("img");
                recipeImage.src = meal.strMealThumb; 
                recipeImage.alt = meal.strMeal;
                recipeContainer.appendChild(recipeImage);
                
                const recipeName = document.createElement("p");
                recipeName.textContent = meal.strMeal; 
                recipeContainer.appendChild(recipeName);

                recipeItem.appendChild(recipeContainer);
                recipeList.appendChild(recipeItem);
            });

            this.shadowRoot!.innerHTML = `
            <link rel="stylesheet" href="../main.css">

              <center>  <h2>Desserts recipes</h2> </center>
            `;
            this.shadowRoot!.appendChild(recipeList);
        } catch (error) {
            console.error("Error");
        }
    }
}

customElements.define("recipe-container", RecipeCards);
export default RecipeCards;

