const title = document.getElementById('titleForm');
const ingredient = document.getElementById('ingredientForm');
const instruction = document.getElementById('instructionForm');
const recipeObj = {
    title: "",
    ingredients: [],
    instructions: []
};

function deletePlaceholdIng(){
    const deleteMe = document.getElementById('deleteMeIng');
    if (deleteMe) {
        deleteMe.remove();
    }
}

function deletePlaceholdIst(){
    const deleteMe = document.getElementById('deleteMeIns');
    if (deleteMe) {
        deleteMe.remove();
    }
}

title.addEventListener('submit', function(event) {
    event.preventDefault();

    const inputValue = document.getElementById('recipeTitleInput').value;

    recipeObj.title = inputValue;
    document.getElementById('recipeTitleInput').value = inputValue + " is now the tile of the recipe."

});

ingredient.addEventListener('submit', function(event) {
    event.preventDefault();

    const inputValue = document.getElementById('ingredientInput').value;

    const myDiv = document.getElementById('ingredientsBox');

    const content = document.createElement('p');

    content.textContent = inputValue;

    content.setAttribute('data-ingredient', inputValue);

    content.addEventListener("click", () => {
        content.remove();
        const index = recipeObj.ingredients.indexOf(inputValue);
        if (index !== -1) {
            recipeObj.ingredients.splice(index, 1);
        }
    });

    myDiv.appendChild(content);

    recipeObj.ingredients.push(inputValue);
    deletePlaceholdIng();
    document.getElementById('ingredientInput').value = "";
});

instruction.addEventListener('submit', function(event) {
    event.preventDefault();

    const inputValue = document.getElementById('instructionInput').value;

    const myDiv = document.getElementById('instructionsBox');

    const content = document.createElement('p');

    content.textContent = inputValue;

    content.setAttribute('data-instruction', inputValue);

    content.addEventListener("click", () => {
        content.remove();
        const index = recipeObj.instructions.indexOf(inputValue);
        if (index !== -1) {
            recipeObj.instructions.splice(index, 1);
        }
    });

    myDiv.appendChild(content);

    recipeObj.instructions.push(inputValue);
    deletePlaceholdIst();
    document.getElementById('instructionInput').value = "";
});
