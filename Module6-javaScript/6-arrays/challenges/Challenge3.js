/*
Size of an Array

Given an array arr[], find the size of the array.

Examples :

Input: arr[] = [1, 2, 3]
Output: 3
Explanation: The size of the array is 3.
Input: arr[] = [1, 2, 3, 5, 4]
Output: 5
Explanation: The size of the array is 5.
Expected Complexities
Time Complexity: O(1)
Auxiliary Space: O(1)
 */

class Solution {
    // Constructor to initialize the array
    constructor(arr) { this.a = arr; }

    getSize() {
        return this.a.length;
    }
}

const sol = new Solution([1, 2, 3]);
console.log(sol.getSize());

