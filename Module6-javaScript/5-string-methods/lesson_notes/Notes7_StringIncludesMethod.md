# JavaScript String includes() Method

**Last Updated:** 14 Aug, 2025

The `includes()` method is used to check whether a string contains a specific value. It returns a boolean result based on whether the text is found or not.

## Overview

- **Returns true if string contains the specified value**
- **Returns false if the value is not found**
- **It is case-sensitive, so uppercase and lowercase letters are treated differently**

```javascript
let text = "JavaScript is awesome";

let result = text.includes("awesome");

console.log(result); // true
```

---

## Syntax

```javascript
string.includes(searchValue, start)
```

---

## Parameters

The `includes()` method accepts parameters that control how the search is performed. These parameters define what to search for and where to start searching.

### searchValue
The `searchValue` is the string that needs to be searched.

### start (optional)
The `start` is the position from where the search begins.

- **If start is not provided, search starts from the beginning of the string**
- **If start is less than 0, the entire string will be searched**

---

## Return Value

The `includes()` method provides a simple true or false result. This result tells whether the given value exists in the string.

- **Returns true if the value is present**
- **Returns false if the value is not found**

---

## Examples

### Example 1: Basic Substring Search

The code checks whether "Geeks" exists in "Welcome to GeeksforGeeks." and logs true because the substring is found.

```javascript
let str = "Welcome to GeeksforGeeks.";
let check = str.includes("Geeks");
console.log(check);
```

**Output:**
```
true
```

**Explanation:**
- String: 'Welcome to GeeksforGeeks.'
- Searching for: 'Geeks'
- 'Geeks' is found in the string
- Method returns true

---

### Example 2: Case Sensitivity

Here, the second parameter is not provided, so the search starts from index 0. Since the method is case-sensitive, it treats strings differently and therefore returns false.

```javascript
let str = "Welcome to GeeksforGeeks.";
let check = str.includes("geeks");
console.log(check);
```

**Output:**
```
false
```

**Explanation:**
- String contains 'Geeks' (uppercase G)
- Searching for 'geeks' (lowercase g)
- Due to case sensitivity, no match found
- Method returns false

---

### Example 3: Using Starting Index

The code checks whether character "o" exists in "Welcome to GeeksforGeeks." starting from index 17 and logs false, since "o" does not appear after that index.

```javascript
let str = "Welcome to GeeksforGeeks.";
let check = str.includes("o", 17);
console.log(check);
```

**Output:**
```
false
```

**Explanation:**
- String: 'Welcome to GeeksforGeeks.'
- Characters at indices:
  - Index 4: 'o' in "Welcome"
  - Index 17: 'e' in "Geeks"
- Starting from index 17, there's no 'o'
- Method returns false

---

### Example 4: Negative Starting Index

If the computed index (starting index) i.e. position from which the search will begin is less than 0, the entire string will be searched.

```javascript
let str = "Welcome to GeeksforGeeks.";
let check = str.includes("o", -2);
console.log(check);
```

**Output:**
```
true
```

**Explanation:**
- Starting index is -2 (less than 0)
- Method treats negative index as 0
- Entire string is searched
- 'o' is found at index 4
- Method returns true

---

## More Examples

### Example 5: Checking for Empty String

```javascript
let str = "Hello World";
console.log(str.includes(""));    // true (empty string always found)
console.log(str.includes("", 5)); // true (empty string found at any position)
```

### Example 6: Searching for Special Characters

```javascript
let str = "Hello@World!123";
console.log(str.includes("@"));     // true
console.log(str.includes("!"));     // true
console.log(str.includes("#"));     // false
console.log(str.includes("123"));   // true
```

### Example 7: Multiple Checks

```javascript
function checkKeywords(text, keywords) {
    const found = [];
    for (const keyword of keywords) {
        if (text.includes(keyword)) {
            found.push(keyword);
        }
    }
    return found;
}

let message = "JavaScript is a programming language";
let keywords = ["JavaScript", "Python", "Java", "programming"];
console.log(checkKeywords(message, keywords));
// ["JavaScript", "programming"]
```

### Example 8: Starting Index Beyond String Length

```javascript
let str = "Hello";
console.log(str.includes("H", 10)); // false (start beyond string)
console.log(str.includes("", 10));  // true (empty string case)
```

---

## Common Use Cases

### 1. Input Validation

```javascript
function validateEmail(email) {
    const hasAt = email.includes("@");
    const hasDot = email.includes(".");
    return hasAt && hasDot;
}

console.log(validateEmail("user@example.com")); // true
console.log(validateEmail("userexample.com"));  // false
console.log(validateEmail("user@examplecom"));  // false
```

### 2. Content Filtering

```javascript
function filterContent(posts, bannedWords) {
    return posts.filter(post => {
        return !bannedWords.some(word => post.toLowerCase().includes(word.toLowerCase()));
    });
}

let posts = [
    "This is a great post",
    "This post contains spam content",
    "Another valid post"
];

let banned = ["spam", "inappropriate"];
console.log(filterContent(posts, banned));
// ["This is a great post", "Another valid post"]
```

### 3. URL Validation

```javascript
function isSecureUrl(url) {
    return url.includes("https://");
}

console.log(isSecureUrl("https://example.com")); // true
console.log(isSecureUrl("http://example.com"));  // false
console.log(isSecureUrl("ftp://example.com"));  // false
```

### 4. String Analysis

```javascript
function analyzeText(text) {
    return {
        hasNumbers: /\d/.test(text) || text.includes("0"),
        hasUppercase: /[A-Z]/.test(text),
        hasLowercase: /[a-z]/.test(text),
        hasSpaces: text.includes(" "),
        length: text.length
    };
}

console.log(analyzeText("Hello World 123"));
// {
//   hasNumbers: true,
//   hasUppercase: true,
//   hasLowercase: true,
//   hasSpaces: true,
//   length: 14
// }
```

