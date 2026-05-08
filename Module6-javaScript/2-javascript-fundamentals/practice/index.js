
// nullish coalescing operator
console.log("" ?? "default"); // empty string
console.log("" || "default"); // default
console.log(1 || 2); // 1
console.log(1 ?? 2); // 1

// repeating patterns
let pattern = " *";
for (let i = 0; i < 5; i++) {
    console.log(pattern.repeat(i));
}
// Reverse pattern
for (let i = 5; i > 0; i--) {
    console.log(pattern.repeat(i));
}

// List of even numbers from 1 to 100
let evenNumbers = [];
for (let i = 0; i <= 15; i ++) {
    if (i % 2 === 0) {
        evenNumbers.push(i);
    }
}
console.log(evenNumbers);

// Find vowels in a string
let vowels = "aeiou";
let word = "applewerguhijoklrty";
let vowelCount = 0;
let vowelChar = [];
let consonantChar = [];
for (let i = 0; i < word.length; i++) {
    if (vowels.includes(word[i])) {
        vowelChar.push(word[i]);
        vowelCount++;
    } else {
        consonantChar.push(word[i]);
    }

}
console.log(vowelCount);
console.log(vowelChar);
console.log(consonantChar);


let readline = require('readline-sync');
let readValue = readline.question("Enter a your name: ");



try{
    console.log(readValue.toUpperCase());
} catch (error) {
    console.log(error.message);
} finally {
    console.log("Thank you for using the program");
}
