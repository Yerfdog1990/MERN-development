/*
💎 Hollow Butterfly (Advanced++)
👉 Example (n = 5)
*        *
**      **
* *    * *
*  *  *  *
*   **   *
*   **   *
*  *  *  *
* *    * *
**      **
*        *
 */

class Solution {
    hollowButterfly(n) {
        // Upper half
        for (let i = 1; i <= n; i++) {
            let row = "";

            for (let j = 1; j <= i; j++) {
                if (j === 1 || j === i) {
                    row += "*";
                } else {
                    row += " ";
                }
            }

            for (let j = 1; j <= 2 * (n - i); j++) {
                row += " ";
            }

            for (let j = 1; j <= i; j++) {
                if (j === 1 || j === i) {
                    row += "*";
                } else {
                    row += " ";
                }
            }

            console.log(row);
        }

        // Lower half
        for (let i = n; i >= 1; i--) {
            let row = "";

            for (let j = 1; j <= i; j++) {
                if (j === 1 || j === i) {
                    row += "*";
                } else {
                    row += " ";
                }
            }

            for (let j = 1; j <= 2 * (n - i); j++) {
                row += " ";
            }

            for (let j = 1; j <= i; j++) {
                if (j === 1 || j === i) {
                    row += "*";
                } else {
                    row += " ";
                }
            }

            console.log(row);
        }
    }
}