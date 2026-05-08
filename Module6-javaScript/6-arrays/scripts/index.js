let arr = ["One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine", "Ten"];

for(let index in arr){
    if(index % 2 === 0){
        console.log(arr[index]);
    }

}

// pop
arr.pop();
console.log("After removing last element: ", arr);

// slice
let arr2 = arr.slice(2, 5);
console.log("After slicing: ", arr2);
console.log("Original array after slicing: ", arr);

// splice
arr.splice(2, 5);
console.log("After splicing: ", arr);
console.log("Original array after splicing: ", arr);

// push
arr.push("Eleven");
console.log("After adding element: ", arr);

// shift
arr.shift();
console.log("After shifting one element: ", arr);

// unshift
arr.unshift("One");
console.log("After unshifting one element: ", arr);

// sort
arr.sort();
console.log("After sorting array: ", arr);

// reverse
arr.reverse();
console.log(arr);

// indexof
console.log(arr.indexOf("Five"));

// includes
console.log(arr.includes("Five"));

// join
console.log(arr.join(", "));

