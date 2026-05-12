// Object literal
const person = {
    firstName: 'John',
    lastName: 'Doe',
    age: 30
};

console.log(person.firstName); // John -> Access object using dot notation
console.log(person['lastName']); // Doe -> Access object using bracket notation
console.log(person.age); // 30 -> Access object using dot notation
console.log(typeof person) // object -> Check object type