/*
Challenge
A program that reads 3 strings and print the smallest string
 */
const readline = require('readline-sync');
const fistString = readline.question("Enter the first string: ");
const secondString = readline.question("Enter the second string: ");
const thirdString = readline.question("Enter the third string: ");
console.log(Array(fistString, secondString, thirdString));

if (fistString.length < secondString.length && fistString.length < thirdString.length) {
    console.log("Smallest string: ", fistString);
} else if (secondString.length < fistString.length && secondString.length < thirdString.length) {
    console.log("Smallest string: ", secondString);
} else if (thirdString.length < fistString.length && thirdString.length < secondString.length) {
    console.log("Smallest string: ", thirdString);
}
