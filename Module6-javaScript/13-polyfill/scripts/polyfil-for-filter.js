// Polyfill for Filter

const arr = [1, 2, 3, 4, 5];

function getNumGreaterThan2(number){
    return number > 2; // Returns a boolean value; true or false
}
console.log(getNumGreaterThan2(3));

const filteredArr = arr.filter((number)=>number > 2);
console.log(filteredArr);

let tempArr = [];
for(let i = 0; i < arr.length; i++){
    if(arr[i] > 2){
        tempArr.push(arr[i]);
    }
}
console.log(tempArr);

// Polyfill for Filter
Array.prototype.myFilter = function (callback) {
    let tempArray = [];
    for (let i = 0; i < this.length; i++) {
        if(callback.call(this, this[i], i, this)){
            tempArray.push(this[i]);
        }
    }
    return tempArray;
}

const myFilteredArr = arr.myFilter(getNumGreaterThan2);
console.log(myFilteredArr);
