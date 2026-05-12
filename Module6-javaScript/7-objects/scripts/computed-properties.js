// Adding properties to an object
const person = {};

person.firstName = 'John';
person.lastName = 'Doe';
person.age = 30;

console.log(person); // { firstName: 'John', lastName: 'Doe', age: 30 }

// Computed properties
const readline = require('readline-sync');
const key = readline.question("What do you what to know about the person? ");

console.log(`The person's ${key} is ${person[key]}`);

// Variable computed as property
let city = readline.question("What is the city? ");
const place = {
    country: 'Nigeria',
    [city]: `I come from ${city}`
}

console.log(place[city]); // city is a variable, which has a property

console.log(place["country"]); // country is a property of the object
