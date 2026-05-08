# JavaScript Comparison Operators

Comparison operators are the backbone of logic in JavaScript. They evaluate two operands and return a **Boolean value** (`true` or `false`). These are vital for control flow, such as `if` statements and loops.

---

## 1. Equality & Inequality (Abstract)
These operators compare values and perform **Type Coercion** (converting types to match) before comparing.

### Equality (`==`)
Checks if the values are equal, regardless of their data type.
```javascript
// Illustration of (==) operator
let x = 5;
let y = '5';

console.log(x == 5);     // true
console.log(y == 5);     // true (string '5' is coerced to number 5)
console.log(x == y);     // true

// Special values
console.log(NaN == NaN); // false (NaN is never equal to itself)
console.log(0 == false);  // true
console.log(0 == null);   // false
```

### Inequality (`!=`)
Checks if the values are not equal.
```javascript
// Illustration of (!=) operator
let x = 5;
let y = '5';

console.log(x != 6);     // true
console.log(y != '5');    // false
console.log(x != y);     // false (values are equal after coercion)

// Special values
console.log(0 != false);  // false
console.log(0 != null);   // true
console.log(NaN != NaN);  // true
```

---

## 2. Strict Equality & Inequality (Identity)
These are generally preferred in modern JavaScript because they **do not** perform type coercion. They check both the **value** and the **data type**.

### Strict Equality (`===`)
Returns `true` only if both the value and the type are identical.
```javascript
// Illustration of (===) operator
let x = 5;
let y = '5';

console.log(x === 6);     // false
console.log(y === '5');    // true
console.log(x === y);     // false (Number vs String)

// Special values
console.log(NaN === NaN); // false
console.log(0 === false);  // false
console.log(0 === null);   // false
```

### Strict Inequality (`!==`)
Returns `true` if the values or the types are different.
```javascript
// Illustration of (!==) operator
let x = 5;
let y = '5';

console.log(x !== 6);     // true
console.log(y !== '5');    // false
console.log(x !== y);     // true (types are different)

// Special values
console.log(0 !== false); // true
console.log(0 !== null);  // true
console.log(NaN !== NaN); // true
```

---

## 3. Relational Operators
These operators compare the relative size or order of values.

### Greater Than (`>`) & Greater Than or Equal (`>=`)
```javascript
let x = 5;
let y = "5";

// Greater Than
console.log(x > 0);       // true
console.log(y > "10");    // true (Lexicographical: "5" comes after "1")
console.log(x > "10");    // false

// Greater Than or Equal
console.log(x >= 5);      // true
console.log(y >= "15");   // true ("5" > "1")
console.log(x >= "5");    // true
```

### Less Than (`<`) & Less Than or Equal (`<=`)
```javascript
let val1 = 5;
let val2 = "5";

// Less Than
console.log(val1 < 15);   // true
console.log(val2 < "0");  // false

// Less Than or Equal
console.log(val1 <= 15);  // true
console.log(val2 <= "0"); // false
console.log(val1 <= "0"); // false
console.log(val2 <= 15);  // true
```

---

## Summary Comparison Table

| Operator Name | Usage | Operation |
| :--- | :--- | :--- |
| **Equality** | `a == b` | Compares value equality with type conversion. |
| **Inequality** | `a != b` | Compares value inequality with type conversion. |
| **Strict Equality** | `a === b` | Compares value AND type; no conversion. |
| **Strict Inequality**| `a !== b` | Checks if value or type is different. |
| **Greater than** | `a > b` | Checks if left is strictly greater than right. |
| **Greater or equal** | `a >= b` | Checks if left is greater than or equal to right. |
| **Less than** | `a < b` | Checks if left is strictly smaller than right. |
| **Less or equal** | `a <= b` | Checks if left is smaller than or equal to right. |

---

## Interview Preparation: Quick Tips

* **The Coercion Rule:** `==` allows for type conversion (e.g., `1 == true`), whereas `===` requires the types to match exactly.
* **NaN Property:** `NaN` is the only value in JavaScript that is not equal to itself. To check for `NaN`, use `Number.isNaN()`.
* **Reference vs. Value:** While these operators work predictably for primitives (numbers, strings), comparing objects or arrays with `==` or `===` checks if they refer to the same **memory location**, not if their contents are the same.
* **Best Practice:** Always default to `===` to prevent bugs from unexpected type coercion.

---