# JavaScript Ternary Operator

The **Ternary Operator** is JavaScript's only operator that takes three operands. it is a concise alternative to the traditional `if...else` statement, frequently used for simple assignments and conditional logic.

---

## 1. Syntax and Basic Usage
The ternary operator evaluates a condition and returns one of two expressions.

**Syntax:**
`condition ? expressionIfTrue : expressionIfFalse`

* **Condition:** An expression that evaluates to `true` or `false`.
* **expressionIfTrue:** The value returned if the condition is truthy.
* **expressionIfFalse:** The value returned if the condition is falsy.

### Basic Example
```javascript
// Illustration of Conditional operator
let PMarks = 50;
let res = (PMarks > 39) ? "Pass" : "Fail";

console.log(res); // Output: Pass
```
**Breakdown:**
1. `PMarks` is 50.
2. The condition `(50 > 39)` is **true**.
3. The operator returns `"Pass"`, which is assigned to `res`.

---

## 2. Advanced Applications

### Ternary Operator in Functions
You can use the operator to make functions more concise by returning the result of the ternary expression directly.
```javascript
function checkAge(age) {
  return (age >= 18) ? 'Adult' : 'Minor';
}

console.log(checkAge(20)); // Output: Adult
console.log(checkAge(15)); // Output: Minor
```

### Executing Function Calls
Beyond returning values, the ternary operator can decide which function to execute.
```javascript
function sayHello(name) {
  console.log(`Hello, ${name}!`);
}

function sayGoodbye(name) {
  console.log(`Goodbye, ${name}!`);
}

let isLeaving = true;
let name = 'Geeks';

// Calls sayGoodbye because isLeaving is true
isLeaving ? sayGoodbye(name) : sayHello(name); 
```

### Nested Ternary Operators
For multiple conditions, you can chain ternary operators. This acts like an `if...else if...else` block.
```javascript
let day = 3;
let greeting = (day === 1) ? 'Start of the week' :
               (day === 2) ? 'Second day' :
               (day === 3) ? 'Midweek' :
               (day === 4) ? 'Almost weekend' :
               'Weekend';

console.log(greeting); // Output: Midweek
```

---

## 3. Comparison: Ternary vs. `if...else`



| Feature | `if...else` Statement | Ternary Operator (`?:`) |
| :--- | :--- | :--- |
| **Complexity** | Better for multi-line logic or complex operations. | Best for simple, single-line assignments. |
| **Readability** | Easier for beginners to read in large blocks. | More compact; reduces "boilerplate" code. |
| **Type** | A statement (does not return a value directly). | An expression (evaluates to a value). |

**Code Comparison:**
```javascript
let hour = 15;
let message;

// Using if...else
if (hour < 12) {
  message = 'Good morning';
} else {
  message = 'Good afternoon';
}

// Using Ternary (Equivalent)
let messageTernary = (hour < 12) ? 'Good morning' : 'Good afternoon';
```

---

## 4. Interview Preparation: Key Takeaways

* **Expression vs. Statement:** Remember that the ternary operator is an **expression**. This means you can use it anywhere a value is expected (like inside a template literal or as a function argument).
* **The "Clean Code" Rule:** While nesting ternaries is possible, it is often discouraged in professional environments if it exceeds 2–3 levels, as it becomes difficult to debug.
* **Type of Operands:** The expressions after `?` and `:` can be any valid JavaScript expression, including other function calls or math operations.
* **Common Use Case:** It is most frequently seen in React or modern frameworks for "Conditional Rendering" (deciding which UI component to show).

---