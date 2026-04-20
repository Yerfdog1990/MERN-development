
/*
💎 Diamond Pattern
👉 Example (n = 5)
    *
   ***
  *****
 *******
*********
 *******
  *****
   ***
    *
 */

class Solution {
    diamond(n) {
        // upper half
        for (let i = 0; i < n; i++) {
            let row = "";

            for (let j = 0; j < n - i - 1; j++) {
                row += " ";
            }

            for (let j = 0; j < 2 * i + 1; j++) {
                row += "*";
            }

            console.log(row);
        }

        // lower half
        for (let i = n - 2; i >= 0; i--) {
            let row = "";

            for (let j = 0; j < n - i - 1; j++) {
                row += " ";
            }

            for (let j = 0; j < 2 * i + 1; j++) {
                row += "*";
            }

            console.log(row);
        }
    }
}

/*
💎 2. Hollow Diamond
👉 Example (n = 5)
    *
   * *
  *   *
 *     *
*       *
 *     *
  *   *
   * *
    *
 */

class Solution {
    hollowDiamond(n) {
        // upper part
        for (let i = 0; i < n; i++) {
            let row = "";

            for (let j = 0; j < n - i - 1; j++) {
                row += " ";
            }

            for (let j = 0; j < 2 * i + 1; j++) {
                if (j === 0 || j === 2 * i) {
                    row += "*";
                } else {
                    row += " ";
                }
            }

            console.log(row);
        }

        // lower part
        for (let i = n - 2; i >= 0; i--) {
            let row = "";

            for (let j = 0; j < n - i - 1; j++) {
                row += " ";
            }

            for (let j = 0; j < 2 * i + 1; j++) {
                if (j === 0 || j === 2 * i) {
                    row += "*";
                } else {
                    row += " ";
                }
            }

            console.log(row);
        }
    }
}