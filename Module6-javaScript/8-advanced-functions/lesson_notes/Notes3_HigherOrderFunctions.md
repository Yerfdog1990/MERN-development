# Higher Order Functions in JavaScript

## What are Higher-Order Functions?

A **higher-order function** is a function that does one of the following:
- **Takes another function as an argument**
- **Returns another function as its result**

Higher-order functions help make your code more reusable and modular by allowing you to work with functions like any other value.

### Basic Example

```javascript
function fun() {
    console.log("Hello, World!");
}

function fun2(action) {
    action();
    action();
}

fun2(fun);
```

**How it works:**
- `fun2` is a higher-order function because it takes another function (`action`) as an argument
- It calls the `action` function twice
- This demonstrates passing functions as arguments

---

## Popular Higher-Order Functions in JavaScript

JavaScript provides several built-in higher-order functions, especially for array operations. These functions take callback functions as arguments and provide powerful ways to manipulate data.

### 1. map()

The `map` function is used to transform an array by applying a callback function to each element. It returns a new array.

```javascript
const numbers = [1, 2, 3, 4, 5];
const squared = numbers.map((num) => num * num);
console.log(squared); // Output: [1, 4, 9, 16, 25]
```

**How it works:**
- `map` applies the callback `(num) => num * num` to each element of the array
- A new array is returned where each element is the square of the original
- The original array remains unchanged (immutable)

**Example: Transforming Objects**

```javascript
const users = [
    { name: "Alice", age: 25 },
    { name: "Bob", age: 30 },
    { name: "Charlie", age: 35 }
];

const names = users.map(user => user.name);
console.log(names); // Output: ["Alice", "Bob", "Charlie"]

const ages = users.map(user => user.age);
console.log(ages); // Output: [25, 30, 35]
```

---

### 2. filter()

The `filter` function is used to create a new array containing elements that satisfy a given condition.

```javascript
const numbers = [1, 2, 3, 4, 5];
const even = numbers.filter((num) => num % 2 === 0);
console.log(even); // Output: [2, 4]
```

**How it works:**
- The callback `(num) => num % 2 === 0` filters out elements not divisible by 2
- The resulting array contains only even numbers
- Elements that don't satisfy the condition are excluded

**Example: Filtering Objects**

```javascript
const products = [
    { name: "Laptop", price: 1000, inStock: true },
    { name: "Phone", price: 500, inStock: false },
    { name: "Tablet", price: 300, inStock: true }
];

const inStockProducts = products.filter(product => product.inStock);
console.log(inStockProducts);
// Output: [{ name: "Laptop", price: 1000, inStock: true }, { name: "Tablet", price: 300, inStock: true }]
```

---

### 3. reduce()

The `reduce` function accumulates array elements into a single value based on a callback function.

```javascript
const numbers = [1, 2, 3, 4, 5];
const sum = numbers.reduce((acc, curr) => acc + curr, 0);
console.log(sum); // Output: 15
```

**How it works:**
- The callback `(acc, curr) => acc + curr` adds all elements
- `0` is the initial value of the accumulator (`acc`)
- Each iteration, the current element is added to the accumulator

**Example: Calculating Product**

```javascript
const numbers = [1, 2, 3, 4, 5];
const product = numbers.reduce((acc, curr) => acc * curr, 1);
console.log(product); // Output: 120 (1 * 2 * 3 * 4 * 5)
```

**Example: Grouping Objects**

```javascript
const people = [
    { name: "Alice", age: 25 },
    { name: "Bob", age: 30 },
    { name: "Charlie", age: 25 },
    { name: "David", age: 30 }
];

const groupedByAge = people.reduce((acc, person) => {
    const age = person.age;
    if (!acc[age]) {
        acc[age] = [];
    }
    acc[age].push(person.name);
    return acc;
}, {});

console.log(groupedByAge);
// Output: { 25: ["Alice", "Charlie"], 30: ["Bob", "David"] }
```

---

### 4. forEach()

The `forEach` function executes a provided function once for each array element.

```javascript
const numbers = [1, 2, 3];
numbers.forEach((num) => console.log(num * 2));
// Output:
// 2
// 4
// 6
```

**How it works:**
- `forEach` performs the side effect of printing each element multiplied by 2
- It does not return a new array like `map`
- It's used when you want to perform an action for each element

**Example: Modifying External State**

