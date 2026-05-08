/*
Decimal number to binary number

Given a decimal number n (positive) in string format, compute its binary string equivalent and return it.
Note: Don't add a new line at the end.

Examples:

Input: n = 7
Output: 111
Input: n = 33
Output: 100001
Expected Complexities
Time Complexity: O(log n)
Auxiliary Space: O(1)
 */

class Solution {
    toBinary(n) {
        let binary = '';
        let num = parseInt(n, 10);
        while (num > 0) {
            binary = (num % 2) + binary;
            num = Math.floor(num / 2);
        }
        return binary;
    }
}

let solution = new Solution();
console.log(solution.toBinary('7'));
console.log(solution.toBinary('33'));
