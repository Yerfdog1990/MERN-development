# JavaScript String charCodeAt() Method

**Last Updated:** 14 Aug, 2025

The JavaScript `str.charCodeAt()` method returns the Unicode code unit of a character at a given index in a string.

## Overview

- **Index starts from 0 to length - 1**
- **Returns a number (Unicode value)**
- **Accepts an index as an argument**
- **Used to get the numeric code of a character**

```javascript
let text = "ABC";

let code = text.charCodeAt(0);

console.log(code); // 65
```

---

## Syntax

```javascript
str.charCodeAt(index)
```

---

## Parameters

This method takes one parameter called **index** to identify a character in the string. It uses this index to work with the Unicode value of that character.

- **The method accepts a single parameter: index**
- **The index must be between 0 and string.length - 1**
- **It refers to the position of the character whose Unicode value is used**

---

## Return Value

This method returns a numeric value based on the character's Unicode code. The value depends on the index you provide.

- **Returns Unicode value (between 0 and 65535) of the character**
- **The value corresponds to the character at the given index**
- **If the index is out of range, it returns NaN**

---

## Examples

### Example 1: Basic Usage

This example shows the basic use of `String.prototype.charCodeAt()` method.

```javascript
function func() {
    let str = 'GEEKS';
    let value = str.charCodeAt(0);
    console.log(value);
}

func();
```

**Output:**
```
71
```

**Explanation:**
- Character 'G' at index 0 has Unicode value 71
- The method returns the numeric code point for the character

---

### Example 2: Character at Specific Index

In this example, the method `charCodeAt()` extracts the character from the string at index 4. Since this character is 'm', therefore this method returns the Unicode sequence as 109.

```javascript
// JavaScript to illustrate charCodeAt() method
function func() {
    let str = 'ephemeral';

    // Finding code of the character at
    // given index
    let value = str.charCodeAt(4);
    console.log(value);
}

func();
```

**Output:**
```
109
```

**Explanation:**
- String: 'e p h e m e r a l'
- Index 4: 'm'
- Unicode value of 'm' is 109

---

### Example 3: Out-of-Bounds Index

In this example, the method `charCodeAt()` extracts the character from the string at index 20. Since the index is out of bounds for the string, therefore this method returns the answer as NaN.

```javascript
// JavaScript to illustrate charCodeAt() method
function func() {
    let str = 'ephemeral';

    // Finding code of the character
    // at given index
    let value = str.charCodeAt(20);

    console.log(value);
}

func();
```

**Output:**
```
NaN
```

**Explanation:**
- String 'ephemeral' has length 9 (indices 0-8)
- Index 20 is out of bounds
- Method returns NaN for invalid indices

---

## More Examples

### Example 4: All Character Codes in a String

```javascript
function getAllCharCodes(str) {
    console.log(`String: "${str}"`);
    console.log("Character codes:");
    
    for (let i = 0; i < str.length; i++) {
        const char = str.charAt(i);
        const code = str.charCodeAt(i);
        console.log(`Index ${i}: '${char}' -> ${code}`);
    }
}

getAllCharCodes("Hello");
```

**Output:**
```
String: "Hello"
Character codes:
Index 0: 'H' -> 72
Index 1: 'e' -> 101
Index 2: 'l' -> 108
Index 3: 'l' -> 108
Index 4: 'o' -> 111
```

### Example 5: Common Character Codes

```javascript
// Common ASCII character codes
console.log('A'.charCodeAt(0));  // 65 (Uppercase A)
console.log('Z'.charCodeAt(0));  // 90 (Uppercase Z)
console.log('a'.charCodeAt(0));  // 97 (Lowercase a)
console.log('z'.charCodeAt(0));  // 122 (Lowercase z)
console.log('0'.charCodeAt(0));  // 48 (Zero)
console.log('9'.charCodeAt(0));  // 57 (Nine)
console.log(' '.charCodeAt(0));  // 32 (Space)
```

### Example 6: Unicode Characters

```javascript
// Unicode characters
console.log('😀'.charCodeAt(0)); // 55357 (First code unit of emoji)
console.log('€'.charCodeAt(0));   // 8364 (Euro symbol)
console.log('ñ'.charCodeAt(0));   // 241 (Spanish ñ)
console.log('Ω'.charCodeAt(0));   // 937 (Greek Omega)
```

