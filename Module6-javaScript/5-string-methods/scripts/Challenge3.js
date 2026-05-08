/*
First Occurence

Given two strings txt and pat, return the 0-based index of the first occurrence of the substring pat in txt. If pat is not found, return -1.
Note: You are not allowed to use the inbuilt function.

Examples :

Input: txt = "GeeksForGeeks", pat = "Fr"
Output: -1
Explanation: "Fr" is not present in the string "GeeksForGeeks" as substring.
Input: txt = "GeeksForGeeks", pat = "For"
Output: 5
Explanation: "For" is present as substring in "GeeksForGeeks" from index 5 (0 based indexing).
Input: txt = "GeeksForGeeks", pat = "gr"
Output: -1
Explanation: "gr" is not present in the string "GeeksForGeeks" as substring.
Constraints:
1 ≤ txt.size(),pat.size() ≤ 1000
 */

/**
 * @param {string} s
 * @param {string} x
 * @returns {number}
 */
class Solution {
    firstOccurence(txt, pat) {
        // code here
        return txt.indexOf(pat);
    }
}

let txt = "GeeksForGeeks";
let pat = "For";
let obj = new Solution();
console.log(obj.firstOccurence(txt, pat));

