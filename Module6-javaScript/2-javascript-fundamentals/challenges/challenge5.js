/*
🟦 Hollow Rectangle
👉 Example (rows = 4, cols = 6)
******
*    *
*    *
******
 */
class Solution3 {
    hollowRectangle(rows, cols) {
        for (let i = 0; i < rows; i++) {
            let row = "";

            for (let j = 0; j < cols; j++) {
                if (i === 0 || i === rows - 1 || j === 0 || j === cols - 1) {
                    row += "*";
                } else {
                    row += " ";
                }
            }

            console.log(row);
        }
    }
}

console.log("\n======================");
solution = new Solution3();
solution.hollowRectangle(5, 5);