---

## Common Use Cases

### 1. Character Type Detection

```javascript
function isUpperCase(char) {
    const code = char.charCodeAt(0);
    return code >= 65 && code <= 90; // A-Z range
}

function isLowerCase(char) {
    const code = char.charCodeAt(0);
    return code >= 97 && code <= 122; // a-z range
}

function isDigit(char) {
    const code = char.charCodeAt(0);
    return code >= 48 && code <= 57; // 0-9 range
}

console.log(isUpperCase('A')); // true
console.log(isUpperCase('a')); // false
console.log(isDigit('5'));   // true
console.log(isDigit('a'));   // false
```

### 2. String Case Conversion

```javascript
function toUpperManual(str) {
    let result = '';
    for (let i = 0; i < str.length; i++) {
        const code = str.charCodeAt(i);
        // Convert lowercase to uppercase (a-z to A-Z)
        if (code >= 97 && code <= 122) {
            result += String.fromCharCode(code - 32);
        } else {
            result += str.charAt(i);
        }
    }
    return result;
}

console.log(toUpperManual("hello world")); // "HELLO WORLD"
```

### 3. Character Frequency Analysis

```javascript
function analyzeString(str) {
    const analysis = {
        uppercase: 0,
        lowercase: 0,
        digits: 0,
        spaces: 0,
        others: 0
    };
    
    for (let i = 0; i < str.length; i++) {
        const code = str.charCodeAt(i);
        
        if (code >= 65 && code <= 90) {
            analysis.uppercase++;
        } else if (code >= 97 && code <= 122) {
            analysis.lowercase++;
        } else if (code >= 48 && code <= 57) {
            analysis.digits++;
        } else if (code === 32) {
            analysis.spaces++;
        } else {
            analysis.others++;
        }
    }
    
    return analysis;
}

console.log(analyzeString("Hello World 123!"));
// { uppercase: 2, lowercase: 8, digits: 3, spaces: 2, others: 1 }
```

### 4. Password Strength Checker

```javascript
function checkPasswordStrength(password) {
    let hasUpper = false;
    let hasLower = false;
    let hasDigit = false;
    let hasSpecial = false;
    
    for (let i = 0; i < password.length; i++) {
        const code = password.charCodeAt(i);
        
        if (code >= 65 && code <= 90) {
            hasUpper = true;
        } else if (code >= 97 && code <= 122) {
            hasLower = true;
        } else if (code >= 48 && code <= 57) {
            hasDigit = true;
        } else {
            hasSpecial = true;
        }
    }
    
    const strength = [hasUpper, hasLower, hasDigit, hasSpecial].filter(Boolean).length;
    
    return {
        strength: strength,
        message: strength === 4 ? "Very Strong" :
                strength === 3 ? "Strong" :
                strength === 2 ? "Medium" :
                strength === 1 ? "Weak" : "Very Weak"
    };
}

console.log(checkPasswordStrength("Password123!"));
// { strength: 4, message: "Very Strong" }
```

---

## Comparison with Other Methods

| Method | Return Type | Range | Use Case |
|--------|-------------|--------|----------|
| `charAt(index)` | String | Single character | Get character |
| `charCodeAt(index)` | Number | 0-65535 | Get Unicode code |
| `codePointAt(index)` | Number | 0-1114111 | Get full Unicode code point |

### Example Comparison

```javascript
let str = "A";

console.log(str.charAt(0));      // "A" (character)
console.log(str.charCodeAt(0));  // 65 (Unicode value)
console.log(str.codePointAt(0)); // 65 (full code point)
```

---

## Edge Cases and Special Scenarios

### 1. Empty String

```javascript
let empty = "";
console.log(empty.charCodeAt(0)); // NaN
```

### 2. Negative Index

```javascript
let text = "Hello";
console.log(text.charCodeAt(-1)); // NaN
```

### 3. Non-Integer Index

```javascript
let text = "Hello";
console.log(text.charCodeAt(1.5)); // 101 (index is floored to 1)
console.log(text.charCodeAt("2"));  // 108 (string is converted to number)
```

### 4. Surrogate Pairs (Unicode Beyond BMP)

