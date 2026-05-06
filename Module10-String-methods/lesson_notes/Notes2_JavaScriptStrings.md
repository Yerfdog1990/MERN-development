# JavaScript Strings

**Last Updated:** 14 Aug, 2025

A JavaScript **String** is a sequence of characters, typically used to represent text.

In JavaScript, there is no character type (Similar to Python and different from C, C++ and Java), so a single character string is used when we need a character.

Like Java and Python, **strings in JavaScript are immutable**.

---

## Creating Strings

### Create using Literals - Recommended
We can either use a single quote or a double quote to create a string. We can use either of the two, but it is recommended to be consistent with your choice throughout your code.

```javascript
// Using Single Quote
let s1 = 'abcd';
console.log(s1);

// Using Double Quote
let s2 = "abcd";
console.log(s2);
```

**Output:**
```
abcd
abcd
```

### Create using Constructor
The `new String()` constructor creates a string object instead of a primitive string. It is generally not recommended because it can cause unexpected behavior in comparisons.

```javascript
let s = new String('abcd');
console.log(s);
```

**Output:**
```
[String: 'abcd']
```

### Template Literals (String Interpolation)
You can create strings using Template Literals. Template literals allow you to embed expressions within backticks (`) for dynamic string creation, making it more readable and versatile.

```javascript
let s1 = 'gfg';
let s2 = `You are learning from ${s1}`;

console.log(s2);
```

**Output:**
```
You are learning from gfg
```

### Empty String
You can create an empty string by assigning either single or double quotes with no characters in between.

```javascript
let s1 = '';
let s2 = "";

console.log(s1);
console.log(s2);
```

**Output:**
Since the strings are empty, console.log will print two blank lines.

### Multiline Strings (ES6 and later)
You can create a multiline string using backticks (`) with template literals. The backticks allows you to span the string across multiple lines, preserving the line breaks within the string.

```javascript
let s = `
    This is a
    multiline
    string`;

console.log(s);
```

**Output:**
```
    This is a
    multiline
    string
```

---

## Basic Operations on JavaScript Strings

### 1. Finding the length of a String
You can find the length of a string using the **length property**.

```javascript
let s = 'JavaScript';
let len = s.length;

console.log("String Length: " + len);
```

**Output:**
```
String Length: 10
```

### 2. String Concatenation
You can combine two or more strings using **+ Operator**.

```javascript
let s1 = 'Java';
let s2 = 'Script';
let res = s1 + s2;

console.log("Concatenated String: " + res);
```

**Output:**
```
Concatenated String: JavaScript
```

### 3. Escape Characters
We can use escape characters in string to add single quotes, dual quotes, and backslash.

- `\'` - Inserts a single quote
- `\"` - Inserts a double quote 
- `\\` - Inserts a backslash

```javascript
const s1 = "\'GfG\' is a learning portal";
const s2 = "\"GfG\" is a learning portal";
const s3 = "\\GfG\\ is a learning portal";

console.log(s1);
console.log(s2);
console.log(s3);
```

**Output:**
```
'GfG' is a learning portal
"GfG" is a learning portal
\GfG\ is a learning portal
```

### 4. Breaking Long Strings
Using a backslash (\) to break a long string is not recommended, as it is not supported in strict mode. Instead, use template literals or string concatenation.

```javascript
const s = "'GeeksforGeeks' is \
a learning portal";

console.log(s);
```

**Output:**
```
'GeeksforGeeks' is a learning portal
```

> **Note:** This method might not be supported on all browsers. A better way to break a string is by using the string addition.

```javascript
const s = "'GeeksforGeeks' is a"
    + " learning portal";

console.log(s);
```

**Output:**
```
'GeeksforGeeks' is a learning portal
```

### 5. Find Substring of a String
We can extract a portion of a string using the **substring() method**.

```javascript
let s1 = 'JavaScript Tutorial';
let s2 = s1.substring(0, 10);

console.log(s2);
```

**Output:**
```
JavaScript
```

### 6. Convert String to Uppercase and Lowercase
Convert a string to uppercase and lowercase using **toUpperCase()** and **toLowerCase()** methods.

