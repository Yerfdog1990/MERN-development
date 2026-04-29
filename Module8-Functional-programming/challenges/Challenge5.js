/*
Print Alphabets

Given two characters, c1 and c2, print all the alphabets starting from c1 to c2, separated by a space, in a single line. Do not print a newline yourself, as it will be handled by the driver code.

Example 1:

Input:
c1 = 'a'
c2 = 'z'
Output:
a b c d e f g h i j k l m n o p q r s t u v w x y z
Explanation:  Printed alphabets from a to z.
Example 2:

Input:
c1 = "h"
c2 = "u"
Output:
h i j k l m n o p q r s t u
Explanation: Printed alphabets from h to u.
Your Task:
The input characters c1 and c2 are provided as a parameter to the function alphabets.
You need to print the alphabets in a single line, separated by space.
The new line is provided by the driver code, so don't provide an extra new line.
 */

class Solution {

    alphabets(c1, c2) {
        const chars = [];
        for (let i = c1.charCodeAt(0); i <= c2.charCodeAt(0); i++) {
            chars.push(String.fromCharCode(i));
        }
        return chars.join(' ');
    }
}

let solution = new Solution();
console.log(solution.alphabets('a', 'j'));
