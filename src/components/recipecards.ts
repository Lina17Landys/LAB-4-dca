export class RecipeCards extends HTMLElement {
  private meals: any[] = [];
  private filteredMeals: any[] = [];

  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.handleSearch = this.handleSearch.bind(this);
    this.addEventListener("search", this.handleSearch as EventListener);
  }
  connectedCallback() {
    this.fetchDataAndRender();
  }

  async fetchDataAndRender() {
    try {
      const response = await fetch("https://www.themealdb.com/api/json/v1/1/filter.php?c=Dessert");
      const data = await response.json();
      this.meals = data.meals || [];
      this.filteredMeals = this.meals;
      this.renderRecipes();
    } catch (error) {
      console.error("Error");
    }
  }

  handleSearch(event: Event) {
    const customEvent = event as CustomEvent<string>;
    const searchText = customEvent.detail;
    this.filteredMeals = this.meals.filter((meal) =>
      meal.strMeal.toLowerCase().includes(searchText)
    );
    this.renderRecipes();
  }

  renderRecipes() {
    const recipeList = document.createElement("ul");

    this.filteredMeals.forEach((meal) => {
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
      <center><h2>Desserts recipes</h2></center>
    `;
    this.shadowRoot!.appendChild(recipeList);
  }
}

customElements.define("recipe-container", RecipeCards);