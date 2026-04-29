/*
Factorial
Given a positive integer, n. Find the factorial of n.

Examples :

Input: n = 5
Output: 120
Explanation: 1 x 2 x 3 x 4 x 5 = 120
Input: n = 4
Output: 24
Explanation: 1 x 2 x 3 x 4 = 24
Constraints:
0 ≤ n ≤ 12

Expected Complexities
Time Complexity: O(n)
Auxiliary Space: O(1)
 */

// Method 1: Recursive Factorial
function factorialMethod1(n) {
    return n <= 1 ? 1 : n * factorialMethod1(n - 1);
}


for (let i = 0; i <= 12; i++) {
    let result = factorialMethod1(i);
    console.log(i + "! = " + result);
}

// Method 2: Iterative Factorial
function factorialMethod2(n) {
    let result = 1;
    for (let i = 2; i <= n; i++) {
        result *= i;
    }
    return result;
}

for (let i = 0; i <= 12; i++) {
    let result = factorialMethod2(i);
    console.log(i + "! = " + result);
}
