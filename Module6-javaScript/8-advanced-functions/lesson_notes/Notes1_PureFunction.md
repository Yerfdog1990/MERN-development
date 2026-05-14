# Pure Functions in JavaScript

## What is a Pure Function?

A Pure Function is a function (a block of code) that always returns the same result if the same arguments are passed.

### Key Characteristics:
- **Always returns the same result for the same input** - Ensures consistent and predictable behavior
- **Does not modify or rely on any external variables or state** - No side effects
- **Often works with immutable data** - Improves reliability and prevents side effects
- **Independent of external state** - Makes functions easy to test and highly reusable

### Example of a Pure Function

```javascript
function add(a, b) {
    return a + b;
}

console.log(add(2, 3)); // Output: 5
console.log(add(2, 3)); // Output: 5 (always the same for same inputs)
```

**Note:** Generally, we use pure functions in JavaScript for any purpose due to their reliability and predictability.

---

## Characteristics of Pure Functions

### 1. Deterministic Output
For a given set of inputs, the output is always the same. There's no randomness or dependency on external factors.

```javascript
function multiply(a, b) {
    return a * b;
}

console.log(multiply(3, 4)); // Output: 12
console.log(multiply(3, 4)); // Output: 12 (always the same)
```

### 2. No Side Effects
The function does not:
- Modify variables outside its scope
- Interact with external systems (APIs, databases, DOM)
- Change mutable data
- Perform I/O operations (console.log, file operations)

```javascript
// Pure function - no side effects
function square(x) {
    return x * x;
}

console.log(square(5)); // Output: 25
```

### 3. Immutability
Pure functions do not change the input values; instead, they return a new value or object.

```javascript
// Pure function with immutability
function doubleArray(arr) {
    // Returns a new array instead of modifying the original
    return arr.map(item => item * 2);
}

const original = [1, 2, 3];
const doubled = doubleArray(original);

console.log(original); // Output: [1, 2, 3] (unchanged)
console.log(doubled);  // Output: [2, 4, 6] (new array)
```

---

## Function Behavior with Side Effects (Impure Functions)

### Example: Increment Function with Side Effect

Here, `increment` is **not** a pure function because it modifies the external variable `count`.

```javascript
let count = 0;

function increment() {
    count++;  // Modifies external variable - SIDE EFFECT
    return count;
}

console.log(increment()); // Output: 1
console.log(increment()); // Output: 2 (different result for same "no argument" call)
console.log(count);       // Output: 2 (external state changed)
```

### Why This is Impure:
- Relies on external variable `count`
- Modifies external state
- Returns different results for the same "no argument" calls

---

## Impure Functions: What to Avoid

Impure functions can cause unpredictable behavior or modify external state, making code harder to understand and maintain.

### Problems with Impure Functions:
- They may return different results for the same inputs
- They can change or depend on external variables, causing hidden bugs
- They are difficult to test
- They make code harder to debug and maintain

### Example: Object Mutation

```javascript
let user = { name: "Meeta", age: 25 };

function updateUserAge(newAge) {
    user.age = newAge;  // Modifies global object - SIDE EFFECT
    return user;
}

console.log(updateUserAge(26)); // Output: { name: "Meeta", age: 26 }
console.log(user.age);          // Output: 26 (global object altered)

// Calling again with same input returns different result
console.log(updateUserAge(26)); // Output: { name: "Meeta", age: 26 }
console.log(user.age);          // Output: 26 (but state is already changed)
```

### Pure Alternative:

```javascript
function updateUserAgePure(user, newAge) {
    // Returns a new object instead of modifying the original
    return { ...user, age: newAge };
}

const originalUser = { name: "Meeta", age: 25 };
const updatedUser = updateUserAgePure(originalUser, 26);

console.log(originalUser); // Output: { name: "Meeta", age: 25 } (unchanged)
console.log(updatedUser);  // Output: { name: "Meeta", age: 26 } (new object)
```

---

## More Examples: Pure vs Impure Functions

### Example 1: Array Operations

**Impure (modifies original):**
```javascript
function addElementImpure(arr, element) {
    arr.push(element);  // Modifies original array
    return arr;
}

const numbers = [1, 2, 3];
addElementImpure(numbers, 4);
console.log(numbers); // Output: [1, 2, 3, 4] (original changed)
```

**Pure (returns new array):**
```javascript
function addElementPure(arr, element) {
    return [...arr, element];  // Returns new array
}

const numbers = [1, 2, 3];
const newNumbers = addElementPure(numbers, 4);
console.log(numbers);     // Output: [1, 2, 3] (unchanged)
console.log(newNumbers);  // Output: [1, 2, 3, 4] (new array)
```

### Example 2: Random Number Generation

**Impure (relies on external state):**
```javascript
function getRandomNumber(max) {
    return Math.floor(Math.random() * max);  // Different result each time
}

console.log(getRandomNumber(10)); // Output: 3
console.log(getRandomNumber(10)); // Output: 7 (different for same input)
```

