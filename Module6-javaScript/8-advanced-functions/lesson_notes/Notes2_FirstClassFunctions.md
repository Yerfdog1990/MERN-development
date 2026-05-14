# First Class Functions in JavaScript

## What are First-Class Functions?

JavaScript treats functions as **first-class citizens**, meaning they can be used just like any other value in the language. This capability makes JavaScript flexible, expressive, and powerful for modern web development.

### Key Capabilities:
- **Functions can be assigned to variables** and stored in data structures
- **Functions can be passed as arguments** to other functions
- **Functions can be returned from other functions**
- **Functions enable callbacks, closures, and functional programming patterns**

---

## Definition: First-Class Functions

A function is considered **first-class** when the programming language allows it to be:

1. **Assigned to a variable**
2. **Passed as an argument to another function**
3. **Returned from another function**
4. **Stored inside arrays or objects**

JavaScript supports all of these features, making functions extremely powerful and versatile.

---

## 1. Assigning Functions to Variables

Functions can be stored in variables just like numbers or strings. This allows functions to be treated as values.

### Example: Function Expression

```javascript
const greet = function () {
  return "Hello!";
};

console.log(greet()); // Output: "Hello!"
```

**How it works:**
- The function is assigned to the variable `greet` instead of being executed immediately
- The function is invoked later using parentheses, just like a normal function
- This is called a **function expression** (as opposed to a function declaration)

### Example: Arrow Function Assignment

```javascript
const greetArrow = () => "Hello!";

console.log(greetArrow()); // Output: "Hello!"
```

### Example: Traditional Function Declaration vs Expression

```javascript
// Function Declaration (hoisted)
function sayHello() {
    return "Hello from declaration!";
}

// Function Expression (not hoisted)
const sayHelloExpr = function() {
    return "Hello from expression!";
};

// Arrow Function (not hoisted)
const sayHelloArrow = () => "Hello from arrow!";

console.log(sayHello());      // Output: "Hello from declaration!"
console.log(sayHelloExpr());  // Output: "Hello from expression!"
console.log(sayHelloArrow()); // Output: "Hello from arrow!"
```

---

## 2. Passing Functions as Arguments

Functions can be passed to other functions as parameters. Such functions are commonly known as **callback functions**.

### Basic Example

```javascript
function sayHello() {
  console.log("Hello!");
}

function execute(fn) {
  fn();
}

execute(sayHello); // Output: "Hello!"
```

**How it works:**
- The function `sayHello` is passed as an argument to another function
- The receiving function executes the passed function when needed
- This enables flexible and reusable code

### Practical Example: Array Methods

```javascript
const numbers = [1, 2, 3, 4, 5];

// Passing a function to map()
const doubled = numbers.map(function(num) {
    return num * 2;
});
console.log(doubled); // Output: [2, 4, 6, 8, 10]

// Passing an arrow function to filter()
const evens = numbers.filter(num => num % 2 === 0);
console.log(evens); // Output: [2, 4]

// Passing a function to reduce()
const sum = numbers.reduce((acc, num) => acc + num, 0);
console.log(sum); // Output: 15
```

### Example: Custom Higher-Order Function

```javascript
function operateOnArray(arr, operation) {
    const result = [];
    for (let i = 0; i < arr.length; i++) {
        result.push(operation(arr[i]));
    }
    return result;
}

const numbers = [1, 2, 3, 4, 5];

// Pass different functions to get different results
console.log(operateOnArray(numbers, x => x * 2));    // Output: [2, 4, 6, 8, 10]
console.log(operateOnArray(numbers, x => x * x));   // Output: [1, 4, 9, 16, 25]
console.log(operateOnArray(numbers, x => x + 10));  // Output: [11, 12, 13, 14, 15]
```

---

## 3. Returning Functions from Other Functions

JavaScript allows one function to return another function. This behavior is the foundation of **closures** and enables powerful patterns like function factories.

### Basic Example