```javascript
let emoji = "😀"; // Grinning face emoji
console.log(emoji.length);        // 2 (uses surrogate pair)
console.log(emoji.charCodeAt(0));  // 55357 (high surrogate)
console.log(emoji.charCodeAt(1));  // 56832 (low surrogate)
console.log(emoji.codePointAt(0)); // 128512 (actual Unicode code point)
```

---

## Performance Considerations

### Performance Analysis
- `charCodeAt()` is generally faster than `charAt()` when you need numeric values
- Direct numeric access without string conversion
- Useful for character classification and validation

### Benchmark Example

```javascript
let testString = "Hello World!".repeat(10000);

// Using charCodeAt()
console.time('charCodeAt');
let sum1 = 0;
for (let i = 0; i < testString.length; i++) {
    sum1 += testString.charCodeAt(i);
}
console.timeEnd('charCodeAt');

// Using charAt() + charCodeAt()
console.time('charAt+charCodeAt');
let sum2 = 0;
for (let i = 0; i < testString.length; i++) {
    sum2 += testString.charAt(i).charCodeAt(0);
}
console.timeEnd('charAt+charCodeAt');
```

---

## ASCII Reference Table

| Character | Code | Character | Code | Character | Code |
|-----------|-------|-----------|-------|-----------|-------|
| '0' | 48 | 'A' | 65 | 'a' | 97 |
| '1' | 49 | 'B' | 66 | 'b' | 98 |
| '2' | 50 | 'C' | 67 | 'c' | 99 |
| '3' | 51 | 'D' | 68 | 'd' | 100 |
| '4' | 52 | 'E' | 69 | 'e' | 101 |
| '5' | 53 | 'F' | 70 | 'f' | 102 |
| '6' | 54 | 'G' | 71 | 'g' | 103 |
| '7' | 55 | 'H' | 72 | 'h' | 104 |
| '8' | 56 | 'I' | 73 | 'i' | 105 |
| '9' | 57 | 'J' | 74 | 'j' | 106 |
| ' ' (space) | 32 | 'K' | 75 | 'k' | 107 |
| '!' | 33 | 'L' | 76 | 'l' | 108 |
| '?' | 63 | 'M' | 77 | 'm' | 109 |
| '@' | 64 | 'N' | 78 | 'n' | 110 |
| 'Z' | 90 | 'O' | 79 | 'o' | 111 |
| 'z' | 122 | 'P' | 80 | 'p' | 112 |
| | | 'Q' | 81 | 'q' | 113 |
| | | 'R' | 82 | 'r' | 114 |
| | | 'S' | 83 | 's' | 115 |
| | | 'T' | 84 | 't' | 116 |
| | | 'U' | 85 | 'u' | 117 |
| | | 'V' | 86 | 'v' | 118 |
| | | 'W' | 87 | 'w' | 119 |
| | | 'X' | 88 | 'x' | 120 |
| | | 'Y' | 89 | 'y' | 121 |
| | | 'Z' | 90 | 'z' | 122 |

---

## Best Practices

### ✅ Recommended Practices

1. **Use `charCodeAt()` for character classification**
2. **Check for NaN when dealing with user input**
3. **Use code ranges for efficient character type checking**
4. **Consider `codePointAt()` for full Unicode support**

### ❌ Common Pitfalls to Avoid

1. **Don't assume index exists without checking string length**
2. **Don't confuse with `charAt()` which returns characters**
3. **Be careful with Unicode characters outside BMP**
4. **Don't forget that invalid indices return NaN**

---

## Browser Compatibility

The `charCodeAt()` method is universally supported across all browsers and JavaScript environments:

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

1. **Numeric Character Access**: `charCodeAt()` provides Unicode numeric values
2. **Range-Based Operations**: Perfect for character classification
3. **Performance**: Faster than string-based character operations
4. **Error Handling**: Returns NaN for invalid indices
5. **Unicode Awareness**: Handles UTF-16 code units

### When to Use `charCodeAt()`

- **Character validation and classification**
- **String analysis and statistics**
- **Performance-critical character operations**
- **Custom string manipulation algorithms**

### When to Use Alternatives

- **Need actual characters**: Use `charAt()`
- **Full Unicode support**: Use `codePointAt()`
- **Simple character access**: Use bracket notation `[]`

The `charCodeAt()` method is essential for low-level string processing, character analysis, and performance-critical applications where numeric character codes are more useful than string representations.
