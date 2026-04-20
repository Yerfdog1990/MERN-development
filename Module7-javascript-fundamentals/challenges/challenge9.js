/*
🧮 ascal’s Triangle (INTERVIEW FAVORITE)
👉 Example (n = 5)
    1
   1 1
  1 2 1
 1 3 3 1
1 4 6 4 1
 */

class Solution {
    pascalTriangle(n) {
        for (let i = 0; i < n; i++) {
            let row = "";
            let num = 1;

            // spaces
            for (let j = 0; j < n - i - 1; j++) {
                row += " ";
            }

            for (let j = 0; j <= i; j++) {
                row += num + " ";
                num = num * (i - j) / (j + 1);
            }

            console.log(row);
        }
    }
}