/*
Length of String

You are given a string s. You need to find the length of the string and return it.

Examples:

Input: s = "Geeks"
Output: 5
Input: s = "Hello1234"
Output: 9
Constraints:
1 ≤ s.size() ≤ 105

Expected Complexities
Time Complexity: O(1)
Auxiliary Space: O(1)
 */

class Solution {
    lengthString(s) {
        // code here
        return(s.length);
    }
}

let s = "Geeks";
let obj = new Solution();
console.log(obj.lengthString(s));