```javascript
function multiplier(factor) {
  return function (number) {
    return number * factor;
  };
}

const double = multiplier(2);
console.log(double(5)); // Output: 10

const triple = multiplier(3);
console.log(triple(5)); // Output: 15
```

**How it works:**
- The outer function returns a new function instead of a value
- The returned function remembers the `factor` variable through **closure**
- This allows creating specialized functions from a general template

### Example: Function Factory

```javascript
function createGreeter(greeting) {
    return function(name) {
        return `${greeting}, ${name}!`;
    };
}

const sayHello = createGreeter("Hello");
const sayHi = createGreeter("Hi");
const sayHey = createGreeter("Hey");

console.log(sayHello("Alice"));  // Output: "Hello, Alice!"
console.log(sayHi("Bob"));       // Output: "Hi, Bob!"
console.log(sayHey("Charlie"));  // Output: "Hey, Charlie!"
```

### Example: Validation Function Factory

```javascript
function createValidator(min, max) {
    return function(value) {
        return value >= min && value <= max;
    };
}

const isAgeValid = createValidator(0, 120);
const isRatingValid = createValidator(1, 5);

console.log(isAgeValid(25));    // Output: true
console.log(isAgeValid(150));   // Output: false
console.log(isRatingValid(3));  // Output: true
console.log(isRatingValid(6));  // Output: false
```

---

## 4. Storing Functions in Data Structures

Functions can be stored in arrays, objects, or other data structures just like any other value.

### Storing Functions in Objects

```javascript
const Arithmetics = {
    add: (a, b) => {
        return `${a} + ${b} = ${a + b}`;
    },
    subtract: (a, b) => {
        return `${a} - ${b} = ${a - b}` 
    },
    multiply: (a, b) => {
        return `${a} * ${b} = ${a * b}` 
    },
    division: (a, b) => {
        if (b != 0) return `${a} / ${b} = ${a / b}`;
        return `Cannot Divide by Zero!!!`;
    }
}

console.log(Arithmetics.add(100, 100));      // Output: "100 + 100 = 200"
console.log(Arithmetics.subtract(100, 7));   // Output: "100 - 7 = 93"
console.log(Arithmetics.multiply(5, 5));     // Output: "5 * 5 = 25"
console.log(Arithmetics.division(100, 5));    // Output: "100 / 5 = 20"
```

**Note:** In the above example, functions are stored as variables in an object.

### Storing Functions in Arrays

```javascript
const operations = [
    (a, b) => a + b,
    (a, b) => a - b,
    (a, b) => a * b,
    (a, b) => a / b
];

console.log(operations[0](10, 5)); // Output: 15 (addition)
console.log(operations[1](10, 5)); // Output: 5  (subtraction)
console.log(operations[2](10, 5)); // Output: 50 (multiplication)
console.log(operations[3](10, 5)); // Output: 2  (division)
```

### Example: Function Array with Dynamic Execution

```javascript
const transformers = [
    x => x.toUpperCase(),
    x => x.toLowerCase(),
    x => x.split('').reverse().join(''),
    x => x.length
];

const text = "Hello";

transformers.forEach((fn, index) => {
    console.log(`Transformer ${index}:`, fn(text));
});

// Output:
// Transformer 0: HELLO
// Transformer 1: hello
// Transformer 2: olleH
// Transformer 3: 5
```

---

## Usage of First-Class Functions

First-class functions in JavaScript can be:

1. **Stored as a value in a variable**
2. **Returned by another function**
3. **Passed into another function as an argument**
4. **Stored in an array, queue, or stack**
5. **Have their own methods and properties**

### Example 1: Simple Arrow Function

```javascript
const Geek = (a, b) => {
    return (a + " " + b);
}

console.log(Geek("Akshit", "Saxena")); // Output: "Akshit Saxena"
```

### Example 2: Functions with Properties

