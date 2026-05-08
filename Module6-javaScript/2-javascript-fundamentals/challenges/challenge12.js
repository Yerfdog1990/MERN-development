/*
🔢 Floyd’s Triangle
👉 Example (n = 5)
1
2 3
4 5 6
7 8 9 10
11 12 13 14 15
🧠 Key Idea
Numbers don’t reset each row
They keep increasing continuously
Use a variable (e.g., num) that increments every time

🔥 How it works (step-by-step)

For n = 3:

Row	Numbers
1	1
2	2 3
3	4 5 6

👉 num keeps increasing globally
 */

class Solution {
    floydTriangle(n) {
        let num = 1;

        for (let i = 1; i <= n; i++) {
            let row = "";

            for (let j = 1; j <= i; j++) {
                row += num + " ";
                num++;
            }

            console.log(row);
        }
    }
}

// ⚡ Alternative (no extra variable — formula-based)
class Solution {
    floydTriangle(n) {
        for (let i = 1; i <= n; i++) {
            let row = "";

            for (let j = 1; j <= i; j++) {
                let num = (i * (i - 1)) / 2 + j;
                row += num + " ";
            }

            console.log(row);
        }
    }
}

/*
🚀 Advanced Variations (VERY COMMON)
🔹 Reverse Floyd’s Triangle
1 2 3 4 5
6 7 8 9
10 11 12
13 14
15
🔹 Binary Floyd’s Triangle
1
0 1
0 1 0
1 0 1 0
🔹 Odd-Even Floyd
1
3 5
7 9 11
 */