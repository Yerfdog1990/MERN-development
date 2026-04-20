/*
🦋 Butterfly Pattern (Solid)
👉 Example (n = 5)
*        *
**      **
***    ***
****  ****
**********
****  ****
***    ***
**      **
*        *
🧠 How it works

The pattern has 2 halves:

🔼 Upper half
Left stars → increasing
Spaces → decreasing
Right stars → increasing
🔽 Lower half
Mirror of upper half
 */

class Solution {
    butterfly(n) {
        // Upper half
        for (let i = 1; i <= n; i++) {
            let row = "";

            // left stars
            for (let j = 1; j <= i; j++) {
                row += "*";
            }

            // spaces
            for (let j = 1; j <= 2 * (n - i); j++) {
                row += " ";
            }

            // right stars
            for (let j = 1; j <= i; j++) {
                row += "*";
            }

            console.log(row);
        }

        // Lower half
        for (let i = n - 1; i >= 1; i--) {
            let row = "";

            // left stars
            for (let j = 1; j <= i; j++) {
                row += "*";
            }

            // spaces
            for (let j = 1; j <= 2 * (n - i); j++) {
                row += " ";
            }

            // right stars
            for (let j = 1; j <= i; j++) {
                row += "*";
            }

            console.log(row);
        }
    }
}