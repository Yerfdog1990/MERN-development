const arr = [1, 2, 3, 4, 5];

function getSum(acc, initialVal){
    return acc + initialVal;
}

const sum = arr.reduce(getSum, 0);
console.log(sum);

// Polyfill for Reduce
Array.prototype.myReduce = function (callback, initialValue) {
    let acc = initialValue ? initialValue : this[0];
    for (let i = initialValue ? 0 : 1; i < this.length; i++) {
        acc = callback.call(this,acc, this[i], i, this);
    }
    return acc;
}

const mySum = arr.myReduce(getSum, 0);
console.log(mySum);