```javascript
function greet(name) {
    return `Hello, ${name}!`;
}

// Adding properties to the function
greet.defaultGreeting = "Hello";
greet.greetCount = 0;

console.log(greet("Alice"));           // Output: "Hello, Alice!"
console.log(greet.defaultGreeting);    // Output: "Hello"
console.log(greet.greetCount);         // Output: 0

// We can also modify the properties
greet.greetCount = 5;
console.log(greet.greetCount);         // Output: 5
```

---

## Real-World Examples of First-Class Functions

### Example 1: Event Handlers

```javascript
// Functions stored as event handlers
const button = document.getElementById('myButton');

button.addEventListener('click', function() {
    console.log('Button clicked!');
});

// Or with arrow function
button.addEventListener('click', () => {
    console.log('Button clicked with arrow!');
});
```

### Example 2: Promise Callbacks

```javascript
// Functions passed as callbacks to promises
fetch('https://api.example.com/data')
    .then(function(response) {
        return response.json();
    })
    .then(function(data) {
        console.log(data);
    })
    .catch(function(error) {
        console.error(error);
    });
```

### Example 3: Array Sorting with Custom Comparator

```javascript
const users = [
    { name: 'Alice', age: 25 },
    { name: 'Bob', age: 30 },
    { name: 'Charlie', age: 20 }
];

// Pass a comparison function to sort()
users.sort(function(a, b) {
    return a.age - b.age;
});

console.log(users);
// Output: [{ name: 'Charlie', age: 20 }, { name: 'Alice', age: 25 }, { name: 'Bob', age: 30 }]
```

### Example 4: Function Composition

```javascript
function compose(...fns) {
    return function(x) {
        return fns.reduceRight((acc, fn) => fn(acc), x);
    };
}

const addOne = x => x + 1;
const double = x => x * 2;
const square = x => x * x;

const composed = compose(square, double, addOne);

console.log(composed(3)); // Output: 64
// Explanation: 3 + 1 = 4, 4 * 2 = 8, 8 * 8 = 64
```

---

## Higher-Order Functions

A **higher-order function** is a function that:
- Takes one or more functions as arguments, OR
- Returns a function as its result

### Example: Higher-Order Function that Takes a Function

```javascript
function withLogging(fn) {
    return function(...args) {
        console.log(`Calling function with args:`, args);
        const result = fn(...args);
        console.log(`Function returned:`, result);
        return result;
    };
}

const add = (a, b) => a + b;
const loggedAdd = withLogging(add);

console.log(loggedAdd(5, 3));
// Output:
// Calling function with args: [5, 3]
// Function returned: 8
// 8
```

### Example: Higher-Order Function that Returns a Function

```javascript
function createMultiplier(multiplier) {
    return function(number) {
        return number * multiplier;
    };
}

const timesTwo = createMultiplier(2);
const timesTen = createMultiplier(10);

console.log(timesTwo(5));   // Output: 10
console.log(timesTen(5));   // Output: 50
```

---

## Callback Functions

A **callback function** is a function passed as an argument to another function, which is then invoked inside the outer function to complete some kind of routine or action.

### Synchronous Callback

```javascript
function processUser(name, callback) {
    console.log(`Processing user: ${name}`);
    const processedName = name.toUpperCase();
    callback(processedName);
}

processUser('alice', function(result) {
    console.log(`Processed result: ${result}`);
});

// Output:
// Processing user: alice
// Processed result: ALICE
```

### Asynchronous Callback

```javascript
function fetchData(url, callback) {
    console.log(`Fetching data from ${url}...`);
    setTimeout(() => {
        const data = { id: 1, name: 'Sample Data' };
        callback(data);
    }, 1000);
}

fetchData('https://api.example.com', function(data) {
    console.log('Data received:', data);
});

// Output:
// Fetching data from https://api.example.com...
// (1 second later)
// Data received: { id: 1, name: 'Sample Data' }
```

---

## Practical Use Cases

### 1. Data Processing Pipeline

