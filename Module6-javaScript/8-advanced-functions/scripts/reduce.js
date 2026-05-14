// Array of numbers
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function sum1(arr){
    let sum = 0;
    for (let num of arr) {
        sum += num;
    }
    return sum;
}

console.log(sum1(numbers));

// Use reduce directly to calculate sum of numbers
console.log(numbers.reduce((acc, num) => acc + num, 0));

