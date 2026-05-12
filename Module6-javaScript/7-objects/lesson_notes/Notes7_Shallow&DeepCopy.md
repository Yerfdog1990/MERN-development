# Shallow Copy and Deep Copy in JavaScript

## Understanding Object Copying

In JavaScript, objects are reference types, which means when you assign an object to a variable, you're actually storing a reference to the memory location where the object is stored, not the object itself. This leads to important considerations when copying objects.

## Shallow Copy

### What is a Shallow Copy?

A shallow copy occurs when you copy the reference of an object to a new variable. In this process, only the top-level properties are copied, while nested objects or arrays still reference the original memory location. This means that if you change the nested properties in one object, those changes will reflect in the other because they share the same memory reference.

### How Shallow Copy Works

A shallow copy is created using methods like the spread operator (`{ ...obj }`) or `Object.assign()`. In contrast, using the assignment operator (`=`) only copies the reference, not the actual object.

### Example: Shallow Copy

```javascript
let employee = {
    eid: "E102",
    ename: "Jack",
    eaddress: "New York",
    salary: 50000
};

console.log("Employee=> ", employee);

// Shallow copy
let newEmployee = { ...employee };    
console.log("New Employee=> ", newEmployee);

console.log("---------After modification----------");
newEmployee.ename = "Beck";

console.log("Employee=> ", employee);        
console.log("New Employee=> ", newEmployee);
```

**Output:**
```
Employee=> { eid: "E102", ename: "Jack", eaddress: "New York", salary: 50000 }
New Employee=> { eid: "E102", ename: "Jack", eaddress: "New York", salary: 50000 }
---------After modification----------
Employee=> { eid: "E102", ename: "Jack", eaddress: "New York", salary: 50000 }
New Employee=> { eid: "E102", ename: "Beck", eaddress: "New York", salary: 50000 }
```

**Explanation:**
- The object contains only primitive values (such as strings and numbers)
- When a shallow copy is created using the spread operator (`{ ...employee }`), primitive values are copied by value, not by reference
- As a result, modifying `newEmployee.ename` does not affect `employee.ename`
- Shallow copy problems arise only when objects contain nested reference types like objects or arrays

### Shallow Copy with Nested Objects

```javascript
let original = {
    name: "John",
    age: 30,
    address: {
        street: "123 Main St",
        city: "New York"
    }
};

// Shallow copy
let copy = { ...original };

// Modify nested property
copy.address.city = "Boston";

console.log(original.address.city); // "Boston" (changed!)
console.log(copy.address.city);     // "Boston"
```

**Problem:** Both objects share the same nested `address` object reference.

### Methods for Creating Shallow Copies

#### 1. Spread Operator (`...`)
```javascript
let shallow = { ...original };
```

#### 2. Object.assign()
```javascript
let shallow = Object.assign({}, original);
```

#### 3. Object.create()
```javascript
let shallow = Object.create(Object.getPrototypeOf(original), 
    Object.getOwnPropertyDescriptors(original));
```

## Deep Copy

### What is a Deep Copy?

A deep copy, on the other hand, creates a completely independent copy of the object, including all nested objects or arrays. This ensures that changes made to one object do not affect the other. Each object is stored in a separate memory location, making them entirely independent.

### Creating a Deep Copy

To create a deep copy of an object in JavaScript, we use `JSON.parse()` and `JSON.stringify()` methods.

### Example: Deep Copy

```javascript
let employee = {
    eid: "E102",
    ename: "Jack",
    eaddress: "New York",
    salary: 50000
}

console.log("=========Deep Copy========");
let newEmployee = JSON.parse(JSON.stringify(employee));
console.log("Employee=> ", employee);
console.log("New Employee=> ", newEmployee);

console.log("---------After modification---------");
newEmployee.ename = "Beck";
newEmployee.salary = 70000;

console.log("Employee=> ", employee);
console.log("New Employee=> ", newEmployee);
```

