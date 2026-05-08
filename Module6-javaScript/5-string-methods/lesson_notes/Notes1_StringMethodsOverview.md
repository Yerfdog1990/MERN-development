# JavaScript String Methods

**Last Updated:** 14 Aug, 2025

JavaScript provides a variety of built-in methods to work with strings — allowing you to extract, modify, search, and format text with ease. Below are some of the most commonly used core string methods:

---

## String Extraction Methods

### `slice()`
Extracts a part of the string based on the given starting-index and ending-index and returns a new string.

```javascript
// Define a string variable 
let A = 'Geeks for Geeks';

// Use the slice() method to extract a substring
let b = A.slice(0, 5);    // "Geeks"
let c = A.slice(6, 9);    // "for"
let d = A.slice(10);      // "Geeks"

// Output the value of variable
console.log(b);  // Geeks
console.log(c);  // for
console.log(d);  // Geeks
```

**Output:**
```
Geeks
for
Geeks
```

### `substring()`
Returns the part of the given string from the start index to the end index. Indexing starts from zero (0).

```javascript
// Define a string variable
let str = "Mind, Power, Soul";

// Use the substring() method to extract a substring 
let part = str.substring(6, 11);

// Output the value of variable
console.log(part);  // Power
```

**Output:**
```
Power
```

### `substr()`
Returns the specified number of characters from the specified index from the given string. It extracts a part of the original string.

```javascript
// Define a string variable 'str'
let str = "Mind, Power, Soul";

// Use the substr() method to extract a substring
let part = str.substr(6, 5);

// Output the value of variable
console.log(part);  // Power
```

**Output:**
```
Power
```

---

## String Replacement Methods

### `replace()`
Replaces a part of the given string with another string or a regular expression. The original string will remain unchanged.

```javascript
// Define a string variable 'str' 
let str = "Mind, Power, Soul";

// Use the replace() method to replace the substring
let part = str.replace("Power", "Space");

// Output the resulting string after replacement
console.log(part);  // Mind, Space, Soul
```

**Output:**
```
Mind, Space, Soul
```

### `replaceAll()`
Returns a new string after replacing all the matches of a string with a specified string or a regular expression. The original string is left unchanged after this operation.

```javascript
// Define a string variable 'str'
let str = "Mind, Power, Power, Soul";

// Use the replaceAll() method to replace all occurrences
// of "Power" with "Space" in the string 'str'
let part = str.replaceAll("Power", "Space");

// Output the resulting string after replacement
console.log(part);  // Mind, Space, Space, Soul
```

**Output:**
```
Mind, Space, Space, Soul
```

---

## Case Conversion Methods

### `toUpperCase()`
Converts all the characters present in the String to upper case and returns a new String with all characters in upper case.

```javascript
// Define a string variable
let gfg = 'GFG ';
// Define another string variable 
let geeks = 'stands-for-GeeksforGeeks';

// Convert the string 'geeks' to uppercase using the toUpperCase() method
console.log(geeks.toUpperCase());  // STANDS-FOR-GEEKSFORGEEKS
```

**Output:**
```
STANDS-FOR-GEEKSFORGEEKS
```

### `toLowerCase()`
Converts all the characters present in the string to lowercase and returns a new string with all the characters in lowercase.

```javascript
// Define a string variable
let gfg = 'GFG ';
// Define a string variable 
let geeks = 'stands-for-GeeksforGeeks';

// Convert the string 'geeks' to lowercase using the toLowerCase() method
console.log(geeks.toLowerCase());  // stands-for-geeksforgeeks
```

**Output:**
```
stands-for-geeksforgeeks
```

---

## String Combination Methods

### `concat()`
Combines the text of two strings and returns a new combined or joined string.

```javascript
let gfg = 'GFG ';
let geeks = 'stands for GeeksforGeeks';

// Accessing concat method on an object
// of String passing another object 
// as a parameter
console.log(gfg.concat(geeks));  // GFG stands for GeeksforGeeks
```

**Output:**
```
GFG stands for GeeksforGeeks
```

---

## Whitespace Management Methods

### `trim()`
Used to remove white spaces from the given string. This method returns a new string with removed white spaces.

```javascript
let gfg = 'GFG    ';
let geeks = 'stands-for-GeeksforGeeks';

// Storing new object of string
// with removed white spaces
let newGfg = gfg.trim();

// Old length
console.log(gfg.length);    // 7
// New length
console.log(newGfg.length); // 3
```

**Output:**
```
7
3
```

### `trimStart()`
Removes whitespace from the beginning of a string. The value of the string is not modified in any manner.

```javascript
// Define a string variable 
let str = "  Soul";

// Output the original value of the string 
console.log(str);  // "  Soul"

// Use the trimStart() method to remove leading whitespace from the string 'str'
let part = str.trimStart();

// Output the resulting string after removing leading whitespace
console.log(part);  // "Soul"
```

**Output:**
```
  Soul
Soul
```

### `trimEnd()`
Removes white space from the end of a string. The value of the string is not modified in any manner.

```javascript
// Define a string variable 
let str = "Soul  ";

// Output the original value of the string 'str'
console.log(str);  // "Soul  "

// Use the trimEnd() method to remove trailing whitespace from the string 'str'
let part = str.trimEnd();

// Output the resulting string after removing trailing whitespace
console.log(part);  // "Soul"
```

**Output:**
```
Soul  
Soul
```

---

## String Padding Methods

### `padStart()`
Pads a string with another string until it reaches the given length. The padding is applied from the left end of the string.

```javascript
// Define a string variable 
let stone = "Soul";

// Use the padStart() method to add padding characters "Mind "
// to the beginning of the string 'stone' 
stone = stone.padStart(9, "Mind ");

// Output the resulting string after padding
console.log(stone);  // "Mind Soul"
```

