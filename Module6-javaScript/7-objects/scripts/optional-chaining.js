const person = {
    name: "Godfrey",
    age: 36,
    address: {
        street: "123 Main St",
        city: "New York",
        country: "USA"
    }
}

console.log(person.name);
console.log(person.age);
console.log(person.address.street);
console.log(person.address.city);
console.log(person.address.country);
console.log(person.job); // Undefined
//console.log(person.job.branch); // returns error
console.log(person.job?.branch); // Undefined (no error)