```javascript
let total = 0;
const numbers = [1, 2, 3, 4, 5];

numbers.forEach(num => {
    total += num;
});

console.log(total); // Output: 15
```

---

### 5. find()

The `find` function returns the first element in the array that satisfies a given condition.

```javascript
const numbers = [1, 2, 3, 4, 5];
const firstEven = numbers.find((num) => num % 2 === 0);
console.log(firstEven); // Output: 2
```

**How it works:**
- The callback `(num) => num % 2 === 0` finds the first even number
- If no element satisfies the condition, it returns `undefined`
- It stops searching once it finds the first match

**Example: Finding an Object**

```javascript
const users = [
    { id: 1, name: "Alice" },
    { id: 2, name: "Bob" },
    { id: 3, name: "Charlie" }
];

const user = users.find(u => u.id === 2);
console.log(user); // Output: { id: 2, name: "Bob" }
```

---

### 6. some()

The `some` function checks if at least one array element satisfies a condition.

```javascript
const numbers = [1, 2, 3, 4, 5];
const hasNegative = numbers.some((num) => num < 0);
console.log(hasNegative); // Output: false
```

**How it works:**
- The callback `(num) => num < 0` checks for negative numbers
- It returns `true` if any element passes the condition, `false` otherwise
- It stops checking once it finds a match

**Example: Checking for Specific Values**

```javascript
const numbers = [1, 2, 3, 4, 5];
const hasEven = numbers.some(num => num % 2 === 0);
console.log(hasEven); // Output: true

const hasGreaterThanTen = numbers.some(num => num > 10);
console.log(hasGreaterThanTen); // Output: false
```

---

### 7. every()

The `every` function checks if all array elements satisfy a condition.

```javascript
const numbers = [1, 2, 3, 4, 5];
const allPositive = numbers.every((num) => num > 0);
console.log(allPositive); // Output: true
```

**How it works:**
- The callback `(num) => num > 0` checks if all numbers are positive
- It returns `true` only if all elements pass the condition
- It stops checking once it finds a failing element

**Example: Validation**

```javascript
const passwords = [
    { value: "abc123", length: 6 },
    { value: "def456", length: 6 },
    { value: "ghi789", length: 6 }
];

const allValidLength = passwords.every(p => p.length >= 6);
console.log(allValidLength); // Output: true

const passwords2 = [
    { value: "abc", length: 3 },
    { value: "def456", length: 6 }
];

const allValidLength2 = passwords2.every(p => p.length >= 6);
console.log(allValidLength2); // Output: false
```

---

## Advanced Techniques with Higher-Order Functions

### 1. Function Composition

Function composition is the process of combining multiple functions to create a new function. The composed function applies multiple operations in sequence.

```javascript
function add(x) {
    return x + 2;
}

function multiply(x) {
    return x * 3;
}

function compose(f, g) {
    return function(x) {
        return f(g(x));
    };
}

const result = compose(add, multiply)(4);
console.log(result); // Output: 14
```

**How it works:**
- `compose` combines `add` and `multiply`, so the output of `multiply` is passed as input to `add`
- The result of `compose(add, multiply)(4)` is `14` because `4` is first multiplied by `3` (result: `12`) and then `2` is added (result: `14`)

**Example: Multiple Compositions**

```javascript
const toUpper = str => str.toUpperCase();
const exclaim = str => str + "!";
const greet = str => "Hello, " + str;

const composedGreet = compose(exclaim, compose(toUpper, greet));

console.log(composedGreet("world")); // Output: "HELLO, WORLD!"
```

---

### 2. Currying

Currying transforms a function that takes multiple arguments into a series of functions that each take one argument. This allows partial application of the function.

```javascript
function multiply(x) {
    return function(y) {
        return x * y;
    };
}

const multiplyBy2 = multiply(2);
console.log(multiplyBy2(5)); // Output: 10

const multiplyBy3 = multiply(3);
console.log(multiplyBy3(5)); // Output: 15
```

**How it works:**
- The `multiply` function is curried, returning a new function each time it's called with an argument
- `multiplyBy2` is a partially applied function that multiplies any given number by `2`
- This enables creating specialized functions from a general template

**Example: Curried Addition**

```javascript
function add(a) {
    return function(b) {
        return function(c) {
            return a + b + c;
        };
    };
}

const add5 = add(5);
const add5And10 = add5(10);
console.log(add5And10(3)); // Output: 18

// Or call all at once
console.log(add(5)(10)(3)); // Output: 18
```

