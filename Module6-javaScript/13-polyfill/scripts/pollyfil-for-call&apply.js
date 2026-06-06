const obj = {
    name: 'Prakash',
    city: 'Delhi'
}

function getDetails(country) {
    console.log(`Hi, my name is ${this.name} and I live in ${this.city}, ${country}`);
}

getDetails.call(obj, 'India');
getDetails.apply(obj, ['India']);

// Polyfill for Call
Function.prototype.myCall = function (context, ...args) {
    context.getDetails = this;
    context.getDetails(...args);
    delete context.getDetails;
}

getDetails.myCall(obj, 'India');

// Polyfill of apply
Function.prototype.myApply = function (context, args) {
    context.getDetails = this;
    context.getDetails(...args);
    delete context.getDetails;
}

getDetails.myApply(obj, ['India']);

