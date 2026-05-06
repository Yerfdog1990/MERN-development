/*
GetLine 1

There are many times when we need to take input of a string that contains multiple words.
Here, we will learn how to take input of a string that comprises of multiple words. Your task is to take input of string with multiple words.

Examples :

Input: s = hello world
Output: hello world
Input: s = Welcome to GeeksForGeeks
Output: Welcome to GeeksForGeeks
 */

// User function Template for javascript

const readline = require("readline-sync");

class Solution {
    getLine() {
        return readline.question();
    }
}

let obj = new Solution();
console.log(obj.getLine());
