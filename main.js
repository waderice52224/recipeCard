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

    const myDiv = document.getElementById('ingredientsBox');

    const content = document.createElement('p');

    content.textContent = inputValue;

    myDiv.appendChild(content);
});

instruction.addEventListener('submit', function(event) {
    event.preventDefault();

    const inputValue = document.getElementById('instructionInput').value;

    const myDiv = document.getElementById('instructionsBox');

    const content = document.createElement('p');

    content.textContent = inputValue;

    myDiv.appendChild(content);

});