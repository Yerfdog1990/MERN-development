/*
Largest in Array

Given an array arr[]. The task is to find the largest element and return it.

Examples:

Input: arr[] = [1, 8, 7, 56, 90]
Output: 90
Explanation: The largest element of the given array is 90.
Input: arr[] = [5, 5, 5, 5]
Output: 5
Explanation: The largest element of the given array is 5.
Input: arr[] = [10]
Output: 10
Explanation: There is only one element which is the largest.
Constraints:
1 <= arr.size()<= 106
0 <= arr[i] <= 106

Expected Complexities
Time Complexity: O(n)
Auxiliary Space: O(1)
 */


class Solution {
    /**
     * @param number[] arr

     * @returns number
     */
    largest(arr) {
        return Math.max(...arr);
    }
}

const sol = new Solution();
console.log(sol.largest([1, 8, 7, 56, 90]));

