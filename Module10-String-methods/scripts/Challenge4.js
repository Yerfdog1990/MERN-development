/*
Reverse String

Given a string s, you need to reverse it.

Examples

Input:s = "Hello"
Output:olleH
Explanation: Reverse of Hello is olleH
Input:s = "World"
Output:dlroW
Explanation: Reverse of World is dlroW
Your Task:
The input s is provided as a parameter to the function reverseString(). You need to reverse it and return it so it can be printed by the driver code.
 */


// User function Template for javascript

/**
 * @param {string} s
 * @returns {string}
 */

class Solution {
    reverseString(s) {
        return s.split('').reverse().join('');
    }
}

let s = "Hello";
let obj = new Solution();
console.log(obj.reverseString(s));
