const addRecipe = document.getElementById("openModalBtn"); // Add Recipe Button
const showBtn = document.getElementById("form-id"); // Form Container

const showRecipeBtn = document.getElementById("show-btn"); // Show Recipe Button
const recipeInfo = document.getElementById("recipe-info"); // Recipe Info Div
console.log(showRecipeBtn);
console.log(recipeInfo);

const div1 = document.getElementById("recipe-display"); // Recipe Display Div\

//Mo
// Get the modal
const modal = document.getElementById("modal");

// Get the button that opens the modal
const btn = document.getElementById("openModalBtn");

// Get the <span> element that closes the modal
const span = document.getElementById("closeModalBtn");

// When the user clicks the button, open the modal 
btn.onclick = function() {
    modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

console.log("Hello")

// Toggle Recipe Info Visibility on Show Recipe Button Click
showRecipeBtn.addEventListener("click", () => {
    recipeInfo.classList.toggle("hidden");
});

// Toggle Add Recipe Form Visibility on Add Recipe Button Click
addRecipe.addEventListener("click", () => {
    showBtn.classList.toggle("hidden");
    addRecipe.classList.toggle("hidden");

    // Ensure the Add Recipe Button is visible when the form is hidden
    if (showBtn.classList.contains("hidden")) {
        addRecipe.classList.toggle("hidden");
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

    recipes.forEach((item) => {
        div2.innerHTML = `
            <div id="recipe-controls">
                <h3 id="recipe-title">${item.title}</h3>
                <div id="recipe-function">
                    <button id="edit-button">Edit</button>
                    <button id="delete-btn">Delete</button>
                    <button id="show-btn">Show Recipe</button>
                </div>  
            </div>
            <div id="recipe-info" class="hidden">
                <h4>Ingredients</h4>
                <ul id="ingredients-list">
                    ${item.ingredients.map(ingredient => `<li>${ingredient}</li>`).join('')}
                </ul>
                <h4>Instructions</h4>
                <ol id="instructions-list">
                    ${item.instructions.map(instruction => `<li>${instruction}</li>`).join('')}
                </ol>
            </div>` 

        const showRecipeBtn = div2.querySelector("#show-btn");
        const recipeInfoDiv = div2.querySelector("#recipe-info");

        // Toggle Recipe Info Visibility on Show Recipe Button Click for Each Recipe
        showRecipeBtn.addEventListener("click", () => {
            recipeInfoDiv.classList.toggle("hidden");
        });
    });
}

show();
