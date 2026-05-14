// Array of numbers
const numbers = [1, 2, 3, 4, 5];

// Calculate square of numbers
function square(num) {
    return num ** 2;
}

console.log(numbers.map(square));

// Use map directly to calculate square of numbers
console.log(numbers.map(num => num ** 2));