---

### 3. Memoization

Memoization is a technique where function results are cached so that repeated calls with the same arguments return faster. This is particularly useful for expensive function calls.

```javascript
function memoize(func) {
    const cache = {};
    return function(arg) {
        if (arg in cache) {
            return cache[arg];
        } else {
            const result = func(arg);
            cache[arg] = result;
            return result;
        }
    };
}

function slowFunction(num) {
    console.log("Computing...");
    return num * 2;
}

const fastFunction = memoize(slowFunction);
console.log(fastFunction(5)); // Output: Computing... 10
console.log(fastFunction(5)); // Output: 10 (cached)
console.log(fastFunction(5)); // Output: 10 (cached)
```

**How it works:**
- `memoize` caches the results of `slowFunction` calls
- The second time `fastFunction(5)` is called, the result is fetched from the cache, avoiding recomputation
- This optimization improves performance by saving on redundant calculations

**Example: Memoizing Fibonacci**

```javascript
function memoize(fn) {
    const cache = {};
    return function(...args) {
        const key = JSON.stringify(args);
        if (cache[key]) {
            return cache[key];
        }
        const result = fn.apply(this, args);
        cache[key] = result;
        return result;
    };
}

function fibonacci(n) {
    if (n <= 1) return n;
    return fibonacci(n - 1) + fibonacci(n - 2);
}

const memoizedFibonacci = memoize(fibonacci);

console.log(memoizedFibonacci(10)); // Output: 55 (computes)
console.log(memoizedFibonacci(10)); // Output: 55 (cached)
```

---

## Use Cases of Higher-Order Functions

### 1. Passing Functions as Arguments

In the following example, we define a Higher-Order Function called `greet` that accepts a callback function as an argument and executes it.

```javascript
function greet(name, callback) {
    console.log("Hello, " + name);
    callback();
}

function sayGoodbye() {
    console.log("Goodbye!");
}

greet("Ajay", sayGoodbye);
// Output:
// Hello, Ajay
// Goodbye!
```

**Key Points:**
- **Function as Argument**: `greet` accepts another function (e.g., `sayGoodbye`) as a callback, demonstrating the ability to pass functions as arguments
- **Sequence Control**: It first logs a greeting message and then executes the callback, showing how actions can be performed in a specific order
- **Modularity and Reusability**: By separating the greeting and goodbye actions, the pattern allows flexibility and reusability, enabling different callbacks to be passed as needed

**Example: Array Processing with Callback**

```javascript
function processArray(arr, processor) {
    const result = [];
    for (let i = 0; i < arr.length; i++) {
        result.push(processor(arr[i]));
    }
    return result;
}

const numbers = [1, 2, 3, 4, 5];

console.log(processArray(numbers, x => x * 2));    // Output: [2, 4, 6, 8, 10]
console.log(processArray(numbers, x => x * x));   // Output: [1, 4, 9, 16, 25]
console.log(processArray(numbers, x => x + 10)); // Output: [11, 12, 13, 14, 15]
```

---

### 2. Returning Functions from Functions

Higher-order functions can also return a function. This enables the creation of more dynamic behavior.

```javascript
function multiplyBy(factor) {
    return function(num) {
        return num * factor;
    };
}

const multiplyBy2 = multiplyBy(2);
console.log(multiplyBy2(5)); // Output: 10

const multiplyBy3 = multiplyBy(3);
console.log(multiplyBy3(5)); // Output: 15
```

**Key Points:**
- **Function Factory**: `multiplyBy` returns a new function based on the provided factor, demonstrating the ability to create dynamic, parameterized functions
- **Closure in Action**: The returned function uses the captured `factor` to perform multiplication, showcasing the power of closures to retain access to external variables
- **Reusability and Customization**: This pattern simplifies creating reusable multipliers (e.g., `multiplyBy2`, `multiplyBy3`), enabling efficient and customizable solutions with minimal effort

**Example: Creating Validators**

```javascript
function createValidator(min, max) {
    return function(value) {
        return value >= min && value <= max;
    };
}

const isAgeValid = createValidator(0, 120);
const isRatingValid = createValidator(1, 5);

console.log(isAgeValid(25));   // Output: true
console.log(isAgeValid(150));  // Output: false
console.log(isRatingValid(3)); // Output: true
console.log(isRatingValid(6)); // Output: false
```

