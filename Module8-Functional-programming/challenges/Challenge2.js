/*
Prime Factorization
Given a number n find the prime factorization of the number.

Note: Print the prime factors in non-decreasing order.

Examples:

Input: n = 100
Output: 2 2 5 5
Explanation: 100 = 2 * 2 * 5 * 5
Input: n = 27
Output: 3 3 3
Explanation: 27 = 3 * 3 * 3
Constraint:
2 <= n <= 200

Expected Complexities
Time Complexity: O(log n)
Auxiliary Space: O(1)
 */
class Solution {
    printPrimeFactorization(n) {
        // Store all prime factors
        let factors = [];

        // Step 1: Handle factor 2 separately
        // Keep dividing by 2 while n is even
        while (n % 2 === 0) {
            factors.push(2);   // Add 2 to the factors list
            n = n / 2;         // Reduce n
        }

        // Step 2: Check odd numbers starting from 3
        // Only go up to square root of n
        for (let i = 3; i <= Math.sqrt(n); i += 2) {

            // Keep dividing while i is a factor of n
            while (n % i === 0) {
                factors.push(i);   // Store the factor
                n = n / i;         // Reduce n
            }
        }

        // Step 3: If n is still greater than 2,
        // then n itself is a prime number
        if (n > 2) {
            factors.push(n);
        }

        // Return factors as a formatted string
        return factors.join(" x ");
    }
}

let solution = new Solution();
console.log(solution.printPrimeFactorization(12));