# Reference and Copy Variables in JavaScript

## Introduction

Understanding how data is passed in JavaScript is essential for writing predictable and bug-free code. While JavaScript is often described as using pass-by-value, things behave differently when objects and arrays are involved. This distinction becomes especially important when copying or modifying data.

### Key Concepts:
- JavaScript passes primitive data types (Boolean, Null, Undefined, String, Number) by value, meaning changes do not affect the original data
- Non-primitive data types (Object, Array, Function) are passed by value of their reference, so changes can impact the original memory location
- Copying objects and arrays requires special handling to avoid unintended mutations due to shared references

The address is a data type that is passed by value just like a number, string, and address points to location in memory.

## Pass by Value

### Pass by value in case of number

```javascript
let age = 100;
let age2 = age;
document.write(age, age2); // Output: 100 100
document.write("<br>");

age = 200;
document.write(age, age2); // Output: 200 100
```

**Explanation:**
- `age` is assigned the value 100
- `age2` gets a copy of `age`'s value
- Both print as 100 100
- `age` is changed to 200
- `age2` remains unchanged
- **Reason**: Primitive values are copied by value in JavaScript

### Pass by value in case of string

```javascript
let name = 'sam';
let name2 = name;
document.write(name, name2); // Output: sam sam
document.write("<br>");

name = 'xyz';
document.write(name, name2); // Output: xyz sam
```

**Explanation:**
- `name` is assigned 'sam'
- `name2` gets a copy of `name`'s value
- Both print as sam sam
- `name` is changed to 'xyz'
- `name2` remains unchanged

## Pass by Reference

### Pass by reference in case of array

```javascript
const players = ['Sam', 'Sarah', 'Ryan', 'Poppy'];
const team = players;
document.write(players, team); // Both print the same values twice
```

**Explanation:**
- `players` is an array with 4 names
- `team = players` does not copy the array
- Both variables reference the same array in memory
- `document.write(players, team)` prints the same values twice
- If you modify `team` or `players`, both will change
- **Reason**: Arrays are non-primitive and are copied by reference in JavaScript

#### Example of Reference Issue

```javascript
const players = ['Sam', 'Sarah', 'Ryan', 'Poppy'];
const team = players;
team[3] = 'xyz';
document.write(players, team); // Both arrays show the change
```

**Explanation:**
- It's an array reference, not an array copy
- They both point to the same array
- Modifying `team` affects `players` as well

## Array Copying Methods

We have 4 ways to do it. By using these methods the primary array will not change.

### 1. By using slice() method

```javascript
const players = ['Sam', 'Sarah', 'Ryan', 'Poppy'];
const playersCopy = players.slice();
playersCopy[2] = "west";
console.log(players, playersCopy);
// Output: ['Sam', 'Sarah', 'Ryan', 'Poppy'], ['Sam', 'Sarah', 'west', 'Poppy']
```

### 2. By using concat() method

Create a new array variable and then concatenate the older one in the new array.

```javascript
const players = ['Sam', 'Sarah', 'Ryan', 'Poppy'];
const playersCopy2 = [].concat(players);
playersCopy2[2] = 'hell';
console.log(players, playersCopy2);
// Output: ['Sam', 'Sarah', 'Ryan', 'Poppy'], ['Sam', 'Sarah', 'hell', 'Poppy']
```

### 3. By using ES6 Spread operator

```javascript
const players = ['Sam', 'Sarah', 'Ryan', 'Poppy'];
const playersCopy3 = [...players];
playersCopy3[3] = 'heeee hawww'; 
console.log(players, playersCopy3);
// Output: ['Sam', 'Sarah', 'Ryan', 'Poppy'], ['Sam', 'Sarah', 'Ryan', 'heeee hawww']
```

### 4. By using Array.from()

```javascript
const players = ['Sam', 'Sarah', 'Ryan', 'Poppy'];
const playersCopy4 = Array.from(players);
playersCopy4[3] = "kim";  
console.log(players, playersCopy4);
// Output: ['Sam', 'Sarah', 'Ryan', 'Poppy'], ['Sam', 'Sarah', 'Ryan', 'kim']
```

## Pass by Reference in Object

The same point goes for objects, it also affects the original object.

```javascript
const person = {
    name: 'loren isum',
    age: 80
};
const captain = person;
person.age = 25;
console.log(captain, person); // Both show the changed age
```

**Explanation:**
- `captain` and `person` reference the same object
- Changing `person.age` affects both variables

## Object Copying Methods

There are two ways to do it.

### 1. By using assign() method

```javascript
const personObject = {
    name: 'loren isum',
    age: 80
};
const personCopy = Object.assign({}, personObject, { number: 99, age: 12 });
personCopy.age = 78;
console.log(personCopy, personObject);
// Output: {name: 'loren isum', number: 99, age: 78}, {name: 'loren isum', age: 80}
```

### 2. By using Spread operator

```javascript
const personData = {
    name: 'loren isum',
    age: 80
};
const personCopy2 = {...personData };
personCopy2.age = 78;
console.log(personCopy2, personData);
// Output: {name: 'loren isum', age: 78}, {name: 'loren isum', age: 80}
```

## Equality Comparison with References

One more thing you need to think about what will happen in the case of an equality operator. When we use these operators on reference type variables they check the reference. If the property has a reference to the same item then the comparison will give output as "true", otherwise it will return "false."

```javascript
var arrayReference = ["Hi!"];
var arrayCopy = arrayReference;
console.log(arrayCopy === arrayReference); // Output: true (same reference)

var array1 = ['Hi!'];
var array2 = ['Hi!'];
console.log(array1 === array2); // Output: false (different references)
```

### Correcting Reference Comparison

