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


//Supertype for all animals
function Animal() { }

Animal.prototype = {
  constructor: Animal,
  eat: function() {
    console.log("nom nom nom");
  }
};

// Змініть код лише під цим рядком

let duck = Object.create(Animal.prototype); 
duck.name = "duck";

let beagle = Object.create(Animal.prototype); 
beagle.name = "beagle";

//Child`s prototype

function Animal() { }

Animal.prototype = {
  constructor: Animal,
  eat: function() {
    console.log("nom nom nom");
  }
};

function Dog() { }

// Змініть код лише під цим рядком
Dog.prototype = Object.create(Animal.prototype);

let beagle = new Dog();

//filteruyyyyyyyyy
Array.prototype.myFilter = function(callback) {
  const newArray = [];
  // Змініть код лише під цим рядком
 for (let i = 0; i < this.length; i++) {
    if (callback(this[i], i, this)) {
      newArray.push(this[i]);
    }
  }
  // Змініть код лише над цим рядком
  return newArray;
};

//Slice

function sliceArray(anim, beginSlice, endSlice) {
  return anim.slice(beginSlice, endSlice);
}

//Splice
function nonMutatingSplice(cities) {
  // Змініть код лише під цим рядком
  return cities.slice(0, 3);

  // Змініть код лише над цим рядком
}

const inputCities = ["Chicago", "Delhi", "Islamabad", "London", "Berlin"];
nonMutatingSplice(inputCities);

//Concat
function nonMutatingConcat(original, attach) {
  // Змініть код лише під цим рядком
  return original.concat(attach);

  // Змініть код лише над цим рядком
}

const first = [1, 2, 3];
const second = [4, 5];
nonMutatingConcat(first, second);