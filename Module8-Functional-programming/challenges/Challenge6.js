/*
Binary to Decimal

Given a string b representing a Binary Number, the problem is to find its decimal equivalent.

Examples:

Input: b = 111
Output: 7
Explanation: The decimal equivalent of the binary number 111 is 2^2 + 2^1 + 2^0 = 7.
Input: b = 1010
Output : 10
Explanation: The decimal equivalent of the binary number 1010 is 2^3 + 2^1 = 10.
Input: b = 100001
Output: 33
Explanation: The decimal equivalent of the binary number 100001 is 2^5 + 2^0 = 33.
Constraints:
1 <= number of bits in binary number  <= 16
 */

// Method 1: Forward transversal
class Solution1 {
    binaryToDecimal(b) {
        let decimal = 0;
        for (let i = 0; i < b.length; i++) {
            decimal += b[i] * Math.pow(2, b.length - 1 - i);
        }
        return decimal;
    }
}

let solution1 = new Solution1();
console.log(solution1.binaryToDecimal('111'));
console.log(solution1.binaryToDecimal('1010'));
console.log(solution1.binaryToDecimal('100001'));


// Method 2: Backward transversal
class Solution2 {
    binaryToDecimal(b) {
        let decimal = 0;
        let power = 0;

        // Start from last index and move backward
        for (let i = b.length - 1; i >= 0; i--) {
            decimal += b[i] * Math.pow(2, power);
            power++;
        }

        return decimal;
    }
}

let solution2 = new Solution2();
console.log(solution2.binaryToDecimal('111'));
console.log(solution2.binaryToDecimal('1010'));
console.log(solution2.binaryToDecimal('100001'));


