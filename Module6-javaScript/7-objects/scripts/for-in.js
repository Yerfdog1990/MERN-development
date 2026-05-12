// Check if property exists in object
const person = {
    name: 'John',
    city: 'New York'
}

console.log('name' in person); // True
console.log('age' in person); // False

for (let key in person) {
    console.log(`${key} : ${person[key]}`);
}