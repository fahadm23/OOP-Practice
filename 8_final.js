//Basic way to create object

const person = {
    name: 'Fahad Mohammad',
    age: '26',
    eyes: 'brown',
    height: 'tall',
}

//Using a constructor (function) to create objext

function person(name, age, eyes, height) {
    this.name = name;
    this.age = age;
    this.eyes = eyes;
    this.height = height;

    this.getSummary = function() {
        return `${this.name} is ${this.age} years old, the colour of his eyes is ${this.eyes}, and he is ${this.height}.`;
    };
}


//Instantiate the object

const newPerson = new person('Fahad Mohammad', '26', 'brown', 'tall');

console.log(newPerson.getSummary());

//Using a class to create object

class Person {
    constructor (name, age, eyes, height) {
    this.name = name;
    this.age = age;
    this.eyes = eyes;
    this.height = height;
}
}


//Instantiate Object

const person1 = new Person('Fahad', '26', 'brown', 'tall');

console.log(person1);



