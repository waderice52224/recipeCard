const title = document.getElementById('titleForm');
const ingredient = document.getElementById('ingredientForm');
const instruction = document.getElementById('instructionForm');
let titleName = "";

title.addEventListener('submit', function(event) {
    event.preventDefault();

    const inputValue = document.getElementById('recipeTitleInput').value;

    titleName = inputValue;


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

//Figuring out how to use writeRecipeToFile
const testRecipe = {
    title: "Chocolate Chip Cookies",
    ingredients: ["1 cup butter", "1 cup white sugar", "1 cup packed brown sugar", "2 eggs", "2 teaspoons vanilla extract", "3 cups all-purpose flour", "1 teaspoon baking soda", "2 teaspoons hot water", "1/2 teaspoon salt", "2 cups semisweet chocolate chips"],
    instructions: [
        "Preheat oven to 350 degrees F (175 degrees C).",
        "Cream together the butter, white sugar, and brown sugar until smooth. Beat in the eggs one at a time, then stir in the vanilla. Dissolve baking soda in hot water. Add to batter along with salt. Stir in flour and chocolate chips. Drop by large spoonfuls onto ungreased pans.",
        "Bake for about 10 minutes in the preheated oven, or until edges are nicely browned."
    ]
};


writeRecipeToFile(testRecipe); 
