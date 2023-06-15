let input = document.querySelector('#input');
let submitButton = document.querySelector('#submit');
let result = document.querySelector('#result');

submitButton.addEventListener('click', function() {
    let text = input.value;
    result.textContent = text;
    input.value = '';
});

function factorialize(num) {
    let count = 1;
    for (let i = 1; i <= num; i++) {
      count *= i;
    }
    return count;
  }
  
  factorialize(5);