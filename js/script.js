const addRecipe = document.getElementById("add-recipe-btn"); // Add Recipe Button
const showBtn = document.getElementById("form-id"); // Form Container

const showRecipeBtn = document.getElementById("show-btn"); // Show Recipe Button
const recipeInfo = document.getElementById("recipe-info"); // Recipe Info Div
console.log(showRecipeBtn);
console.log(recipeInfo);

const div1 = document.getElementById("recipe-display"); // Recipe Display Div

// Toggle Recipe Info Visibility on Show Recipe Button Click
showRecipeBtn.addEventListener("click", () => {
    console.log(recipeInfo);
    recipeInfo.classList.toggle("hidden");
});

// Toggle Add Recipe Form Visibility on Add Recipe Button Click
addRecipe.addEventListener("click", () => {
    showBtn.classList.toggle("hidden");
    addRecipe.classList.toggle("hidden")
    
    if(showBtn.classList.contains("hidden")){
        addRecipe.classList.toggle("hidden")
    }
});

// Prevent Default Input Behavior When Pressing Enter
const inputs = document.querySelectorAll("#form-id input[type='text']");
inputs.forEach(function (input) {
    input.addEventListener("keydown", function (event) {
        if (event.key === "Enter") {
            event.preventDefault();
            return false;
        }
    });
});

const recipes = [{
    title: "Spaghetti Aglio e Olio",
    ingredients: [
        "400g (14 oz) spaghetti",
        "6 cloves garlic, thinly sliced",
        "1/2 cup extra virgin olive oil",
        "1/4 teaspoon red pepper flakes (optional)",
        "Salt, to taste",
        "Freshly ground black pepper, to taste",
        "1/4 cup fresh parsley, chopped",
        "Grated Parmesan cheese (optional)",
    ],
    instructions: [
        "Bring a large pot of salted water to a boil.",
        "Add the spaghetti and cook according to the package instructions until al dente.",
        "Reserve about 1 cup of pasta cooking water, then drain the spaghetti.",
        "While the pasta is cooking, heat the olive oil in a large pan over medium heat.",
        "Add the garlic slices and cook until they are golden brown and fragrant, about 2-3 minutes.",
        "Be careful not to burn the garlic.",
        "If using, add the red pepper flakes and cook for another 30 seconds.",
        "Add the drained spaghetti to the pan with the garlic and oil.",
        "Toss the pasta to coat it evenly with the oil and garlic.",
        "If the pasta seems dry, add a little of the reserved pasta cooking water, a few tablespoons at a time, until the desired consistency is reached.",
        "Season with salt and freshly ground black pepper to taste.",
        "Stir in the chopped parsley.",
        "Serve immediately, topped with grated Parmesan cheese if desired."
    ]
}];

// Function to Display Recipes
function show() {
    const div2 = document.createElement("div"); // Container for Recipe
    div2.classList.add("recipe");
    div1.append(div2);

    recipes.forEach((item, index) => {
        div2.innerHTML = `
            <div id="recipe-controls">
                <h3 id="recipe-title">${item.title}</h3>
                <div id="recipe-function">
                    <button id="edit-button">Edit</button>
                    <button id="delete-btn">Delete</button>
                    <button id="show-btn">Show Recipe</button>
                </div>  
            </div>
            <div id="recipe-info">
                <h4>Ingredients</h4>
                <ul id="ingredients-list">
                    <li> ${item.ingredients[index + 1]} </li>
                </ul>
                <h4>Instructions</h4>
                <ol id="instructions-list">
                    <li class="list">Preheat oven to 375f or 190c; line muffin cups with papers</li>
                    <li class="list">Cream butter and sugar till light and fluffy (make sure the butter is room temp so the mixture doesn't clump). Beat in eggs one at a time.</li>
                    <li class="list">Add flour (mixed with baking powder and salt) alternating with milk beat well; stir in vanilla.</li>
                    <li class="list">Divide evenly among pans and bake for 18 minutes. Let cool in pans and enjoy! :).</li>
                </ol>
            </div>` 
    });
}

show();
