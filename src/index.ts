console.log("hola");

export const recipies = fetch('https://www.themealdb.com/api/json/v1/1/filter.php?c=Dessert');
recipies
.then ((res) => {
    return res.json()
})
.then((data) => {
    console.log(data)
})
.catch((error) => console.log(error));