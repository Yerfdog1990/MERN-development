// Function as object property
const person = {
    firstName: 'John',
    lastName: 'Doe',
    age: 30,
    fullName: function () {
        return `${this.firstName} ${this.lastName}`;
    }
};

console.log(person.fullName()); // John Doe

// More than two functions as object properties
const animal = {
    lion: function(){
        return 'The lion is a carnivore';
    },
    zebra: function(){
        return 'The zebra is a herbivore';
    },
    elephant(){
        return 'The elephant is a herbivore';
    }
}

console.log(animal.lion()); // The lion is a carnivore
console.log(animal.zebra()); // The zebra is a herbivore
console.log(animal.elephant()); // The elephant is a herbivore
