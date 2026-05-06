/*
Panagram Checking

You are given a string s. You need to find if the string is a panagram or not.

Note: A panagram contains all the letters of english alphabet at least once.

Examples:

Input: s = "Thequickbrownfoxjumpsoverthelazydog"
Output: True
Input: s = "HeavyDuty"
Output: False
Constraints:
1 <= |s| <= 104

Expected Complexities
Time Complexity: O(n)
Auxiliary Space: O(1)
 */

/**
 * @param {string} str
 * @return {boolean}
 */

class Solution {
    isPanagram(str) {
        const letters = str.toLowerCase().replace(/[^a-z]/g, '');
        return new Set(letters).size === 26;
    }
}

let str = "Thequickbrownfoxjumpsoverthelazydog";
let obj = new Solution();
console.log(obj.isPanagram(str));
