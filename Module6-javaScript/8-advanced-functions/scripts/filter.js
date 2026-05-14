// Array of numbers
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function isEven(arr) {
    let tempArray = [];
    for (let element of arr) {
        if(element % 2 === 0){
            tempArray.push(element)
        }
    }
    return tempArray;
}

console.log(isEven(numbers));

// Use filter directly to filter even numbers
console.log(numbers.filter(num => num % 2 === 0));
