const obj = {
    name: 'Prakash',
    city: 'Delhi'
}

function getDetails(country) {
    console.log(`Hi, my name is ${this.name} and I live in ${this.city}, ${country}`);
}

getDetails.bind(obj, 'India')();

// Polyfill for bind
Function.prototype.myBind = function (context, ...args) {
    context.wrapperFunction = this;
    return function(... rest) {
        context.wrapperFunction(...args, ...rest);
        delete context.wrapperFunction;
    }
};

const myBind = getDetails.myBind(obj);
myBind('India');