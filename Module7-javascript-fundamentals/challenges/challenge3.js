/*
Print Square Wall
Given an integer s, write a program to print a square wall of size s without using string multiplication. Use nested loops instead. The * character will make up the wall.

Before submitting code, verify it by running offline. Does your square visually looks like a square?

Example 1:

Input:
s = 5
Output:

Explanation:
Its perfect square wall.
Your Task:
The input s is provided as a parameter to the function squareWall. Complete the give code. You do need to provide the new line at the end.


Constraints:
1 ≤ s ≤ 10
 */

class Solution1 {
    squareWall(num) {
        for (let i = 0; i < num; i++) {
            let row = "";

            for (let j = 0; j < num; j++) {
                row += "*";
            }

            console.log(row);
        }
    }
}

let solution = new Solution1();
solution.squareWall(5);
console.log("\n======================");

class Solution2 {
    squareWall(num) {
        for (let i = 0; i < num; i++) {
            for (let j = 0; j < num; j++) {
                process.stdout.write("*");
            }
            console.log(); // new line
        }
    }
}

console.log("\n======================");
solution = new Solution2();
solution.squareWall(5);


