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
    deleteMe.remove();

}
function deletePlaceholdIst(){
    const deleteMe = document.getElementById('deleteMeIns');
    deleteMe.remove();

}

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

    content.setAttribute('data-ingredient', inputValue);

    content.addEventListener("click", () => content.remove())

    myDiv.appendChild(content);


    recipeObj.ingredients.push(inputValue);
    deletePlaceholdIng();
});

instruction.addEventListener('submit', function(event) {
    event.preventDefault();

    const inputValue = document.getElementById('instructionInput').value;

    const myDiv = document.getElementById('instructionsBox');

    const content = document.createElement('p');

    content.textContent = inputValue;

    content.setAttribute('data-instruction', inputValue);

    content.addEventListener("click", () => content.remove())

    myDiv.appendChild(content);


    recipeObj.instructions.push(inputValue);
    deletePlaceholdIst();

});

