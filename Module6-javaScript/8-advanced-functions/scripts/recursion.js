// Sum of numbers using for loop
function calculateSum(n){
    let sum = 0;
    for(let i = 1; i <= n; i++){
        sum += i;
    }
    return sum;
}

console.log("Sum of numbers using for loop:", calculateSum(5));

// Sum of numbers using recursion
function calculateSumRecursion(n){
    if(n === 1) return n;
    return n + calculateSumRecursion(n - 1);
}

console.log("Sum of numbers using recursion:", calculateSumRecursion(5));

// Factorial of a number using for loop
function factorial(num){
    let result = 1;
    for(let i = 1; i <= num; i++){
        result *= i;
    }
    return result;
}

console.log("Factorial of a number using for loop:", factorial(5));

// Factorial of a number using recursion
function factorialRecursion(num){
    if(num === 1) return 1;
    return num * factorialRecursion(num - 1);
}

console.log("Factorial of a number using recursion:", factorialRecursion(5));
