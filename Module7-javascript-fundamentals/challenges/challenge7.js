/*
🔢 Number Patterns
🔹 (a) Increasing Triangle
Example (n = 5)
1
12
123
1234
12345
 */

class Solution {
    numberTriangle(n) {
        for (let i = 1; i <= n; i++) {
            let row = "";

            for (let j = 1; j <= i; j++) {
                row += j;
            }

            console.log(row);
        }
    }
}

/*
🔹 (b) Repeated Numbers
1
22
333
4444
55555
 */

class Solution {
    repeatNumber(n) {
        for (let i = 1; i <= n; i++) {
            let row = "";

            for (let j = 1; j <= i; j++) {
                row += i;
            }

            console.log(row);
        }
    }
}

solution = new Solution();
solution.repeatNumber(5);