**Output:**
```
=========Deep Copy========
Employee=> { eid: "E102", ename: "Jack", eaddress: "New York", salary: 50000 }
New Employee=> { eid: "E102", ename: "Jack", eaddress: "New York", salary: 50000 }
---------After modification---------
Employee=> { eid: "E102", ename: "Jack", eaddress: "New York", salary: 50000 }
New Employee=> { eid: "E102", ename: "Beck", eaddress: "New York", salary: 70000 }
```

**Explanation:**
- A new object is created using `JSON.stringify()` and `JSON.parse()` methods
- `JSON.stringify()` converts a JavaScript object into a JSON string
- `JSON.parse()` converts the JSON string back into a new JavaScript object
- This approach is useful for small objects with serializable data only

### Deep Copy with Nested Objects

```javascript
let original = {
    name: "John",
    age: 30,
    address: {
        street: "123 Main St",
        city: "New York"
    }
};

// Deep copy
let deepCopy = JSON.parse(JSON.stringify(original));

// Modify nested property
deepCopy.address.city = "Boston";

console.log(original.address.city); // "New York" (unchanged)
console.log(deepCopy.address.city);  // "Boston"
```

## Limitations of JSON.parse() and JSON.stringify()

While the JSON approach is simple, it has its limitations:

### 1. Non-Serializable Properties
Functions, `undefined`, and certain other non-serializable values are lost when using `JSON.stringify()`.

```javascript
let obj = {
    name: "John",
    age: undefined,
    greet: function() { return "Hello"; },
    symbol: Symbol("test")
};

let copy = JSON.parse(JSON.stringify(obj));
console.log(copy); // { name: "John" } // age, greet, and symbol are lost
```

### 2. Circular References
Objects with circular references will cause `JSON.stringify()` to throw an error.

```javascript
let obj = { name: "John" };
obj.self = obj; // Circular reference

try {
    let copy = JSON.parse(JSON.stringify(obj));
} catch (error) {
    console.log(error); // TypeError: Converting circular structure to JSON
}
```

### 3. Date Objects
Dates are converted to strings during the process, losing their original type.

```javascript
let obj = {
    name: "John",
    birthDate: new Date()
};

let copy = JSON.parse(JSON.stringify(obj));
console.log(typeof copy.birthDate); // "string" (not Date object)
```

## Lodash for Deep Copy

Lodash is a JavaScript library that provides multiple utility functions, and one of the most commonly used functions is the `cloneDeep()` method. This method helps in deep cloning of an object and also clones the non-serializable properties which were a limitation in the `JSON.stringify()` approach.

### Example: Lodash Deep Copy

```javascript
const lodash = require('lodash');

let employee = {
    eid: "E102",
    ename: "Jack",
    eaddress: "New York",
    salary: 50000,
    details: function () {
        return "Employee Name: " 
            + this.ename + "-->Salary: " 
            + this.salary;
    }
}

let deepCopy = lodash.cloneDeep(employee);

console.log("Original Employee Object");
console.log(employee);
console.log("Deep Copied Employee Object");
console.log(deepCopy);

deepCopy.eid = "E103";
deepCopy.ename = "Beck";
deepCopy.details = function () {
    return "Employee ID: " + this.eid 
        + "-->Salary: " + this.salary;
}

console.log("----------After Modification----------");
console.log("Original Employee Object");
console.log(employee);
console.log("Deep Copied Employee Object");
console.log(deepCopy);
console.log(employee.details());
console.log(deepCopy.details());
```

**Output:**
```
Original Employee Object
{
  eid: "E102",
  ename: "Jack",
  eaddress: "New York",
  salary: 50000,
  details: [Function: details]
}
Deep Copied Employee Object
{
  eid: "E102",
  ename: "Jack",
  eaddress: "New York",
  salary: 50000,
  details: [Function: details]
}
----------After Modification----------
Original Employee Object
{
  eid: "E102",
  ename: "Jack",
  eaddress: "New York",
  salary: 50000,
  details: [Function: details]
}
Deep Copied Employee Object
{
  eid: "E103",
  ename: "Beck",
  eaddress: "New York",
  salary: 50000,
  details: [Function: details]
}
Employee Name: Jack-->Salary: 50000
Employee ID: E103-->Salary: 50000
```

