const addRecipe = document.getElementById("openModalBtn"); // Add Recipe Button
const showBtn = document.getElementById("form-id"); // Form Container

const div = document.getElementById("recipe-display"); // Recipe Display Div

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
    showBtn.classList.toggle("hidden");
    addRecipe.classList.toggle("hidden");
    clearInputs()
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
        showBtn.classList.toggle("hidden");
        addRecipe.classList.toggle("hidden");
    }
}

// Toggle Add Recipe Form Visibility on Add Recipe Button Click
addRecipe.addEventListener("click", () => {
    showBtn.classList.toggle("hidden");
    addRecipe.classList.toggle("hidden");

    // Ensure the Add Recipe Button is visible when the form is hidden
    if (showBtn.classList.contains("hidden")) {
        addRecipe.classList.remove("hidden");
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

const recipes = JSON.parse(localStorage.getItem("recipes")) || [
    {
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
        ],
        preptime: "45 minutes"
    },
    {
        title: "Simple Chakli (or Chakri)",
        ingredients: [
            "2 cups rice flour",
            "1 cup gram flour (besan)",
            "1 tsp carom seeds (ajwain)",
            "1 tsp cumin seeds (jeera)",
            "1 tsp sesame seeds (til)",
            "1/2 tsp red chili powder",
            "1/4 tsp asafoetida (hing)",
            "Salt to taste",
            "2 tbsp melted butter or oil",
            "Water, as needed",
            "Oil, for frying",
        ],
        instructions: [
            "Mix Dry Ingredients: In a large bowl, combine the rice flour, gram flour, carom seeds, cumin seeds, sesame seeds, red chili powder, asafoetida, and salt. Mix well.",
            "Add Butter/Oil: Add the melted butter or oil to the dry ingredients and mix until the mixture resembles breadcrumbs.",
            "Form Dough: Gradually add water, a little at a time, and knead to form a smooth, soft dough. The dough should be pliable but not too sticky.",
            "Prepare Chakli Maker: Grease the inside of a chakli maker or a piping bag fitted with a star nozzle.",
            "Shape Chakli: Take a portion of the dough and place it into the chakli maker. Press out spirals of dough onto small pieces of parchment paper or directly onto a greased plate, forming a spiral shape.",
            "Heat Oil: Heat oil in a deep frying pan over medium heat. To check if the oil is ready, drop a small piece of dough into the oil. If it sizzles and rises to the surface, the oil is hot enough.",
            "Fry Chakli: Carefully slide the shaped chaklis into the hot oil. Fry a few at a time, ensuring not to overcrowd the pan. Fry until they turn golden brown and crisp, turning occasionally to ensure even cooking.",
            "Drain and Cool: Remove the fried chaklis with a slotted spoon and drain on paper towels to remove excess oil. Allow them to cool completely.",
            "Store: Once cooled, store the chaklis in an airtight container to maintain their crispness.",
            "Enjoy!",
        ],
        preptime: "1 hour"
    },
    {
        title: "SIMPLE VANILLA CUPCAKES",
        ingredients: [
            "2 cups flour",
            "1⁄2 teaspoon salt",
            "2 teaspoons baking powder",
            "1⁄2 cup butter, softened",
            "3⁄4 cup sugar (if you like your cupcakes very friggen' sweet, add a little more.)",
            "2 eggs",
            "1 cup milk",
            "1 teaspoon vanilla essence (optional)",
        ],
        instructions: [
            "Preheat oven to 375f or 190c; line muffin cups with papers",
            "Cream butter and sugar till light and fluffy (make sure the butter is room temp so the mixture doesn't clump).",
            "Beat in eggs one at a time.",
            "Add flour (mixed with baking powder and salt) alternating with milk beat well; stir in vanilla.",
            "Divide evenly among pans and bake for 18 minutes. Let cool in pans and enjoy! :).",
        ],
        preptime: "1 hour 30 minutes"
    }
];

// Function to Display Array Recipes
const displayRecipes = (recipes) => {
    div.innerHTML = ""; // Clear existing recipes
    recipes.forEach((item, index) => {
        const recipeDiv = document.createElement("div");
        recipeDiv.classList.add("recipe");

        recipeDiv.innerHTML = `
            <div class="recipe-controls">
                <h3 class="recipe-title-${index}">${item.title}</h3>
                <div class="recipe-function">
                    <button class="edit-button" data-index="${index}">Edit</button>
                    <button class="delete-button" data-index="${index}">Delete</button>
                    <button class="show-button" data-index="${index}">Show Recipe</button>
                </div>  
            </div>
            <div id="recipe-info-${index}" class="recipe-info hidden">
                <h4>Ingredients</h4>
                <ul class="ingredients-list">
                    ${item.ingredients.map(ingredient => `<li>${ingredient}</li>`).join('')}
                </ul>
                <h4>Instructions</h4>
                <ol class="instructions-list">
                    ${item.instructions.map(instruction => `<li>${instruction}</li>`).join('')}
                </ol>
                <h4>Preptime</h4>
                <p class="preptime">
                    <strong>${item.preptime}</stong>
                </p>
            </div>`;
        
        div.appendChild(recipeDiv);
    });
};

// Display Recipes Initially
displayRecipes(recipes);

// Event Delegation for Show, Edit, and Delete Buttons
div.addEventListener("click", (event) => {
    if (event.target.classList.contains("show-button")) {
        const index = event.target.dataset.index;
        const recipeInfoDiv = document.getElementById(`recipe-info-${index}`);
        if (recipeInfoDiv.classList.contains("hidden")) {
            event.target.textContent = "Close Recipe";
            recipeInfoDiv.classList.remove("hidden");

        } else {
            event.target.textContent = "Show Recipe";
            recipeInfoDiv.classList.add("hidden");
            recipeInfoDiv.classList.toggle('expanded');
        }
    }
    // Implement edit and delete functionality here
});

const submitBtn = document.querySelector("#add-recipe");

function clearInputs(){
    document.querySelector("#title-input").value = "";
    document.querySelector("#recipe-description-input").value = "";
    document.querySelector("#ingredients").value = "";
    document.querySelector("#instructions").value= "";
    document.querySelector("#prep-time").value = "";
}

submitBtn.addEventListener("click", () =>{
    // event.preventDefault();
    const recipeTitle = document.querySelector("#title-input").value;
    const recipeDescription = document.querySelector("#recipe-description-input").value;
    const recipeIngredients = document.querySelector("#ingredients").value.split("\n");
    const recipeInstructions = document.querySelector("#instructions").value.split("\n");
    const recipePreptime = document.querySelector("#prep-time").value;

    if(recipeTitle === "" || recipeIngredients === "" || recipeInstructions === "" || recipePreptime === ""){
        alert("Please complete all fields in the Recipe form:\n\n" +
              "• Recipe Title\n" +
              "• Ingredients\n" +
              "• Instructions\n" +
              "• Preparation Time\n\n" +
              "All fields are required to add a new recipe.");
        return;
    } else {
        const newRecipe = {
            title: recipeTitle,
            ingredients: recipeIngredients,
            instructions: recipeInstructions,
            preptime: recipePreptime
        };
        recipes.push(newRecipe);
        
        localStorage.setItem("recipes", JSON.stringify(recipes)); // Save to local storage
        displayRecipes(recipes); // Update displayed recipes

        clearInputs();
        modal.style.display = "none";
        showBtn.classList.toggle("hidden");
        addRecipe.classList.toggle("hidden");
    }
});

// Display recipes from local storage on page load
document.addEventListener("DOMContentLoaded", () => {
    const storedRecipes = JSON.parse(localStorage.getItem("recipes"));
    if (storedRecipes) {
        displayRecipes(storedRecipes);
    }
});
