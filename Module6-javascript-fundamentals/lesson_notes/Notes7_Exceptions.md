# JavaScript Error Handling

Error handling is a critical part of software development that ensures your application can deal with unexpected situations—like network failures or invalid user input—without crashing.

---

## 1. The `try...catch...finally` Statement
This is the standard way to handle synchronous errors.

* **`try`**: Tests a block of code for errors.
* **`catch`**: Handles the error if one occurs.
* **`finally`**: Executes code after try and catch, regardless of the result.



```javascript
try {
    const a = b; // 'b' is not defined
    console.log(a);
}
catch (error) {
    console.log('The error found here is:', error.name); 
    // Output: ReferenceError (because b is not allocated in memory)
}
finally {
    console.log('runs each and every time');
}
```

---

## 2. Explicitly Creating Errors: The `throw` Statement
You can create your own errors using the `throw` keyword. This is useful for enforcing business logic (e.g., stopping a process if a user is too young).

```javascript
try {
    const age = 10;
    if (age < 18) {
        throw Error("Error: User must be at least 18 years old.");
    }
} catch (error) {
    console.log("Caught:", error.message);
} finally {
    console.log("Validation check complete.");
}
```

---

## 3. The Error Object & Call Stack
When an error occurs, JavaScript creates an **Error Object**. This object provides three useful properties for debugging:
1.  **`message`**: The error description.
2.  **`name`**: The type of error (e.g., ReferenceError, TypeError).
3.  **`stack`**: A trace of which functions were called to reach the error.



```javascript
function funcA() { funcB(); }
function funcB() { funcC(); }
function funcC() {
    throw new Error('Something went wrong in Function C!');
}

try {
    funcA();
} catch (error) {
    console.log("Name:", error.name);
    console.log("Message:", error.message);
    console.log("Stack Trace:", error.stack); // Shows the path: C -> B -> A
}
```

---

## 4. Handling Asynchronous Errors
Standard `try...catch` blocks do not catch errors in basic Promises or timers. You must use specific patterns for asynchronous code.

### Using `.catch()` with Promises
```javascript
fetch('https://invalid.url')
    .then(response => response.json())
    .catch(error => {
        console.error('Fetch failed:', error.message);
    });
```

### Using `async/await` with `try...catch`
This is the modern, preferred way to handle async errors as it reads like synchronous code.

```javascript
async function fetchData() {
    try {
        let response = await fetch('https://invalid.url');
        let data = await response.json();
        console.log(data);
    } catch (error) {
        console.error('Async Error caught:', error.message);
    }
}

fetchData();
```

---

## 5. Summary of Use Cases

| Scenario | Handling Strategy |
| :--- | :--- |
| **Network Requests** | Use `try/catch` with `await` to handle timeouts or 404s. |
| **User Input** | Use `throw` to reject invalid data (e.g., negative numbers). |
| **Database/Files** | Use `finally` to close connections or file streams regardless of error. |
| **Call Stacks** | Use `error.stack` during development to find where a bug started. |

---

## Interview Preparation: Quick Tips

* **Common Error Types:** Be ready to define `ReferenceError` (variable doesn't exist) and `TypeError` (performing an operation on the wrong type, like `null.split()`).
* **The Power of `finally`:** In an interview, emphasize that `finally` is perfect for **cleanup** (closing database connections or stopping loading spinners in UI).
* **`throw` vs `return`:** Explain that `throw` stops the execution of the current function and looks for the nearest `catch` block, whereas `return` just exits the function with a value.
* **Async Pitfall:** Remind the interviewer that a `try...catch` block around a Promise without `await` **will not** catch the error.

### ✅ Best Practices
1.  **Don't swallow errors:** Avoid empty `catch` blocks. Always log the error or notify the user.
2.  **Be specific:** Throw descriptive error messages so debugging is easier later.
3.  **Global Handlers:** For production apps, mention that you would use global handlers like `window.onerror` as a last line of defense.

---