# JavaScript String indexOf() Method

**Last Updated:** 14 Aug, 2025

The `indexOf()` method is used to find the position of a value inside a string. It returns the index where the value first appears.

## Overview

- **Returns 0-based index of first occurrence**
- **Used to locate a substring inside a string**
- **It is case-sensitive, so different letter cases are treated differently**

```javascript
let text = "Hello World";

let position = text.indexOf("World");

console.log(position); // 6
```

---

## Syntax

```javascript
str.indexOf(searchValue, index);
```

---

## Parameters

### searchValue
The `searchValue` is the string to be searched in the base string.

### index (optional)
The `index` defines the starting index from where the search value will be searched in the base string.

---

## Return Value

- **If searchValue is found, method returns the index of its first occurrence**
- **If searchValue is not found, method returns -1**

---

## Examples

### Example 1: Finding the First Occurrence of a Substring

Here's a simple example that finds the position of a substring within a string:

```javascript
// Original string
let str = 'Departed Train';

// Finding index of occurrence of 'Train'
let index = str.indexOf('Train');
console.log(index);
```

**Output:**
```
8
```

**Explanation:**
- String: 'D e p a r t e d   T r a i n'
- 'Train' starts at index 8
- Method returns 8

---

### Example 2: Using indexOf() to Locate Substrings

The `indexOf()` method can be used to search for longer substrings:

```javascript
// JavaScript to illustrate indexOf() method

// Original string
let str = 'Departed Train';

// Finding index of occurrence of 'ed Tr'
let index = str.indexOf('ed Tr');

console.log(index);
```

**Output:**
```
5
```

**Explanation:**
- String: 'D e p a r t e d   T r a i n'
- 'ed Tr' starts at index 5
- Method returns 5

---

### Example 3: Handling Case Sensitivity in indexOf() Method

The `indexOf()` method is case-sensitive. If cases don't match, the method will return -1:

```javascript
// Original string
let str = 'Departed Train';

// Finding index of occurrence of 'train' (lowercase)
let index = str.indexOf('train');

console.log(index);
```

**Output:**
```
-1
```

**Explanation:**
- String contains 'Train' (uppercase T)
- Searching for 'train' (lowercase t)
- Due to case sensitivity, no match found
- Method returns -1

---

### Example 4: Using an Index to Start Search

You can specify a starting index from where the search begins. This is useful when you want to skip certain parts of the string:

```javascript
// Original string
let str = 'Departed Train before another Train';

// Finding index of occurrence of 'Train'
let index = str.indexOf('Train');

console.log(index);
```

**Output:**
```
8
```

**Explanation:**
- First 'Train' appears at index 8
- Method returns the first occurrence by default

---

## More Examples

### Example 5: Using Starting Index Parameter

```javascript
let str = 'Departed Train before another Train';

// Find first occurrence
let firstIndex = str.indexOf('Train');
console.log('First occurrence:', firstIndex); // 8

// Find second occurrence (start searching after first)
let secondIndex = str.indexOf('Train', firstIndex + 1);
console.log('Second occurrence:', secondIndex); // 28
```

**Output:**
```
First occurrence: 8
Second occurrence: 28
```

### Example 6: Searching for Empty String

```javascript
let str = 'Hello World';

console.log(str.indexOf(''));    // 0 (empty string found at start)
console.log(str.indexOf('', 5)); // 5 (empty string found at position 5)
console.log(str.indexOf('', 20)); // 11 (empty string found at end)
```

### Example 7: Searching for Single Character

```javascript
let str = 'JavaScript';

console.log(str.indexOf('J')); // 0
console.log(str.indexOf('a')); // 1
console.log(str.indexOf('v')); // 2
console.log(str.indexOf('z')); // -1 (not found)
```

### Example 8: Finding All Occurrences

```javascript
function findAllOccurrences(str, searchValue) {
    const indices = [];
    let index = str.indexOf(searchValue);
    
    while (index !== -1) {
        indices.push(index);
        index = str.indexOf(searchValue, index + 1);
    }
    
    return indices;
}

let text = 'Hello Hello Hello';
console.log(findAllOccurrences(text, 'Hello')); // [0, 6, 12]
```

---

## Common Use Cases

### 1. Checking if Substring Exists

```javascript
function containsSubstring(str, searchValue) {
    return str.indexOf(searchValue) !== -1;
}

console.log(containsSubstring('Hello World', 'World')); // true
console.log(containsSubstring('Hello World', 'world')); // false (case sensitive)
```

### 2. Validating Email Format

```javascript
function hasValidEmailFormat(email) {
    const hasAt = email.indexOf('@') !== -1;
    const hasDot = email.indexOf('.') !== -1;
    const atBeforeDot = email.indexOf('@') < email.lastIndexOf('.');
    
    return hasAt && hasDot && atBeforeDot;
}

console.log(hasValidEmailFormat('user@example.com')); // true
console.log(hasValidEmailFormat('userexample.com'));  // false
console.log(hasValidEmailFormat('user@examplecom'));  // false
```

### 3. Extracting Substring Before a Character

```javascript
function getBeforeChar(str, char) {
    const index = str.indexOf(char);
    return index === -1 ? str : str.substring(0, index);
}

console.log(getBeforeChar('user@example.com', '@')); // 'user'
console.log(getBeforeChar('filename.txt', '.'));    // 'filename'
console.log(getBeforeChar('nodots', '.'));        // 'nodots'
```

### 4. Counting Occurrences