---

### 3. Array Method map() as a Higher-Order Function

JavaScript array methods such as `map()`, `filter()`, and `reduce()` are excellent examples of higher-order functions. These methods take callback functions as arguments and provide powerful ways to manipulate arrays.

```javascript
const numbers = [1, 2, 3, 4, 5];
const doubled = numbers.map(function(n) {
    return n * 2;
});

console.log(doubled); // Output: [2, 4, 6, 8, 10]
```

**Key Points:**
- **Array Transformation**: `map()` applies a callback function to each array element, returning a new array with transformed values while keeping the original array unchanged
- **Immutability**: By not mutating the original array, `map()` supports immutable data handling, which is key to predictable and safer code
- **Declarative Iteration**: It abstracts the iteration logic, promoting a declarative programming style that focuses on what should be done rather than how

**Example: Complex Transformations**

```javascript
const products = [
    { name: "Laptop", price: 1000, tax: 0.1 },
    { name: "Phone", price: 500, tax: 0.08 },
    { name: "Tablet", price: 300, tax: 0.05 }
];

const pricesWithTax = products.map(product => ({
    name: product.name,
    totalPrice: product.price + (product.price * product.tax)
}));

console.log(pricesWithTax);
// Output:
// [
//   { name: "Laptop", totalPrice: 1100 },
//   { name: "Phone", totalPrice: 540 },
//   { name: "Tablet", totalPrice: 315 }
// ]
```

---

### 4. Array Method filter() as a Higher-Order Function

The `filter()` method is another array function that is a higher-order function. It filters the elements of an array based on a condition provided by the callback function.

```javascript
const numbers = [1, 2, 3, 4, 5];
const even = numbers.filter(function(n) {
    return n % 2 === 0;
});

console.log(even); // Output: [2, 4]
```

**Key Points:**
- **Conditional Filtering**: `filter()` applies a callback function to test each element, returning a new array containing only those that meet the specified condition
- **Immutability**: It leaves the original array unchanged, ensuring the integrity of the source data while providing filtered results
- **Customizable and Reusable**: `filter()` is highly flexible, allowing easy customization for different conditions to extract specific subsets of data

**Example: Filtering Complex Objects**

```javascript
const users = [
    { name: "Alice", age: 25, active: true },
    { name: "Bob", age: 30, active: false },
    { name: "Charlie", age: 35, active: true },
    { name: "David", age: 40, active: false }
];

const activeUsers = users.filter(user => user.active);
console.log(activeUsers);
// Output: [{ name: "Alice", age: 25, active: true }, { name: "Charlie", age: 35, active: true }]

const usersOver30 = users.filter(user => user.age > 30);
console.log(usersOver30);
// Output: [{ name: "Charlie", age: 35, active: true }, { name: "David", age: 40, active: false }]
```

---

### 5. Array Method reduce() as a Higher-Order Function

The `reduce()` method is a powerful higher-order function used to reduce an array to a single value.

```javascript
const numbers = [1, 2, 3, 4, 5];
const sum = numbers.reduce(function(acc, curr) {
    return acc + curr;
}, 0);

console.log(sum); // Output: 15
```

**Key Points:**
- **Accumulation**: `reduce()` processes each element of the array, accumulating a single value (e.g., sum, product) based on the provided callback function
- **Initial Value and Flexibility**: The second argument (e.g., `0`) sets the initial value for the accumulator, ensuring consistent results and allowing for flexible aggregation
- **Versatility**: It can be used for a wide range of tasks, such as summing values, calculating products, or even more complex operations like flattening arrays

**Example: Complex Reduction**

```javascript
const orders = [
    { id: 1, items: [{ price: 10 }, { price: 20 }] },
    { id: 2, items: [{ price: 15 }, { price: 25 }, { price: 30 }] },
    { id: 3, items: [{ price: 5 }] }
];

const totalValue = orders.reduce((total, order) => {
    const orderTotal = order.items.reduce((sum, item) => sum + item.price, 0);
    return total + orderTotal;
}, 0);

console.log(totalValue); // Output: 105
```

**Example: Building an Object from Array**

```javascript
const fruits = ["apple", "banana", "cherry", "date"];

const fruitLengths = fruits.reduce((acc, fruit) => {
    acc[fruit] = fruit.length;
    return acc;
}, {});

console.log(fruitLengths);
// Output: { apple: 5, banana: 6, cherry: 6, date: 4 }
```

