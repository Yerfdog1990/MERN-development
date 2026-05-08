/*
First Digit of a Number

Given a number n, find the first digit of the number.

Examples:

Input: n = 123
Output: 1
Input: n = 976
Output: 9
Constraints:
1 <= n <= 109
 */

function firstDigit(n) {
    while (n >= 10) {
        n = Math.floor(n / 10);
    }
    return n;
}
console.log(firstDigit(123));