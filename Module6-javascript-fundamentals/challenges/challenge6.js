
/*
🔺 2. Solid Pyramid
👉 Example (n = 5)
    *
   ***
  *****
 *******
*********
 */

class Solution4 {
    solidPyramid(n) {
        for (let i = 0; i < n; i++) {
            let row = "";

            // spaces
            for (let j = 0; j < n - i - 1; j++) {
                row += " ";
            }

            // stars
            for (let j = 0; j < 2 * i + 1; j++) {
                row += "*";
            }

            console.log(row);
        }
    }
}

console.log("\n======================");
solution = new Solution4();
solution.solidPyramid(6)

/*
🔻 Inverted Pyramid
👉 Example (n = 5)
*********
 *******
  *****
   ***
    *
 */

class Solution {
    invertedPyramid(n) {
        for (let i = n - 1; i >= 0; i--) {
            let row = "";

            // spaces
            for (let j = 0; j < n - i - 1; j++) {
                row += " ";
            }

            // stars
            for (let j = 0; j < 2 * i + 1; j++) {
                row += "*";
            }

            console.log(row);
        }
    }
}