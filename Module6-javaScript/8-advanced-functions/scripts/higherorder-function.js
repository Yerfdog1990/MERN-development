// Array of numbers
const numbers = [1, 2, 3, 4, 5];

// Square of numbers
function square(num) {
    return num ** 2;
}

// Cube of numbers
function cube(num) {
    return num ** 3;
}


function calculatePowers(arr, wrapper){
    const result = [];
    for (let i = 0; i < arr.length; i++) {
        result.push(wrapper(arr[i]));
    }
    return result;
}

let findSquare = calculatePowers(numbers, square);
console.log(findSquare);
let findCube = calculatePowers(numbers, cube);
console.log(findCube);
