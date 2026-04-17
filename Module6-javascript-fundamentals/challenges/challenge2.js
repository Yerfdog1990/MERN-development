// 1. What will be the result of the ORed operation
console.log("OR operation returns the first truthy value");
console. log(3 || 2 || 1); // 3
console.log("" || "e" || 2); // e
console.log("" || "e" || undefined); // e
console.log("" || null || 2); // 2
console.log("" || "null" || 2); // 2

// 2. What will be the output of the ANded operation
console.log("AND operation returns the last falsy value");
console.log(3 && 2 && 1); // 1
console.log("" && 0 && 2); // empty string
console.log("undefined" && "null" && ""); // undefined
console.log("undefined" && null && ""); // null
console.log(undefined && "null" && ""); // undefined