---

## Advanced Usage

### 1. Case-Insensitive Search

```javascript
function includesIgnoreCase(str, searchValue, start = 0) {
    const lowerStr = str.toLowerCase();
    const lowerSearch = searchValue.toLowerCase();
    return lowerStr.includes(lowerSearch, start);
}

console.log(includesIgnoreCase("Hello World", "world")); // true
console.log(includesIgnoreCase("JavaScript", "SCRIPT")); // true
```

### 2. Multiple Substring Check

```javascript
function includesAny(str, searchValues, start = 0) {
    return searchValues.some(value => str.includes(value, start));
}

function includesAll(str, searchValues, start = 0) {
    return searchValues.every(value => str.includes(value, start));
}

let text = "JavaScript programming language";
console.log(includesAny(text, ["Python", "Java", "C++"])); // true
console.log(includesAll(text, ["JavaScript", "language"])); // true
```

### 3. Counting Occurrences

```javascript
function countIncludes(str, searchValue) {
    let count = 0;
    let index = str.indexOf(searchValue);
    
    while (index !== -1) {
        count++;
        index = str.indexOf(searchValue, index + 1);
    }
    
    return count;
}

console.log(countIncludes("banana", "a")); // 3
console.log(countIncludes("hello world", "l")); // 3
```

---

## Comparison with Other Methods

| Method | Return Type | Case Sensitive | Starting Index | Use Case |
|--------|-------------|----------------|----------------|----------|
| `includes()` | Boolean | Yes | Optional | Check existence |
| `indexOf()` | Number | Yes | Optional | Find position |
| `startsWith()` | Boolean | Yes | No | Check prefix |
| `endsWith()` | Boolean | Yes | No | Check suffix |
| `search()` | Number | No (with regex) | No | Pattern search |

### Example Comparison

```javascript
let str = 'Hello World';

console.log(str.includes('World'));     // true
console.log(str.indexOf('World'));      // 6
console.log(str.startsWith('Hello'));     // true
console.log(str.endsWith('World'));       // true
console.log(str.search(/World/i));       // 6 (case-insensitive)
```

---

## Performance Considerations

### Performance Analysis
- `includes()` is highly optimized in modern JavaScript engines
- Linear time complexity O(n) where n is string length
- More readable than `indexOf() !== -1` for existence checks
- Starting index parameter can improve performance for partial searches

### Benchmark Example

```javascript
let longString = "Hello World ".repeat(10000);

// Using includes()
console.time('includes');
let result1 = longString.includes('World');
console.timeEnd('includes');

// Using indexOf()
console.time('indexOf');
let result2 = longString.indexOf('World') !== -1;
console.timeEnd('indexOf');

// Using regex
console.time('regex');
let result3 = /World/.test(longString);
console.timeEnd('regex');
```

---

## Edge Cases and Special Scenarios

### 1. Empty Search String

```javascript
let str = 'Hello';
console.log(str.includes(''));    // true (always true)
console.log(str.includes('', 3));  // true (empty string found anywhere)
```

### 2. Search String Longer Than Target

```javascript
let str = 'Hi';
console.log(str.includes('Hello')); // false
```

### 3. Negative Starting Index

```javascript
let str = 'Hello World';
console.log(str.includes('World', -1)); // true (treated as 0)
console.log(str.includes('World', -5)); // true (treated as 0)
```

### 4. Starting Index Beyond String Length

```javascript
let str = 'Hello';
console.log(str.includes('H', 10)); // false (start beyond string)
console.log(str.includes('', 10));  // true (empty string case)
```

### 5. Unicode Characters

```javascript
let str = 'Hello 😊';
console.log(str.includes('😊')); // true
console.log(str.includes('👍')); // false
```

---

## Best Practices

### ✅ Recommended Practices

1. **Use `includes()` for simple existence checks**
2. **Consider case sensitivity** in your search logic
3. **Use starting index** for performance optimization
4. **Combine with other methods** for complex validation

### ❌ Common Pitfalls to Avoid

1. **Don't forget case sensitivity** in searches
2. **Don't use for complex patterns** (use regex instead)
3. **Don't assume position** (use `indexOf()` if you need it)
4. **Don't ignore the starting index** parameter for optimization

---

## Browser Compatibility

The `includes()` method is supported in modern browsers:

- ✅ Chrome 41+
- ✅ Firefox 40+
- ✅ Safari 9+
- ✅ Edge 12+
- ✅ Internet Explorer: Not supported
- ✅ Node.js 4.0+
- ✅ Mobile browsers (modern versions)

**For older browser support, use `indexOf() !== -1` instead:**

```javascript
// Modern approach
if (str.includes('search')) {
    // do something
}

// Compatible approach
if (str.indexOf('search') !== -1) {
    // do something
}
```

---

## Summary

### Key Takeaways

1. **Boolean Result**: Simple true/false for existence checks
2. **Case Sensitive**: Different cases treated as different strings
3. **Starting Index**: Flexible search starting position
4. **Readability**: More readable than `indexOf() !== -1`
5. **Performance**: Optimized for simple substring searches

### When to Use `includes()`

- **Simple existence checks**
- **Input validation**
- **Content filtering**
- **Conditional logic based on substring presence**

### When to Use Alternatives

- **Need position**: Use `indexOf()` or `lastIndexOf()`
- **Pattern matching**: Use `search()` with regex
- **Prefix/suffix checks**: Use `startsWith()` or `endsWith()`
- **Legacy browser support**: Use `indexOf() !== -1`

The `includes()` method provides a clean, readable way to check for substring existence in JavaScript strings, making code more intuitive and maintainable.
