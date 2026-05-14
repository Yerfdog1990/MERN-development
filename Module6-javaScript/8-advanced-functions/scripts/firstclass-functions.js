// 1. Assign a function to a variable
const greeting1 = function() {
    let name = 'John';
    console.log(`${name} Hello from greeting1`);
};

greeting1();

// 2. Passing a function as an argument
function wrapper1() {
    return `Hello from greeting2`;
}

function greeting2(name, message) {
    console.log(name, message);
}

greeting2('John', wrapper1());


// 3. Returning a function from another function

function greeting3() {
    function wrapper2() {
        let name = 'John';
        console.log(`${name} Hello from greeting3`);
    }
    return wrapper2;  // Return the function itself, not the result of calling it
}

const output = greeting3();  // output is now the function wrapper2
output();  // Call the returned function
// greeting3()();  // Call greeting3, get the function back, and immediately call it

// 4. Storing functions in objects or arrays

// Storing in an object
const functionObject = {
    greet: function() {
        console.log('Hello from object');
    },
    farewell: function() {
        console.log('Goodbye from object');
    }
};

functionObject.greet();
functionObject.farewell();

// Storing in an array
const functionArray = [
    function() {
        console.log('Function 1 from array');
    },
    function() {
        console.log('Function 2 from array');
    },
    function() {
        console.log('Function 3 from array');
    }
];

functionArray[0]();
functionArray[1]();
functionArray[2]();



