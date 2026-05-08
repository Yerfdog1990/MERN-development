
// Method 1: Iterate over a string
console.log("\n=== Method 1: Iterate over a string ===");
const text = "JavaScript";
console.log("Iterating over string:", text);
for (let i = 0; i < text.length; i++) {
    console.log(`Character at index ${i}: ${text[i]}`);
}

// Method 2: charAt() and charCodeAt()
console.log("\n=== Method 2: charAt() and charCodeAt() ===");
const sample = "Hello";
console.log("String:", sample);
console.log("charAt(0):", sample.charAt(0)); // H
console.log("charAt(1):", sample.charAt(1)); // e
console.log("charCodeAt(0):", sample.charCodeAt(0)); // 72 (ASCII for H)
console.log("charCodeAt(1):", sample.charCodeAt(1)); // 101 (ASCII for e)

// Method 3: indexOf() and lastIndexOf()
console.log("\n=== Method 3: indexOf() and lastIndexOf() ===");
const sentence = "The quick brown fox jumps over the lazy dog";
console.log("String:", sentence);
console.log("indexOf('the'):", sentence.indexOf('the')); // 31 (first occurrence)
console.log("lastIndexOf('the'):", sentence.lastIndexOf('the')); // 0 (last occurrence)
console.log("indexOf('fox'):", sentence.indexOf('fox')); // 16
console.log("indexOf('cat'):", sentence.indexOf('cat')); // -1 (not found)

// Method 4: includes()
console.log("\n=== Method 4: includes() ===");
const message = "JavaScript is awesome!";
console.log("String:", message);
console.log("includes('JavaScript'):", message.includes('JavaScript')); // true
console.log("includes('awesome'):", message.includes('awesome')); // true
console.log("includes('boring'):", message.includes('boring')); // false

// Vowel checking example using includes()
console.log("\n=== Vowel Checking Example ===");
let str = "Hello, World!";

const vowel = "aeiou";

for (let i = 0; i < str.length; i++) {
    if (vowel.includes(str[i])) {
        console.log(str[i]+ " is a vowel");
    } else {
        console.log(str[i]+ " is not a vowel");
    }
}

// Method 5: toUpperCase() and toLowerCase()
console.log("\n=== Method 5: toUpperCase() and toLowerCase() ===");
const mixedCase = "Hello World";
console.log("Original:", mixedCase);
console.log("toUpperCase():", mixedCase.toUpperCase()); // HELLO WORLD
console.log("toLowerCase():", mixedCase.toLowerCase()); // hello world

// Method 6: split()
console.log("\n=== Method 6: split() ===");
const csv = "apple,banana,orange,grape";
console.log("Original string:", csv);
console.log("Split by comma:", csv.split(',')); // ['apple', 'banana', 'orange', 'grape']
console.log("Split by space:", csv.split(' ')); // ['apple,banana,orange,grape']
console.log("Split into characters:", csv.split('')); // array of each character

// Method 7: substring()
console.log("\n=== Method 7: substring() ===");
const longText = "JavaScript Programming";
console.log("Original:", longText);
console.log("substring(0, 10):", longText.substring(0, 10)); // JavaScript
console.log("substring(4):", longText.substring(4)); // Script Programming
console.log("substring(-5):", longText.substring(-5)); // JavaScript Programming (negative treated as 0)

// Method 8: replace()
console.log("\n=== Method 8: replace() ===");
const originalText = "I love cats. cats are great!";
console.log("Original:", originalText);
console.log("replace('cats', 'dogs'):", originalText.replace('cats', 'dogs')); // I love dogs. cats are great! (only first occurrence)
console.log("replace(/cats/g, 'dogs'):", originalText.replace(/cats/g, 'dogs')); // I love dogs. dogs are great! (all occurrences)

// Method 9: trim()
console.log("\n=== Method 9: trim() ===");
const paddedText = "   Hello World   ";
console.log("Original with quotes:", `"${paddedText}"`);
console.log("After trim():", `"${paddedText.trim()}"`);
console.log("Original length:", paddedText.length); // 18
console.log("Trimmed length:", paddedText.trim().length); // 11

// Method 10: concat()
console.log("\n=== Method 10: concat() ===");
const firstName = "John";
const lastName = "Doe";
console.log("First name:", firstName);
console.log("Last name:", lastName);
console.log("concat(' ', lastName):", firstName.concat(' ', lastName)); // John Doe
console.log("concat(' ', lastName, ' - Developer'):", firstName.concat(' ', lastName, ' - Developer')); // John Doe - Developer

// Method 11: Additional string methods
console.log("\n=== Method 11: Additional string methods ===");
const testString = "JavaScript Methods";
console.log("String:", testString);
console.log("startsWith('Java'):", testString.startsWith('Java')); // true
console.log("endsWith('Methods'):", testString.endsWith('Methods')); // true
console.log("repeat(3):", "Hi! ".repeat(3)); // Hi! Hi! Hi! 
console.log("padStart(20, '*'):", testString.padStart(20, '*')); // ****JavaScript Methods
console.log("padEnd(20, '*'):", testString.padEnd(20, '*')); // JavaScript Methods****
console.log("slice(0, 10):", testString.slice(0, 10)); // JavaScript

