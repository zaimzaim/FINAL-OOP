const mealNames = ["Burek", "Cevapi Sausages", "Croatian Bean Stew", "Croatian lamb Peka", "Fresh sardines", "Mushroom soup with buckwheat"];
const mealsDiv = document.getElementById("meals");

mealNames.forEach((mealName, index) => {
  const searchUrl = `https://www.themealdb.com/api/json/v1/1/search.php?s=${mealName}`;

  fetch(searchUrl)
    .then(response => response.json())
    .then(data => {
      const mealDetails = data.meals[0];

      // Create HTML elements for the meal details
      const name = document.createElement("h2");
      name.textContent = mealDetails.strMeal;

      const image = document.createElement("img");
      image.src = mealDetails.strMealThumb;

      const ingredients = document.createElement("ul");
      for (let i = 1; i <= 5; i++) {
        const ingredient = mealDetails[`strIngredient${i}`];
        if (ingredient) {
          const ingredientItem = document.createElement("li");
          ingredientItem.textContent = `${ingredient}`;
          ingredients.appendChild(ingredientItem);
        }
      }

      // Append the elements to the mealsDiv
      const mealDiv = document.createElement("div");
      mealDiv.appendChild(name);
      mealDiv.appendChild(image);
      mealDiv.appendChild(ingredients);
      mealsDiv.appendChild(mealDiv);
    })
    .catch(error => console.log(error));
});
