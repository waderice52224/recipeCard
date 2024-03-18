const title = document.getElementById('titleForm');
const ingredient = document.getElementById('ingredientForm');
const instruction = document.getElementById('instructionForm');

title.addEventListener('submit', function(event) {
    event.preventDefault();

    const inputValue = document.getElementById('recipeTitleInput').value;

    console.log('Tile:', inputValue);

});


ingredient.addEventListener('submit', function(event) {
    event.preventDefault();

    const inputValue = document.getElementById('ingredientInput').value;

    console.log('Ingredient:', inputValue);

});

instruction.addEventListener('submit', function(event) {
    event.preventDefault();

    const inputValue = document.getElementById('instructionInput').value;

    console.log('Instuction:', inputValue);

});