```javascript
let s = 'JavaScript';
let uCase = s.toUpperCase();
let lCase = s.toLowerCase();

console.log(uCase);
console.log(lCase);
```

**Output:**
```
JAVASCRIPT
javascript
```

### 7. String Search in JavaScript
Find the first index of a substring within a string using **indexOf() method**.

```javascript
let s1 = 'def abc abc';
let i = s1.indexOf('abc');

console.log(i);
```

**Output:**
```
4
```

### 8. String Replace in JavaScript
Replace occurrences of a substring using the **replace() method**. By default, replace() only replaces the first occurrence. To replace all occurrences, use a regular expression with the g flag.

```javascript
let s1 = 'Learn HTML at GfG and HTML is useful';
let s2 = s1.replace(/HTML/g, 'JavaScript');

console.log(s2);
```

**Output:**
```
Learn JavaScript at GfG and JavaScript is useful
```

### 9. Trimming Whitespace from String
Remove leading and trailing whitespaces using **trim() method**.

```javascript
let s1 = '    Learn JavaScript       ';
let s2 = s1.trim();

console.log(s2);
```

**Output:**
```
Learn JavaScript
```

### 10. Access Characters from String
Access individual characters in a string using bracket notation and **charAt() method**.

```javascript
let s1 = 'Learn JavaScript';
let s2 = s1[6];
console.log(s2);

s2 = s1.charAt(6);
console.log(s2);
```

**Output:**
```
J
J
```

### 11. String Comparison in JavaScript
There are some inbuilt methods that can be used to compare strings such as the equality operator and another like **localeCompare() method**.

```javascript
let s1 = "Ajay"
let s2 = new String("Ajay");

console.log(s1 == s2);  // true (type coercion)
console.log(s1 === s2); // false (strict comparison)
console.log(s1.localeCompare(s2)); // 0 (means they are equal lexicographically)
```

**Output:**
```
true
false
0
```

> **Note:** The equality operator (==) may return true when comparing a string object with a primitive string due to type coercion. However, === (strict equality) returns false because objects and primitives are different types. The localeCompare() method compares strings lexicographically.

### 12. Passing JavaScript String as Objects
We can create a JavaScript string using the new keyword.

```javascript
const str = new String("GeeksforGeeks");

console.log(str);
```

**Output:**
```
[String: 'GeeksforGeeks']
```

---

## Important Distinctions

### Are the strings created by the new keyword is same as normal strings?
No, the string created by the new keyword is an object and is not the same as normal strings.

```javascript
const str1 = new String("GeeksforGeeks");
const str2 = "GeeksforGeeks";

console.log(str1 == str2);   // true (type coercion)
console.log(str1 === str2);  // false (strict comparison)
```

**Output:**
```
true
false
```

---

## Key Concepts Summary

### String Types
- **Primitive Strings**: Created with literals (`'text'` or `"text"`)
- **String Objects**: Created with `new String('text')` constructor

### Immutability
- Strings are immutable - once created, they cannot be changed
- String methods return new strings rather than modifying the original

### Best Practices
- Use string literals (`'` or `"`) instead of `new String()` constructor
- Be consistent with quote style throughout your code
- Use template literals for string interpolation and multiline strings
- Use strict equality (`===`) for string comparisons to avoid type coercion issues

### Common Pitfalls
- String objects vs primitive strings behavior in comparisons
- Type coercion with `==` operator
- Backslash string breaking not supported in strict mode

---

## String Creation Methods Comparison

| Method | Type | Recommended | Use Case |
|--------|------|-------------|----------|
| `'text'` | Primitive | ✅ Yes | Simple strings |
| `"text"` | Primitive | ✅ Yes | Simple strings |
| `` `text` `` | Primitive | ✅ Yes | Template literals, multiline |
| `new String('text')` | Object | ❌ No | Rare cases, avoid |

---

## Memory and Performance Considerations

- Primitive strings are more memory efficient than string objects
- String objects have additional overhead and can cause unexpected behavior
- Template literals are generally more readable for complex string construction
- String concatenation with `+` is optimized by modern JavaScript engines