---

## Practical Examples and Patterns

### 1. Chaining Higher-Order Functions

```javascript
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const result = numbers
    .filter(num => num % 2 === 0)      // Keep even numbers: [2, 4, 6, 8, 10]
    .map(num => num * num)              // Square them: [4, 16, 36, 64, 100]
    .reduce((sum, num) => sum + num, 0); // Sum them: 220

console.log(result); // Output: 220
```

### 2. Creating Custom Higher-Order Functions

```javascript
// A higher-order function that adds logging to any function
function withLogging(fn) {
    return function(...args) {
        console.log(`Calling ${fn.name} with args:`, args);
        const result = fn.apply(this, args);
        console.log(`Result:`, result);
        return result;
    };
}

const add = (a, b) => a + b;
const loggedAdd = withLogging(add);

console.log(loggedAdd(5, 3));
// Output:
// Calling add with args: [5, 3]
// Result: 8
// 8
```

### 3. Once Function - Execute Only Once

```javascript
function once(fn) {
    let called = false;
    let result;
    
    return function(...args) {
        if (!called) {
            called = true;
            result = fn.apply(this, args);
        }
        return result;
    };
}

const initialize = once(() => {
    console.log("Initializing...");
    return "Initialized";
});

console.log(initialize()); // Output: Initializing... Initialized
console.log(initialize()); // Output: Initialized (no second initialization)
```

### 4. Debounce Function

```javascript
function debounce(fn, delay) {
    let timeoutId;
    
    return function(...args) {
        clearTimeout(timeoutId);
        timeoutId = setTimeout(() => {
            fn.apply(this, args);
        }, delay);
    };
}

const search = debounce((query) => {
    console.log(`Searching for: ${query}`);
}, 300);

search("apple");
search("banana");
search("cherry");
// Only "cherry" will be searched after 300ms
```

---

## Benefits of Higher-Order Functions

| Benefit | Description |
|---------|-------------|
| **Code Reusability** | Functions can be reused in different contexts by passing different callbacks |
| **Abstraction** | Complex operations can be abstracted into simple, reusable functions |
| **Declarative Code** | Focus on what to do rather than how to do it |
| **Immutability** | Many higher-order functions don't modify original data |
| **Composability** | Functions can be combined to create complex behavior |
| **Testability** | Pure higher-order functions are easier to test |
| **Readability** | Code becomes more expressive and easier to understand |

---

## Common Patterns

### 1. Map-Filter-Reduce Pattern

```javascript
const data = [
    { name: "Alice", score: 85, passed: true },
    { name: "Bob", score: 72, passed: true },
    { name: "Charlie", score: 45, passed: false },
    { name: "David", score: 90, passed: true }
];

const averageScoreOfPassed = data
    .filter(student => student.passed)           // Filter passed students
    .map(student => student.score)               // Extract scores
    .reduce((sum, score) => sum + score, 0) /   // Calculate average
    data.filter(student => student.passed).length;

console.log(averageScoreOfPassed); // Output: 82.33
```

### 2. Function Pipeline

```javascript
const pipeline = (...fns) => (x) => fns.reduce((v, f) => f(v), x);

const increment = x => x + 1;
const double = x => x * 2;
const square = x => x * x;

const process = pipeline(increment, double, square);

console.log(process(3)); // Output: 64
// Explanation: 3 + 1 = 4, 4 * 2 = 8, 8 * 8 = 64
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

console.log(addFiveAndTen(3)); // Output: 18
```

---

## Summary

Higher-order functions are a fundamental concept in JavaScript that enable:

- **Functions as arguments**: Passing functions to other functions for flexible behavior
- **Functions as return values**: Creating function factories and closures
- **Built-in array methods**: `map()`, `filter()`, `reduce()`, `forEach()`, `find()`, `some()`, `every()`
- **Advanced techniques**: Function composition, currying, memoization
- **Practical patterns**: Chaining, debouncing, throttling, partial application

These functions make JavaScript code more:
- **Reusable** - Write once, use everywhere
- **Declarative** - Focus on what, not how
- **Maintainable** - Easier to understand and modify
- **Testable** - Predictable behavior with pure functions

Understanding higher-order functions is essential for writing modern, functional JavaScript code.
