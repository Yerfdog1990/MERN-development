const arr = [1, 2, [3, 4, [5, 6]]];
console.log(arr);

// using flat() method
const flatArr = arr.flat(2);
console.log(flatArr);

// using polyfill for flat()
Array.prototype.myFlat = function (depth = 1) {
    let tempArray = [];
    function getFlattenedArray(array, depth) {
        for (let element of array) {
            if(Array.isArray(element) && depth) {
                getFlattenedArray(element, depth -1);
            } else {
                tempArray.push(element);
            }
        }
    }
    getFlattenedArray(this, depth);
    return tempArray;
};

const myFlatArr = arr.myFlat(2);
console.log(myFlatArr);