```javascript
function countOccurrences(str, searchValue) {
    let count = 0;
    let index = str.indexOf(searchValue);
    
    while (index !== -1) {
        count++;
        index = str.indexOf(searchValue, index + 1);
    }
    
    return count;
}

console.log(countOccurrences('banana', 'a')); // 3
console.log(countOccurrences('hello world', 'l')); // 3
```

---

## Advanced Usage

### 1. Case-Insensitive Search

```javascript
function indexOfIgnoreCase(str, searchValue, startIndex = 0) {
    const lowerStr = str.toLowerCase();
    const lowerSearch = searchValue.toLowerCase();
    return lowerStr.indexOf(lowerSearch, startIndex);
}

console.log(indexOfIgnoreCase('Hello World', 'world')); // 6
console.log(indexOfIgnoreCase('JavaScript', 'SCRIPT')); // 4
```

### 2. Finding Last N Occurrences

```javascript
function findLastNOccurrences(str, searchValue, n) {
    const indices = [];
    let index = str.indexOf(searchValue);
    
    while (index !== -1 && indices.length < n) {
        indices.push(index);
        index = str.indexOf(searchValue, index + 1);
    }
    
    return indices;
}

console.log(findLastNOccurrences('a b a b a b', 'a', 2)); // [0, 4]
```

### 3. Search with Wildcard Pattern

```javascript
function indexOfPattern(str, pattern) {
    const regex = new RegExp(pattern.replace(/\*/g, '.*'));
    const match = str.match(regex);
    return match ? str.indexOf(match[0]) : -1;
}

console.log(indexOfPattern('Hello World', 'W*')); // 6
console.log(indexOfPattern('JavaScript', 'Java*')); // 0
```

---

## Performance Considerations

### Performance Analysis
- `indexOf()` is highly optimized in modern JavaScript engines
- Linear time complexity O(n) where n is string length
- More efficient than regular expressions for simple substring search
- Starting index parameter can improve performance for subsequent searches

### Benchmark Example

```javascript
let longString = "Hello World ".repeat(10000);

// Using indexOf()
console.time('indexOf');
let index1 = longString.indexOf('World');
console.timeEnd('indexOf');

// Using regular expression
console.time('regex');
let index2 = longString.search(/World/);
console.timeEnd('regex');
```

---

## Comparison with Other Methods

| Method | Return Type | Case Sensitive | Starting Index | Use Case |
|--------|-------------|----------------|----------------|----------|
| `indexOf()` | Number | Yes | Optional | Find first occurrence |
| `lastIndexOf()` | Number | Yes | Optional | Find last occurrence |
| `includes()` | Boolean | Yes | Optional | Check existence |
| `search()` | Number | No | No | Regex search |

### Example Comparison

```javascript
let str = 'Hello World Hello';

console.log(str.indexOf('Hello'));      // 0 (first occurrence)
console.log(str.lastIndexOf('Hello'));  // 12 (last occurrence)
console.log(str.includes('Hello'));     // true (exists)
console.log(str.search(/Hello/i));     // 0 (case-insensitive regex)
```

---

## Edge Cases and Special Scenarios

### 1. Empty Search String

```javascript
let str = 'Hello';
console.log(str.indexOf(''));    // 0 (always found at start)
console.log(str.indexOf('', 3));  // 3 (found at specified position)
```

### 2. Search String Longer Than Target

```javascript
let str = 'Hi';
console.log(str.indexOf('Hello')); // -1 (search string longer than target)
```

### 3. Negative Starting Index

```javascript
let str = 'Hello World';
console.log(str.indexOf('World', -1)); // 6 (treated as 0)
console.log(str.indexOf('World', -5)); // 6 (treated as 0)
```

### 4. Starting Index Beyond String Length

```javascript
let str = 'Hello';
console.log(str.indexOf('H', 10)); // -1 (start beyond string)
console.log(str.indexOf('', 10));  // 5 (empty string case)
```

---

## Best Practices

### ✅ Recommended Practices

1. **Check for -1** when testing for existence
2. **Use starting index** for finding multiple occurrences
3. **Consider case sensitivity** in your search logic
4. **Use `includes()`** for simple existence checks (ES6+)

### ❌ Common Pitfalls to Avoid

1. **Don't assume index exists** without checking for -1
2. **Don't forget case sensitivity** in searches
3. **Don't use for complex patterns** (use regex instead)
4. **Don't ignore the starting index parameter** for multiple searches

---

## Browser Compatibility

The `indexOf()` method is universally supported across all browsers and JavaScript environments:

- ✅ Chrome (all versions)
- ✅ Firefox (all versions)
- ✅ Safari (all versions)
- ✅ Edge (all versions)
- ✅ Internet Explorer (all versions)
- ✅ Node.js (all versions)
- ✅ Mobile browsers

---

## Summary

### Key Takeaways

1. **First Occurrence**: Returns index of first match found
2. **Case Sensitive**: Different cases are treated as different strings
3. **-1 for Not Found**: Clear indicator when search fails
4. **Starting Index**: Flexible search starting position
5. **High Performance**: Optimized for simple substring searches

### When to Use `indexOf()`

- **Finding position of specific substrings**
- **Checking if substring exists** (with -1 check)
- **Extracting parts of strings**
- **Counting occurrences**

### When to Use Alternatives

- **Simple existence check**: Use `includes()` (ES6+)
- **Last occurrence**: Use `lastIndexOf()`
- **Pattern matching**: Use `search()` with regex
- **Case-insensitive search**: Use regex or custom function

The `indexOf()` method is a fundamental string manipulation tool that provides efficient and reliable substring searching capabilities in JavaScript.