**Output:**
```
Mind Soul
```

### `padEnd()`
Pads a string with another string until it reaches the given length. The padding is applied from the right end of the string.

```javascript
// Define a string variable 
let stone = "Soul";

// Use the padEnd() method to add padding characters
// " Power" to the end of the string 'stone' 
stone = stone.padEnd(10, " Power");

// Output the resulting string after padding
console.log(stone);  // "Soul Power"
```

**Output:**
```
Soul Power
```

---

## Character Access Methods

### `charAt()`
Returns the character at the specified index. String in JavaScript has zero-based indexing.

```javascript
let gfg = 'GeeksforGeeks';
let geeks = 'GfG is the best platform to learn and\n' +
'experience Computer Science.';

// Print the string as it is
console.log(gfg); 
console.log(geeks); 

// As string index starts from zero
// It will return first character of string
console.log(gfg.charAt(0));  // "G"
console.log(geeks.charAt(5)); // "s"
```

**Output:**
```
GeeksforGeeks
GfG is the best platform to learn and
experience Computer Science.
G
s
```

### `charCodeAt()`
Returns a number that represents the Unicode value of the character at the specified index.

```javascript
let gfg = 'GeeksforGeeks';
let geeks = 'GfG is the best platform\n\
to learn and experience\n\
Computer Science.';

// Return a number indicating Unicode
// value of character at index 0 ('G')
console.log(gfg.charCodeAt(0));   // 71
console.log(geeks.charCodeAt(5));  // 115
```

**Output:**
```
71
115
```

---

## String Splitting Methods

### `split()`
Splits the string into an array of sub-strings. This method returns an array.

```javascript
let gfg = 'GFG '
let geeks = 'stands-for-GeeksforGeeks'

// Split string on '-'. 
console.log(geeks.split('-'))  // [ 'stands', 'for', 'GeeksforGeeks' ]
```

**Output:**
```
[ 'stands', 'for', 'GeeksforGeeks' ]
```

---

## Complete JavaScript String Methods Reference

### Instance Methods

| Method | Description |
|--------|-------------|
| `at()` | Find the character at the specified index |
| `anchor()` | Creates an anchor element that is used as a hypertext target |
| `charAt()` | Returns the character at the given index of the string |
| `charCodeAt()` | Returns a Unicode character set code unit of the character present at the index in the string |
| `codePointAt()` | Return a non-negative integer value i.e, the code point value of the specified element |
| `concat()` | Join two or more strings together in JavaScript |
| `endsWith()` | Whether the given string ends with the characters of the specified string or not |
| `includes()` | Returns true if the string contains the characters, otherwise, it returns false |
| `indexOf()` | Finds the index of the first occurrence of the argument string in the given string |
| `lastIndexOf()` | Finds the index of the last occurrence of the argument string in the given string |
| `localeCompare()` | Compare any two elements and returns a positive number |
| `match()` | Search a string for a match against any regular expression |
| `matchAll()` | Return all the iterators matching the reference string against a regular expression |
| `normalize()` | Return a Unicode normalization form of a given input string |
| `padEnd()` | Pad a string with another string until it reaches the given length from right end |
| `padStart()` | Pad a string with another string until it reaches the given length from left end |
| `repeat()` | Build a new string containing a specified number of copies of the string |
| `replace()` | Replace a part of the given string with some another string or a regular expression |
| `replaceAll()` | Returns a new string after replacing all the matches of a string with a specified string/regex |
| `search()` | Search for a match in between regular expressions and a given string object |
| `slice()` | Return a part or slice of the given input string |
| `split()` | Separate given string into substrings using a specified separator provided in the argument |
| `startsWith()` | Check whether the given string starts with the characters of the specified string or not |
| `substr()` | Returns the specified number of characters from the specified index from the given string |
| `substring()` | Return the part of the given string from the start index to the end index |
| `toLowerCase()` | Converts the entire string to lowercase |
| `toLocaleLowerCase()` | Returns the calling string value converted to a lowercase letter |
| `toLocaleUpperCase()` | Returns the calling string value converted to a uppercase letter |
| `toUpperCase()` | Converts the entire string to uppercase |
| `toString()` | Return the given string itself |
| `trim()` | Remove the white spaces from both ends of the given string |
| `trimEnd()` | Remove white space from the end of a string |
| `trimStart()` | Remove white space from the start of a string |
| `valueOf()` | Return the value of the given string |
| `string[Symbol.iterator]()` | This method is used to make String iterable. [@@iterator]() returns an iterator object which iterates over all code points of the String |

### Static Methods

| Method | Description |
|--------|-------------|
| `fromCharCode(n1, n2, ..., nX)` | This method is used to create a string from the given sequence of UTF-16 code units. This method returns a string, not a string object |
| `fromCodePoint(a1, a2, a3, ....)` | This method in JavaScript that is used to return a string or an element for the given sequence of code point values (ASCII value) |
| `isWellFormed()` | This method is used to check if the string contains a lone surrogate or not |
| `String.raw(str, ...sub)` | This is a static method that is used to get the raw string form of template literals. These strings do not process escape characters |
| `toWellFormed()` | This method is used to return where all lone surrogates of this string are replaced with the Unicode replacement character |

---

## Key Takeaways

- **Immutability**: Most string methods return a new string without modifying the original
- **Zero-based Indexing**: String positions start from 0, not 1
- **Unicode Support**: JavaScript strings are Unicode-aware
- **Method Chaining**: Many methods can be chained together for complex operations
- **Performance Considerations**: Some methods like `slice()` are generally more performant than `substring()`

These string methods provide powerful tools for text manipulation in JavaScript applications.