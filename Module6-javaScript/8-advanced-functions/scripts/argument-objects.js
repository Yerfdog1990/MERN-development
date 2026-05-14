// List integers
function numberList(){
    console.log(arguments); // [Arguments] { '0': 10, '1': 20, '2': 30, '3': 40, '4': 50, '5': 60 }
}

numberList(10, 20, 30, 40, 50, 60);

function printSum(){
    let sum = 0;
    for (let value in arguments) {
       sum += value;
    }
    console.log(sum);
}

printSum(10, 20, 30, 40, 50, 60);

// convert argument object to arrays
function convertToArray(){
    const numbers = [...arguments];
    console.log(numbers);
}

convertToArray(10, 20, 30, 40, 50, 60);

// Default parameter value
function defaultValue(a = 10){
    console.log(a); // 20
    arguments[0] = 5;
    console.log(a);// 20
}

defaultValue(20);

// Default parameters
function noDefaultValue(a){
    console.log(a); // 20
    arguments[0] = 5;
    console.log(a);// 20
}

noDefaultValue(20);

// ============================================
// KEY FEATURES OF THE ARGUMENTS OBJECT
// ============================================

// 1. ARRAY-LIKE, NOT AN ARRAY
// It has a .length property and indexed elements, but lacks built-in array methods
function arrayLikeDemo() {
    console.log("=== Array-Like, Not an Array ===");
    console.log("arguments.length:", arguments.length); // Has length property
    console.log("arguments[0]:", arguments[0]); // Has indexed elements
    
    // These will fail because arguments is not a true array
    try {
        arguments.map(x => x * 2); // TypeError: arguments.map is not a function
    } catch (e) {
        console.log("Error with .map():", e.message);
    }
    
    try {
        arguments.push(100); // TypeError: arguments.push is not a function
    } catch (e) {
        console.log("Error with .push():", e.message);
    }
}

arrayLikeDemo(1, 2, 3);

// 2. ACCESSING ALL ARGUMENTS
// Captures every value passed, regardless of defined parameters
function accessAllArgs(a, b) {
    console.log("\n=== Accessing All Arguments ===");
    console.log("Parameter a:", a);
    console.log("Parameter b:", b);
    console.log("Total arguments passed:", arguments.length);
    console.log("All arguments:", Array.from(arguments));
}

accessAllArgs(1, 2, 3, 4, 5); // Only 2 parameters defined, but 5 arguments passed

// 3. INDEX MAPPING (NON-STRICT MODE)
// In non-strict mode, named arguments are "synced" with arguments object
function indexMappingNonStrict(a, b) {
    console.log("\n=== Index Mapping (Non-Strict Mode) ===");
    console.log("Initial a:", a, "Initial arguments[0]:", arguments[0]);
    
    // Changing arguments[0] changes the named parameter
    arguments[0] = 999;
    console.log("After changing arguments[0]:");
    console.log("a:", a, "arguments[0]:", arguments[0]);
    
    // Changing named parameter changes arguments[0]
    a = 777;
    console.log("After changing a:");
    console.log("a:", a, "arguments[0]:", arguments[0]);
}

indexMappingNonStrict(10, 20);

// 4. STRICT MODE BEHAVIOR
// In strict mode, arguments object acts as a copy - no syncing
function strictModeDemo(a, b) {
    "use strict";
    console.log("\n=== Strict Mode Behavior ===");
    console.log("Initial a:", a, "Initial arguments[0]:", arguments[0]);
    
    // Changing arguments[0] does NOT affect the named parameter
    arguments[0] = 999;
    console.log("After changing arguments[0]:");
    console.log("a:", a, "arguments[0]:", arguments[0]);
    
    // Changing named parameter does NOT affect arguments[0]
    a = 777;
    console.log("After changing a:");
    console.log("a:", a, "arguments[0]:", arguments[0]);
}

strictModeDemo(10, 20);

// 5. NO ARROW FUNCTION ACCESS
// The arguments object is NOT available within arrow functions
function regularFunction() {
    console.log("\n=== No Arrow Function Access ===");
    console.log("In regular function, arguments:", arguments);
    
    const arrowFunc = () => {
        // This will reference the outer function's arguments, not the arrow function's
        console.log("In arrow function, arguments:", arguments);
    };
    
    arrowFunc();
}

regularFunction(1, 2, 3);

// 6. ITERABILITY
// Arguments object is iterable, allowing use in for...of loops
function iterableDemo() {
    console.log("\n=== Iterability ===");
    console.log("Using for...of loop:");
    
    for (const arg of arguments) {
        console.log("Argument:", arg);
    }
}

iterableDemo('apple', 'banana', 'cherry');

// 7. CONVERSION TO ARRAY
// Multiple ways to convert arguments to a true array
function conversionToArrayDemo() {
    console.log("\n=== Conversion to Array ===");
    
    // Method 1: Array.from()
    const arr1 = Array.from(arguments);
    console.log("Array.from():", arr1);
    console.log("Can use .map():", arr1.map(x => x * 2));
    
    // Method 2: Spread operator [...arguments]
    const arr2 = [...arguments];
    console.log("[...arguments]:", arr2);
    console.log("Can use .filter():", arr2.filter(x => x > 2));
    
    // Method 3: Array.prototype.slice.call()
    const arr3 = Array.prototype.slice.call(arguments);
    console.log("Array.prototype.slice.call():", arr3);
    console.log("Can use .reduce():", arr3.reduce((sum, x) => sum + x, 0));
}

conversionToArrayDemo(1, 2, 3, 4, 5);

// 8. LOCAL SCOPE
// Arguments object is only available inside the function where it was created
function outerFunction() {
    console.log("\n=== Local Scope ===");
    console.log("Inside outerFunction, arguments:", arguments);
    
    function innerFunction() {
        // This has its OWN arguments object, not the outer one
        console.log("Inside innerFunction, arguments:", arguments);
    }
    
    innerFunction('inner', 'args');
    
    // arguments is not accessible outside any function
    // console.log(arguments); // ReferenceError if called at global scope
}

outerFunction('outer', 'args');

// Additional: Using arguments for variable-length function parameters
function sumAll() {
    let total = 0;
    for (let i = 0; i < arguments.length; i++) {
        total += arguments[i];
    }
    return total;
}

console.log("\n=== Practical Example: Sum All Arguments ===");
console.log("sumAll(1, 2, 3, 4, 5):", sumAll(1, 2, 3, 4, 5));
console.log("sumAll(10, 20):", sumAll(10, 20));