```javascript
const pipeline = {
    data: [],
    
    add(item) {
        this.data.push(item);
        return this;
    },
    
    filter(predicate) {
        this.data = this.data.filter(predicate);
        return this;
    },
    
    map(transformer) {
        this.data = this.data.map(transformer);
        return this;
    },
    
    get() {
        return this.data;
    }
};

const result = pipeline
    .add(1).add(2).add(3).add(4).add(5)
    .filter(x => x % 2 === 0)
    .map(x => x * 10)
    .get();

console.log(result); // Output: [20, 40]
```

### 2. Strategy Pattern

```javascript
const strategies = {
    add: (a, b) => a + b,
    subtract: (a, b) => a - b,
    multiply: (a, b) => a * b,
    divide: (a, b) => a / b
};

function calculate(a, b, operation) {
    const strategy = strategies[operation];
    if (strategy) {
        return strategy(a, b);
    }
    throw new Error('Unknown operation');
}

console.log(calculate(10, 5, 'add'));      // Output: 15
console.log(calculate(10, 5, 'subtract')); // Output: 5
console.log(calculate(10, 5, 'multiply')); // Output: 50
console.log(calculate(10, 5, 'divide'));   // Output: 2
```

### 3. Memoization with First-Class Functions

```javascript
function memoize(fn) {
    const cache = new Map();
    
    return function(...args) {
        const key = JSON.stringify(args);
        if (cache.has(key)) {
            console.log('Returning cached result');
            return cache.get(key);
        }
        
        const result = fn.apply(this, args);
        cache.set(key, result);
        return result;
    };
}

const expensiveFunction = (n) => {
    console.log('Calculating...');
    return n * n;
};

const memoized = memoize(expensiveFunction);

console.log(memoized(5)); // Output: Calculating... 25
console.log(memoized(5)); // Output: Returning cached result 25
console.log(memoized(5)); // Output: Returning cached result 25
```

---

## Benefits of First-Class Functions

| Benefit | Description |
|---------|-------------|
| **Flexibility** | Functions can be used anywhere values are expected |
| **Reusability** | Functions can be passed around and reused in different contexts |
| **Abstraction** | Higher-order functions allow abstracting common patterns |
| **Composition** | Functions can be combined to create complex behavior from simple parts |
| **Declarative Code** | Enables writing more declarative and readable code |
| **Functional Programming** | Supports functional programming paradigms like map, filter, reduce |

---

## Common Patterns Using First-Class Functions

### 1. Map-Filter-Reduce Chain

```javascript
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const result = numbers
    .filter(x => x % 2 === 0)      // Keep even numbers
    .map(x => x * x)               // Square them
    .reduce((sum, x) => sum + x, 0); // Sum them up

console.log(result); // Output: 220 (4 + 16 + 36 + 64 + 100)
```

### 2. Currying

```javascript
function curry(fn) {
    return function curried(...args) {
        if (args.length >= fn.length) {
            return fn.apply(this, args);
        }
        return function(...more) {
            return curried.apply(this, args.concat(more));
        };
    };
}

const add = (a, b, c) => a + b + c;
const curriedAdd = curry(add);

console.log(curriedAdd(1)(2)(3)); // Output: 6
console.log(curriedAdd(1, 2)(3)); // Output: 6
console.log(curriedAdd(1)(2, 3)); // Output: 6
```

### 3. Partial Application

```javascript
function partial(fn, ...presetArgs) {
    return function(...laterArgs) {
        return fn(...presetArgs, ...laterArgs);
    };
}

const add = (a, b, c) => a + b + c;
const addFiveAndTen = partial(add, 5, 10);

console.log(addFiveAndTen(3)); // Output: 18 (5 + 10 + 3)
```

---

## Summary

First-class functions are a fundamental concept in JavaScript that enables:

- **Functions as values**: Can be assigned to variables, stored in data structures
- **Functions as arguments**: Can be passed to other functions (callbacks)
- **Functions as return values**: Can be returned from other functions (closures)
- **Functional programming**: Enables patterns like map, filter, reduce, currying

This capability makes JavaScript extremely flexible and powerful, allowing developers to write more expressive, reusable, and maintainable code. Understanding first-class functions is essential for mastering modern JavaScript development.