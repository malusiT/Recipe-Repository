const addRecipe = document.getElementById("add-recipe-btn");
const showBtn = document.getElementById("form-id");

const showRecipeBtn = document.getElementById("show-btn");
const recipeInfo = document.getElementById("recipe-info");
console.log(showRecipeBtn);
console.log(recipeInfo)

showRecipeBtn.addEventListener("click", () =>{
    console.log(recipeInfo)
    recipeInfo.classList.toggle("hidden")
   
})

addRecipe.addEventListener("click", () => {

    showBtn.classList.toggle("hidden");
    addRecipe.classList.toggle("hidden")
    
    if(showBtn.classList.contains("hidden")){
        addRecipe.classList.toggle("hidden")
    }
});

inputs = document.querySelectorAll("#form-id input[type='text']");
inputs.forEach(function (input) {
    input.addEventListener("keydown", function (event) {
        if (event.key === "Enter") {
            event.preventDefault();
            return false;
        }
    });
});