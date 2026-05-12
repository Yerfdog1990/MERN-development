
const person1 = {
    name: 'John',
    city: 'New York'
}
console.log("Object person1: ", person1);

// Shallow copy by reference
console.log("======= Shallow copy by reference =======");
const person2 = person1;
console.log("Object person2: ", person2);
person2.name = 'Jane';

console.log("Object person1: ", person1); // name : Jane
console.log("Object person2: ", person2); // name : Jane

// Shallow copy using spread operator
console.log("======= Shallow copy using spread operator =======");
const person3 = { ...person1 };
console.log("Object person3: ", person3);
person3.name = 'Jack';

console.log("Object person1: ", person1); // name : Jane
console.log("Object person3: ", person3); // name : Jack

// Shallow copy using Object.assign()
console.log("======= Shallow copy using Object.assign() =======");
const person4 = Object.assign({}, person1);
console.log("Object person4: ", person4);
person4.name = 'Jacob';

console.log("Object person1: ", person1); // name : Jane
console.log("Object person4: ", person4); // name : Jacob

// Demonstration of shallow copy limitations with nested objects
console.log("======= Demonstration of shallow copy limitations with nested objects =======");
const original = {
    name: 'John',
    address: {
        city: 'New York',
        country: 'USA'
    }
};

// Shallow copy
const shallowCopy = { ...original };

// Modify nested property in shallow copy
shallowCopy.address.city = 'Boston';

console.log('Original address city:', original.address.city); // 'Boston' - CHANGED!
console.log('Shallow copy address city:', shallowCopy.address.city); // 'Boston'

// This shows the limitation: nested objects are still shared by reference