**Explanation:** Both objects have different properties after the modification. Also, the methods of each object are differently defined and produce different outputs.

## Comparison: Shallow Copy vs Deep Copy

| Aspect | Shallow Copy | Deep Copy |
|--------|--------------|-----------|
| **Top-level properties** | Copied by value | Copied by value |
| **Nested objects/arrays** | Shared reference | Independent copy |
| **Performance** | Faster | Slower |
| **Memory usage** | Less memory | More memory |
| **Complexity** | Simple | More complex |
| **Use case** | Simple objects | Complex nested objects |

## Custom Deep Copy Implementation

### Recursive Deep Copy Function

```javascript
function deepCopy(obj) {
    if (obj === null || typeof obj !== 'object') {
        return obj; // Return primitive values as-is
    }
    
    if (obj instanceof Date) {
        return new Date(obj.getTime());
    }
    
    if (obj instanceof Array) {
        return obj.map(item => deepCopy(item));
    }
    
    if (typeof obj === 'object') {
        const copy = {};
        for (let key in obj) {
            if (obj.hasOwnProperty(key)) {
                copy[key] = deepCopy(obj[key]);
            }
        }
        return copy;
    }
    
    return obj;
}

// Test the function
let original = {
    name: "John",
    age: 30,
    address: {
        street: "123 Main St",
        city: "New York"
    },
    hobbies: ["reading", "swimming"],
    birthDate: new Date()
};

let copy = deepCopy(original);
copy.address.city = "Boston";
copy.hobbies.push("coding");

console.log(original.address.city); // "New York" (unchanged)
console.log(copy.address.city);     // "Boston"
console.log(original.hobbies);       // ["reading", "swimming"]
console.log(copy.hobbies);          // ["reading", "swimming", "coding"]
```

## Practical Examples

### Example 1: Configuration Management

```javascript
// Default configuration
const defaultConfig = {
    api: {
        endpoint: "https://api.example.com",
        timeout: 5000,
        retries: 3
    },
    ui: {
        theme: "light",
        fontSize: 16,
        language: "en"
    }
};

// Shallow copy for simple modifications
const userConfig = { ...defaultConfig };
userConfig.ui.theme = "dark";

// Deep copy for complex modifications
const customConfig = JSON.parse(JSON.stringify(defaultConfig));
customConfig.api.endpoint = "https://custom-api.example.com";
customConfig.api.retries = 5;
```

### Example 2: State Management

```javascript
// React-like state management
const initialState = {
    user: {
        id: 1,
        name: "John",
        preferences: {
            theme: "light",
            notifications: true
        }
    },
    isLoading: false
};

// Shallow copy - problematic for nested state
const badUpdate = { ...initialState };
badUpdate.user.preferences.theme = "dark"; // Modifies original!

// Deep copy - safe for nested state
const goodUpdate = JSON.parse(JSON.stringify(initialState));
goodUpdate.user.preferences.theme = "dark"; // Safe modification
```

### Example 3: Data Processing Pipeline

```javascript
function processUserData(userData) {
    // Create deep copy to avoid modifying original
    const processed = JSON.parse(JSON.stringify(userData));
    
    // Process the copy
    processed.fullName = `${processed.firstName} ${processed.lastName}`;
    processed.age = new Date().getFullYear() - new Date(processed.birthDate).getFullYear();
    
    return processed;
}

const originalUser = {
    firstName: "John",
    lastName: "Doe",
    birthDate: "1990-01-01"
};

const processedUser = processUserData(originalUser);
console.log(originalUser); // Unchanged
console.log(processedUser); // Processed version
```

## Performance Considerations

### Benchmarking Copy Methods