**Pure (deterministic):**
```javascript
// To make it pure, we need to pass the random seed as input
function getRandomNumberPure(max, seed) {
    // Simple pseudo-random generator (for demonstration)
    const x = Math.sin(seed) * 10000;
    return Math.floor((x - Math.floor(x)) * max);
}

console.log(getRandomNumberPure(10, 123)); // Output: 3
console.log(getRandomNumberPure(10, 123)); // Output: 3 (always same)
```

---

## Real-World Applications of Pure Functions

### 1. Data Transformation
Use pure functions in `map`, `filter`, and `reduce` operations for processing data.

```javascript
const users = [
    { name: "Alice", age: 25 },
    { name: "Bob", age: 30 },
    { name: "Charlie", age: 35 }
];

// Pure: map to get names
const getNames = (users) => users.map(user => user.name);
console.log(getNames(users)); // Output: ["Alice", "Bob", "Charlie"]

// Pure: filter adults
const filterAdults = (users) => users.filter(user => user.age >= 18);
console.log(filterAdults(users)); // Output: all users (all are adults)

// Pure: reduce to calculate average age
const calculateAverageAge = (users) => {
    const totalAge = users.reduce((sum, user) => sum + user.age, 0);
    return totalAge / users.length;
};
console.log(calculateAverageAge(users)); // Output: 30
```

### 2. State Management
Libraries like Redux emphasize pure functions for state updates (reducers).

```javascript
// Redux-style pure reducer
const initialState = { count: 0 };

function counterReducer(state = initialState, action) {
    switch (action.type) {
        case 'INCREMENT':
            return { count: state.count + 1 };  // Returns new state
        case 'DECREMENT':
            return { count: state.count - 1 };  // Returns new state
        default:
            return state;  // Returns unchanged state
    }
}

// Usage
let state = initialState;
state = counterReducer(state, { type: 'INCREMENT' });
console.log(state); // Output: { count: 1 }

state = counterReducer(state, { type: 'INCREMENT' });
console.log(state); // Output: { count: 2 }
```

### 3. Unit Testing
Pure functions are ideal for unit tests because they have predictable outputs.

```javascript
// Pure function - easy to test
function calculateDiscount(price, discountPercentage) {
    return price - (price * discountPercentage / 100);
}

// Unit test
function testCalculateDiscount() {
    console.assert(
        calculateDiscount(100, 10) === 90,
        "Test failed: 10% discount on 100 should be 90"
    );
    console.assert(
        calculateDiscount(50, 20) === 40,
        "Test failed: 20% discount on 50 should be 40"
    );
    console.log("All tests passed!");
}

testCalculateDiscount();
```

### 4. Performance Optimization
Pure functions are easily memoized, as their outputs depend solely on inputs.

```javascript
// Memoization wrapper for pure functions
function memoize(fn) {
    const cache = {};
    return function(...args) {
        const key = JSON.stringify(args);
        if (cache[key]) {
            console.log("Returning cached result");
            return cache[key];
        }
        const result = fn.apply(this, args);
        cache[key] = result;
        return result;
    };
}

// Expensive pure function
function fibonacci(n) {
    if (n <= 1) return n;
    return fibonacci(n - 1) + fibonacci(n - 2);
}

// Memoized version
const memoizedFibonacci = memoize(fibonacci);

console.log(memoizedFibonacci(10)); // Calculates
console.log(memoizedFibonacci(10)); // Returns cached result
```

---

## Summary: Benefits of Pure Functions

| Benefit | Description |
|---------|-------------|
| **Predictability** | Same input always produces same output |
| **Testability** | Easy to test with unit tests |
| **Reusability** | Can be used anywhere without side effects |
| **Debugging** | Easier to debug as behavior is isolated |
| **Parallelization** | Safe to run in parallel (no shared state) |
| **Memoization** | Can be cached for performance optimization |
| **Refactoring** | Easier to refactor without breaking code |

---

## Best Practices

1. **Avoid modifying input parameters** - Return new values instead
2. **Avoid global variables** - Pass all dependencies as arguments
3. **Avoid side effects** - No I/O, DOM manipulation, or external state changes
4. **Use immutable operations** - Prefer `map`, `filter`, `reduce` over `forEach` with mutations
5. **Keep functions small** - Single responsibility principle
6. **Document pure functions** - Make it clear when a function is pure

---

## Common Pure Function Patterns

```javascript
// 1. Transformation functions
const toUpperCase = (str) => str.toUpperCase();
const reverseString = (str) => str.split('').reverse().join('');

// 2. Predicate functions (for filter)
const isEven = (num) => num % 2 === 0;
const isAdult = (person) => person.age >= 18;

// 3. Reducer functions
const sum = (a, b) => a + b;
const multiply = (a, b) => a * b;

// 4. Composition
const compose = (...fns) => (x) => fns.reduceRight((v, f) => f(v), x);

const addOne = (x) => x + 1;
const double = (x) => x * 2;
const addOneThenDouble = compose(double, addOne);

console.log(addOneThenDouble(5)); // Output: 12 ((5 + 1) * 2)
```

---

## Conclusion

Pure functions are fundamental to writing clean, maintainable, and predictable JavaScript code. By following the principles of:
- **Deterministic output**
- **No side effects**
- **Immutability**

You can create functions that are easier to test, debug, and maintain. While not every function can be pure (e.g., I/O operations), striving for purity where possible leads to better software architecture.