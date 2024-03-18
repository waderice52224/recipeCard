const form = document.getElementById('titleForm');

form.addEventListener('submit', function(event) {
    event.preventDefault();

    const inputValue = document.getElementById('recipeTitleInput').value;

    console.log('Submitted value:', inputValue);

});