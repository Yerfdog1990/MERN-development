// Works in browsers, Web Workers, and Node.js
const canFetch = typeof globalThis.fetch === 'function';
console.log(canFetch); // true (in modern browsers)

// Get the global object
const globalObject = globalThis;

// globalThis is the standard way to access the global object in JavaScript.
console.log(globalObject);

