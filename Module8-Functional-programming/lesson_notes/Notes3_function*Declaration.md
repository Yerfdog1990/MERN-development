# The `function*` Declaration in JavaScript

## Introduction

The `function*` declaration is used to define a **generator function** that returns a **Generator object**. Generators are especially powerful for **asynchronous programming** because they help resolve common callback-related problems by allowing a function to pause and resume its execution.

---

## Key Concepts

Before diving into examples, there are three core ideas to understand:

- **`yield`** — pauses the generator function and returns a value, while keeping the function's internal state intact.
- **Resume** — the function resumes execution from exactly where it last paused (i.e., after the last `yield`).
- **`next()`** — moves the generator to its next state and returns an object with two properties:
    - `value` — the yielded value.
    - `done` — a boolean that is `true` when the generator has finished, `false` otherwise.

---

## Syntax

```javascript
function* functionName(param1, param2, ...) {
  // function body
  yield value;
}
```

- The `*` after the `function` keyword marks it as a generator function.
- `yield` is used inside the body to pause and produce values one at a time.

---

## Basic Example

```javascript
// Declaring a generator function
function* generator(i) {
  yield i;
  yield i + 50;
  yield i + 100;
}

// Initialize the generator with a starting value of 50
const generate = generator(50);

// Call next() to get the first yielded value
let nextValObj = generate.next();
console.log(nextValObj.value); // Output: 50

// Continue iterating through the generator
console.log(generate.next().value); // Output: 100
console.log(generate.next().value); // Output: 150

// No more yields — value is undefined, done is true
console.log(generate.next().value); // Output: undefined
```

### Step-by-step Breakdown

| Call            | `value` | `done`  | Explanation                                 |
|-----------------|---------|---------|---------------------------------------------|
| `generate.next()` | `50`  | `false` | First `yield i` — returns `50`              |
| `generate.next()` | `100` | `false` | Second `yield i + 50` — returns `100`       |
| `generate.next()` | `150` | `false` | Third `yield i + 100` — returns `150`       |
| `generate.next()` | `undefined` | `true` | No more `yield` statements — generator is done |

---

## The `next()` Object in Detail

Every call to `.next()` returns a plain object. You can inspect both properties:

```javascript
function* counter() {
  yield "first";
  yield "second";
}

const gen = counter();

console.log(gen.next()); // { value: 'first', done: false }
console.log(gen.next()); // { value: 'second', done: false }
console.log(gen.next()); // { value: undefined, done: true }
```

Once `done` is `true`, the generator has completed and will return `undefined` for all future `.next()` calls.

---

## Practical Example — Powers of a Number

This example demonstrates a generator that produces **powers of a number**, combined with a `for...of` loop to consume the values.

```javascript
function* powerup(n) {
  for (let num = n; ; num *= n) {

    // Pause and yield the current power
    yield num;
  }
}

for (let power of powerup(5)) {

  // Stop the loop when the value exceeds 1024
  if (power > 1024)
    break;

  console.log("Yielded:", power);
}
```

### Output

```
Yielded: 5
Yielded: 25
Yielded: 125
Yielded: 625
```

### How It Works

- `powerup(n)` defines an **infinite generator** — it has no built-in stopping condition in the `for` loop itself.
- On each iteration, the current value of `num` is **yielded** (pausing the function).
- The `for...of` loop consumes each yielded value one at a time.
- When `power > 1024`, the `break` statement exits the loop, stopping the generator externally.

> **Note:** Without the `break`, this generator would run **forever**. Generators make it safe to work with infinite sequences because they only produce a value when asked.

---

## How Generators Differ from Regular Functions

| Feature                  | Regular Function          | Generator Function (`function*`)       |
|--------------------------|---------------------------|----------------------------------------|
| Runs to completion       | ✅ Always                  | ❌ Can pause mid-execution              |
| Returns value            | Once, via `return`        | Multiple times, via `yield`            |
| Maintains state          | ❌ No                      | ✅ Yes — state is preserved between calls |
| Callable multiple times  | ✅ Yes                     | ✅ Yes, via `.next()`                   |
| Returns                  | A direct value            | A Generator object                     |

---

## Using `for...of` with Generators

The `for...of` loop is a clean and readable way to consume all values from a generator without manually calling `.next()`.

```javascript
function* fruits() {
  yield "Apple";
  yield "Banana";
  yield "Mango";
}

for (let fruit of fruits()) {
  console.log(fruit);
}
// Output:
// Apple
// Banana
// Mango
```

The loop automatically stops when `done` is `true`.

---

## Passing Values into `next()`

You can also **pass a value back into the generator** through `.next(value)`. The passed value becomes the result of the `yield` expression inside the generator.

```javascript
function* dialogue() {
  const name = yield "What is your name?";
  console.log(`Hello, ${name}!`);
}

const gen = dialogue();
console.log(gen.next().value);  // Output: What is your name?
gen.next("Alice");               // Output: Hello, Alice!
```

---

## Key Takeaways

- Use `function*` to declare a generator function.
- `yield` pauses execution and returns a value — the function remembers its state.
- `.next()` resumes the generator and returns `{ value, done }`.
- Generators are ideal for **lazy evaluation** — producing values only when needed.
- They make **infinite sequences** safe to work with when combined with a `break` condition.
- The `for...of` loop offers a clean alternative to calling `.next()` manually.
- Generators help solve **callback hell** in asynchronous programming by making async code read more like synchronous code.

---