This can be corrected by stringifying the array.

```javascript
var array1 = ['Hi!'];
var array2 = ['Hi!'];
var arr1str = JSON.stringify(array1);
var arr2str = JSON.stringify(array2);
console.log(arr1str === arr2str); // Output: true (same content)
```

## Const Behavior with Objects

We can change the name property of an object person, but we are unable to reset the reference person since it has been marked as `const`.

```javascript
const person = {
    name: 'Tammy'
};

// Name property changed
person.name = 'abc'; // This works

// Objects are a reference type
var val1 = { name: "Tom" };   
var val2 = { name: "Tom" };
console.log(val1 == val2); // Output: false (different references)
```

## Pass by Reference in Functions

If we pass an object in a function, it will change both objects.

### Problem Example

```javascript
function changevalue(person) {
    var newPersonObj = (person);
    newPersonObj.age = 25;
    return newPersonObj;
}

var alex = {
    name: 'xyz',
    age: 30
};
var alexChanged = changevalue(alex);
console.log(alex); // Output: {name: 'xyz', age: 25} (original changed!)
console.log(alexChanged); // Output: {name: 'xyz', age: 25}
```

### Solution Example

We can resolve this problem by parsing and stringifying the object.

```javascript
function changevalue(person) {
    var newPersonObj = JSON.parse(JSON.stringify(person));
    newPersonObj.age = 25;
    return newPersonObj;
}

var alex = {
    name: 'xyz',
    age: 30
};
var alexChanged = changevalue(alex);
console.log(alex); // Output: {name: 'xyz', age: 30} (original unchanged!)
console.log(alexChanged); // Output: {name: 'xyz', age: 25}
```

## Deep vs Shallow Copy

### Shallow Copy Issues

```javascript
const original = {
    name: 'John',
    address: {
        street: '123 Main St',
        city: 'New York'
    }
};

const shallowCopy = {...original};
shallowCopy.address.city = 'Boston';
console.log(original.address.city); // Output: 'Boston' (affected!)
```

### Deep Copy Solution

```javascript
const original = {
    name: 'John',
    address: {
        street: '123 Main St',
        city: 'New York'
    }
};

const deepCopy = JSON.parse(JSON.stringify(original));
deepCopy.address.city = 'Boston';
console.log(original.address.city); // Output: 'New York' (unchanged!)
```

## Common Use Cases and Solutions

### 1. Function Parameters

```javascript
// Problem: Modifies original
function addTag(item, tag) {
    item.tags.push(tag);
    return item;
}

// Solution: Create copy first
function addTagSafe(item, tag) {
    const copy = {...item, tags: [...item.tags, tag]};
    return copy;
}
```

### 2. State Management

```javascript
// Problem: Direct mutation
const state = { users: [] };
function addUser(user) {
    state.users.push(user); // Modifies original
}

// Solution: Immutable update
function addUserSafe(state, user) {
    return { ...state, users: [...state.users, user] };
}
```

### 3. Array Operations

```javascript
// Problem: Shared reference
const data = [1, 2, 3];
const processed = data;
processed.push(4);

// Solution: Create copy
const data = [1, 2, 3];
const processed = [...data];
processed.push(4);
```

## Performance Considerations

### Copy Method Performance

```javascript
const largeArray = new Array(100000).fill(0);

// Test different copy methods
console.time('slice');
const copy1 = largeArray.slice();
console.timeEnd('slice');

console.time('spread');
const copy2 = [...largeArray];
console.timeEnd('spread');

console.time('concat');
const copy3 = [].concat(largeArray);
console.timeEnd('concat');

console.time('Array.from');
const copy4 = Array.from(largeArray);
console.timeEnd('Array.from');
```

### Memory Usage

```javascript
// Shallow copy: Less memory, shared references
const shallow = {...largeObject};

// Deep copy: More memory, independent
const deep = JSON.parse(JSON.stringify(largeObject));
```

## Best Practices

### 1. Use Immutable Patterns

```javascript
// Good: Create new objects
const newState = { ...currentState, loading: true };

// Avoid: Direct mutation
currentState.loading = true;
```

### 2. Choose Appropriate Copy Method

```javascript
// For simple arrays: Use spread or slice
const copy1 = [...array];
const copy2 = array.slice();

// For objects: Use spread or assign
const copy3 = {...object};
const copy4 = Object.assign({}, object);

// For deep copies: Use JSON methods (with caution)
const deepCopy = JSON.parse(JSON.stringify(object));
```

### 3. Understand When References Are Needed

```javascript
// When you want shared state
const sharedState = { data: [] };
const component1 = { state: sharedState };
const component2 = { state: sharedState };

// When you need independence
const independentState = { data: [] };
const component3 = { state: { ...independentState } };
```

## Summary

Understanding reference and copy behavior in JavaScript is crucial for:

- **Preventing unintended mutations** in shared data structures
- **Creating independent copies** when needed
- **Managing state** in applications predictably
- **Writing bug-free code** with complex data structures
- **Optimizing performance** by choosing appropriate copy methods

### Key Takeaways:
- **Primitives** (number, string, boolean, null, undefined) are passed by value
- **Objects and arrays** are passed by reference
- **Shallow copies** share nested object references
- **Deep copies** create completely independent structures
- **Equality checks** compare references for objects/arrays

### Copy Method Recommendations:
- **Simple arrays**: Use `slice()`, `spread`, or `concat()`
- **Simple objects**: Use `Object.assign()` or `spread`
- **Deep copies**: Use `JSON.parse(JSON.stringify())` (with type caution)
- **Performance**: Choose method based on data size and complexity

Mastering these concepts is essential for writing predictable, maintainable JavaScript code, especially in complex applications with shared state.
