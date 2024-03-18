const title = document.getElementById('titleForm');
const ingredient = document.getElementById('ingredientForm');
const instruction = document.getElementById('instructionForm');
const recipeObj = {
    title: "",
    ingredients: [],
    instructions: []
};

title.addEventListener('submit', function(event) {
    event.preventDefault();

    const inputValue = document.getElementById('recipeTitleInput').value;

    recipeObj.title = inputValue;


});


ingredient.addEventListener('submit', function(event) {
    event.preventDefault();

    const inputValue = document.getElementById('ingredientInput').value;

    const myDiv = document.getElementById('ingredientsBox');

    const content = document.createElement('p');

    content.textContent = inputValue;

    myDiv.appendChild(content);
    recipeObj.ingredients.push(inputValue);
});

instruction.addEventListener('submit', function(event) {
    event.preventDefault();

    const inputValue = document.getElementById('instructionInput').value;

    const myDiv = document.getElementById('instructionsBox');

    const content = document.createElement('p');

    content.textContent = inputValue;

    myDiv.appendChild(content);
    recipeObj.instructions.push(inputValue);

});

