/*
Find one extra character
Difficulty: EasyAccuracy: 56.13%Submissions: 31K+Points: 2
Given two strings s1 and s2 which are of lengths n and n+1. The second string contains all the character of the first string, but there is one extra character. Your task to find the extra character in the second string and return it. 

Examples:

Input: s1 = abcd, s2 = badce
Output: e
Input: s1 = efg, s2 = gtfe
Output: t
Expected Complexities
Time Complexity: O(n + m)
Auxiliary Space: O(1)
 */

class Solution1 {
    extraChar(s1, s2) {

        // Convert s2 into an array of characters
        // Example: "abcde" → ["a", "b", "c", "d", "e"]
        return s2.split("")

            // Keep only characters that are NOT found in s1
            // s1.includes(char) checks if char exists in s1
            // ! makes it return true only for missing characters
            .filter(char => !s1.includes(char))

            // Return the first extra character found
            [0];
    }
}

let solution1 = new Solution1();
console.log(solution1.extraChar("abcd", "badce"));
console.log(solution1.extraChar("abc", "abcc"));


/*
Problem with this solution

It fails when characters repeat.

Example:

s1 = "aabb"
s2 = "aabbc"

Works → returns "c"

But:

s1 = "abc"
s2 = "abcc"

Extra character is "c"

Your code checks:

s1.includes("c")

which is true, so it incorrectly ignores it.

Better approach (frequency/XOR)

A more reliable solution handles duplicates properly.
 */

// Example using XOR:
class Solution2 {
    extraChar(s1, s2) {
        // Store XOR result
        let result = 0;

        // Combine both strings and loop through each character
        for (let char of s1 + s2) {

            // Convert character to ASCII/Unicode value
            // XOR cancels out matching characters
            // Only the extra character remains
            result ^= char.charCodeAt(0);
        }

        // Convert the remaining ASCII value back to a character
        return String.fromCharCode(result);
    }
}

let solution2 = new Solution2();
console.log(solution2.extraChar("abcd", "badce"));
console.log(solution2.extraChar("abc", "abcc"));