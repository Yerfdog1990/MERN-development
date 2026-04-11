const readLineSync = require('readline-sync');
//const userName = readLineSync.question('What is your name? ');
//console.log(`Hello ${userName}!`);

const countNumberOfWords = function (input) {
    let words = input.trim().split(/\s+/);
    return words.length;
};

let str = '      Hello    world !   ';
let wordCount = countNumberOfWords(str);

console.log(`Number of words: ${wordCount}`);

// Number / Number => Division
let x = 5 / 2;
let y = 1.0 / 2.0;
console.log(x);        // 2.5
console.log(y);        // 0.5

let a = 3.0 / 0;
let b = 4.0 / 0.0;
console.log(a);        // Infinity
console.log(b);        // Infinity

let z = 2.0 / -0.0;
console.log(z);        // -Infinity