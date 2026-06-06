// Polyfill for Map
const arr = [1, 2, 3, 4, 5];
console.log(typeof arr) // Object

const squaredArr = arr.map((number)=>number ** 2);
console.log(squaredArr);

function getSquaredNum(number){
    return number ** 2;
}

let tempArr = [];
for (let i = 0; i < arr.length; i++) {
    tempArr.push(getSquaredNum(arr[i]));
}
console.log(tempArr);

Array.prototype.myMap = function (callback) {
    let tempArr = [];
    for (let i = 0; i < this.length; i++) {
        tempArr.push(callback.call(this, this[i], i, this));
    }
    return tempArr;
}

const mySquaredArr = arr.myMap(getSquaredNum);
console.log(mySquaredArr);
