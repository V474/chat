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

  // Own properties
  function Bird(name) {
    this.name = name;
    this.numLegs = 2;
  }
  
  let canary = new Bird("Tweety");
  let ownProps = [];
  // Змініть код лише під цим рядком
  for (let property in canary) {
    if(canary.hasOwnProperty(property)) {
      ownProps.push(property);
    }
  }
  

  //Inheritance
  function Cat(name) {
    this.name = name;
  }
  
  Cat.prototype = {
    constructor: Cat,
    eat: function() {
      console.log("nom nom nom");
    }
  };
  
  function Bear(name) {
    this.name = name;
  }
  
  Bear.prototype = {
    constructor: Bear,
    eat: function() {
      console.log("nom nom nom");
    }
  };
  
  function Animal() { }
  
  Animal.prototype = {
    constructor: Animal,
  
  };

//Superprototype

  function Animal() { }

Animal.prototype = {
  constructor: Animal,
  eat: function() {
    console.log("nom nom nom");
  }
};