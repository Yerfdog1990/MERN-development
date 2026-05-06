/*
Slice The String

Given a string s, you need to slice it so that the output is a substring that contains all the characters except first and last. The length of the s will be greater than 2.

Examples:

Input: s = "Hello"
Output: ell
Explanation: The first and last character are ignored.
Input: s = "World"
Output: orl
Explanation: The first and last characters are ignored.
Constraints:
1 <= |s| <= 104
 */

/**
 * @param {string} s
 * @returns {string}
 */

function sliceString(s) {
    return s.slice(1, -1);
}

let s = "Hello";
console.log(sliceString(s));
