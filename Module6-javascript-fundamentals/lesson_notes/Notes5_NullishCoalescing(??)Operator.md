# JavaScript Nullish Coalescing (`??`) Operator

The **Nullish Coalescing (`??`)** operator is a logical operator that provides a safe way to handle missing data. It allows you to define a default value that is only used when a variable is "nullish" (specifically `null` or `undefined`).

---

## 1. Core Concept and Syntax
In JavaScript, many values are considered "falsy" (like `0`, `false`, and `""`). The standard OR (`||`) operator often overwrites these valid values with a default. The `??` operator fixes this by being more specific.

**Syntax:**
`let result = value ?? default_value;`

* **Left-hand side:** Evaluates the variable.
* **Right-hand side:** The fallback value used **only** if the left side is `null` or `undefined`.



---

## 2. Practical Code Examples

### Basic Function Defaults
The `??` operator is ideal for ensuring functions have valid arguments even if none are passed.

```javascript
function foo(bar) { 
    // If bar is not provided (undefined), it becomes 55
    bar = bar ?? 55; 
    console.log(bar); 
} 

foo();   // Output: 55 (input was undefined)
foo(22); // Output: 22 (input was valid)
```

### Safe Object Property Access
When working with JSON or configuration objects, `??` prevents valid data (like the number `0`) from being replaced by a default value.

```javascript
const foo = { 
    bar: 0 // 0 is a valid value, but "falsy"
} 

// Using ??
const valueBar = foo.bar ?? 42; 
const valueBaz = foo.baz ?? 42; // baz does not exist (undefined)

console.log("Value of bar: ", valueBar); // Output: 0
console.log("Value of baz: ", valueBaz); // Output: 42
```

---

## 3. `??` vs. `||` (The Key Difference)

| Feature | Nullish Coalescing (??) | Logical OR (\|\|) |
| :--- | :--- | :--- |
| Triggered by | null, undefined | null, undefined, 0, false, NaN, "" |
| Data Sensitivity | Strict: Preserves valid falsy data like 0 or "". | Loose: Replaces all falsy values with the default. |
| Best Use Case | API responses, configuration settings, and counters. | UI strings, simple fallbacks, and required inputs. |

**Example of the danger of `||`:**
```javascript
let count = 0;
let finalCount = count || 10; 
// finalCount becomes 10 because 0 is falsy. This is often a bug!

let safeCount = count ?? 10;
// safeCount stays 0. This is usually what the developer wants.
```

---

## 4. Best Practices

* **Use for Configuration:** Use `??` when reading API responses or configuration settings where `0` or an empty string might be a valid setting.
* **Avoid Mixed Logic:** Never mix `??` with `&&` or `||` in the same line without using parentheses. JavaScript will throw a syntax error because the precedence is ambiguous.
    * *Bad:* `let x = a || b ?? c;`
    * *Good:* `let x = (a || b) ?? c;`
* **Handle API Responses:** Use it to set safe defaults for optional fields in JSON data.

---

## 5. Interview Preparation: Key Questions

* **"What is a 'nullish' value?"**
  Answer: A value that is strictly `null` or `undefined`.
* **"Why was `??` added to JavaScript if we already had `||`?"**
  Answer: To allow `0`, `false`, and empty strings `""` to be treated as valid data. The `||` operator treats them as "missing" (falsy) and overwrites them with the default, which causes logic bugs in applications like counters or boolean toggles.
* **"Can you chain the Nullish Coalescing operator?"**
  Answer: Yes, you can chain multiple `??` to find the first non-nullish value: `let name = user.nickname ?? user.firstName ?? "Guest";`

---