```javascript
const largeObj = {};
for (let i = 0; i < 10000; i++) {
    largeObj[`prop${i}`] = {
        id: i,
        data: `data${i}`
    };
}

// Shallow copy performance
console.time('shallow-copy');
const shallowCopy = { ...largeObj };
console.timeEnd('shallow-copy');

// Deep copy with JSON performance
console.time('deep-copy-json');
const deepCopyJSON = JSON.parse(JSON.stringify(largeObj));
console.timeEnd('deep-copy-json');

// Custom deep copy performance
console.time('deep-copy-custom');
const deepCopyCustom = deepCopy(largeObj);
console.timeEnd('deep-copy-custom');
```

### Memory Usage

- **Shallow copy**: Minimal additional memory usage
- **Deep copy**: Can use significantly more memory for large objects
- **Consider**: Use shallow copy when possible for performance

## Best Practices

### 1. Choose the Right Copy Method

```javascript
// For simple objects with only primitive values
const simpleObj = { name: "John", age: 30 };
const shallow = { ...simpleObj }; // Good choice

// For complex nested objects
const complexObj = { 
    user: { profile: { settings: {} } } 
};
const deep = JSON.parse(JSON.stringify(complexObj)); // Necessary
```

### 2. Handle Special Cases

```javascript
function safeDeepCopy(obj) {
    // Handle null/undefined
    if (obj == null) return obj;
    
    // Handle Date objects
    if (obj instanceof Date) return new Date(obj);
    
    // Handle Arrays
    if (Array.isArray(obj)) return obj.map(safeDeepCopy);
    
    // Handle plain objects
    if (typeof obj === 'object') {
        const copy = {};
        for (let key in obj) {
            if (obj.hasOwnProperty(key)) {
                copy[key] = safeDeepCopy(obj[key]);
            }
        }
        return copy;
    }
    
    // Return primitives as-is
    return obj;
}
```

### 3. Avoid Unnecessary Copies

```javascript
// Bad - unnecessary copy
function processUser(user) {
    const copy = JSON.parse(JSON.stringify(user));
    copy.name = copy.name.toUpperCase();
    return copy.name; // Only needed the name
}

// Good - extract what you need
function processUser(user) {
    return user.name.toUpperCase();
}
```

## Common Pitfalls

### 1. Accidental Object Sharing

```javascript
// Pitfall
const config = { theme: "dark", settings: { fontSize: 16 } };
const userConfig = { ...config }; // Shallow copy
userConfig.settings.fontSize = 20; // Affects original!

// Solution
const safeConfig = JSON.parse(JSON.stringify(config));
safeConfig.settings.fontSize = 20; // Safe
```

### 2. Losing Function References

```javascript
// Pitfall with JSON method
const obj = {
    name: "John",
    greet: function() { return `Hello, ${this.name}`; }
};

const copy = JSON.parse(JSON.stringify(obj));
console.log(copy.greet); // undefined - function lost!

// Solution with Lodash
const deepCopy = _.cloneDeep(obj);
console.log(deepCopy.greet()); // "Hello, John"
```

### 3. Circular Reference Errors

```javascript
// Pitfall
const obj = { name: "John" };
obj.self = obj;

try {
    const copy = JSON.parse(JSON.stringify(obj));
} catch (error) {
    console.log("Cannot copy circular references");
}

// Solution: Use a library that handles circular references
const copy = _.cloneDeep(obj); // Lodash handles this
```

## When to Use Each Method

### Use Shallow Copy When:
- Object contains only primitive values
- Performance is critical
- You want shared references for nested objects
- Working with React state (immutable updates)

### Use Deep Copy When:
- Object has nested objects/arrays that need independence
- You need to completely isolate data
- Working with configuration objects
- Creating backups of complex data structures

## Summary

Understanding the difference between shallow copy and deep copy is crucial for effective JavaScript programming:

- **Shallow Copy**: Copies top-level properties, shares nested references
- **Deep Copy**: Creates completely independent copies at all levels
- **Performance**: Shallow copy is faster, deep copy is more thorough
- **Use Cases**: Choose based on object complexity and requirements
- **Methods**: Multiple approaches available, each with trade-offs

Choose the copying method that best fits your specific use case, considering performance, memory usage, and the complexity of your data structures.