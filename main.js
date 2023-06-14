let input = document.querySelector('#input');
let submitButton = document.querySelector('#submit');
let result = document.querySelector('#result');

submitButton.addEventListener('click', function() {
    let text = input.value;
    result.textContent = text;
    input.value = '';
});
