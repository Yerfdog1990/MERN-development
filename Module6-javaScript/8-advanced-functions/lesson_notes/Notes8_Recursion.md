# Recursion in JavaScript

## Overview

Recursion is a technique where a function calls itself to solve a problem by breaking it into smaller, similar subproblems until a base condition is met.

### Key Characteristics

- **A function invokes itself** during execution
- **Works by dividing a problem** into smaller subproblems
- **Requires a base case** to stop infinite calls
- **Commonly used** in problems like factorial, Fibonacci, and tree traversal

## Basic Example

```javascript
function sum(n) {
  if (n === 0) {
    return 0; // base case
  }
  return n + sum(n - 1); // recursive call
}

console.log(sum(5)); // Output: 15
```

**Explanation:**
- The function calls itself with `n - 1` until `n` becomes 0
- When `n === 0`, the base case returns 0, stopping the recursion
- The results are then combined: 5 + 4 + 3 + 2 + 1 + 0 = 15

## Syntax

```javascript
function recursiveFunction(parameters) {
  // Base case: stopping condition
  if (baseCase) {
    return baseCaseValue;
  }

  // Recursive case: function calls itself
  return recursiveFunction(modifiedParameters);
}
```

## Core Elements of Recursion

The core elements of recursion define how a function repeatedly calls itself while progressing toward a stopping condition.

### 1. Base Case

The base case defines the condition that stops the recursive calls and prevents infinite recursion.

- **Condition that stops further recursive calls**
- **Prevents infinite recursion and stack overflow**
- **Example:** In factorial, when n is 0 or 1

```javascript
if (n === 0 || n === 1) {
    return 1; // Base case
}
```

### 2. Recursive Case

The recursive case is the part of the function where it calls itself with a modified input to move closer to the base case.

- **Part where the function calls itself**
- **Input is reduced or modified to approach the base case**
- **Example:** n * factorial(n - 1)

```javascript
return n * factorial(n - 1); // Recursive case
```

## Example: Factorial of a Number

The factorial of a number n (denoted as n!) is the product of all positive integers less than or equal to n.

```javascript
function factorial(n) {
  // Base case: if n is 0 or 1, return 1
  if (n === 0 || n === 1) {
    return 1;
  }

  // Recursive case: n! = n * (n-1)!
  return n * factorial(n - 1);
}

console.log(factorial(5)); // Output: 120
```

**Execution Flow for factorial(5):**
```
factorial(5) = 5 * factorial(4)
             = 5 * 4 * factorial(3)
             = 5 * 4 * 3 * factorial(2)
             = 5 * 4 * 3 * 2 * factorial(1)
             = 5 * 4 * 3 * 2 * 1
             = 120
```

## Benefits of Using Recursion

Recursion is particularly useful for solving problems that can be divided into smaller, identical problems. Some common use cases include:

- **Tree and Graph Traversals:** Recursion is ideal for traversing hierarchical data structures like trees and graphs
- **Divide and Conquer Algorithms:** Many algorithms, such as Merge Sort and Quick Sort, use recursion to break down problems into smaller subproblems
- **Backtracking:** Recursion is often used in backtracking algorithms to explore all possible solutions

## Example 1: Fibonacci Sequence

The Fibonacci sequence is a series of numbers where each number is the sum of the two preceding ones (e.g., 0, 1, 1, 2, 3, 5, 8, ...).

```javascript
function fibonacci(n) {
  // Base case: return n if n is 0 or 1
  if (n === 0 || n === 1) {
    return n;
  }
  // Recursive case: sum of the two preceding numbers
  return fibonacci(n - 1) + fibonacci(n - 2);
}

console.log(fibonacci(6)); // Output: 8
```

**Execution Flow for fibonacci(6):**
```
fibonacci(6) = fibonacci(5) + fibonacci(4)
             = (fibonacci(4) + fibonacci(3)) + (fibonacci(3) + fibonacci(2))
             = ... (continues until base cases are reached)
             = 8
```

**Note:** This recursive approach has exponential time complexity O(2^n). For better performance, consider using memoization or an iterative approach.

## Applications of Recursion

### 1. Mathematical Computations

- **Factorial calculation**
- **Fibonacci sequence**
- **Greatest Common Divisor (GCD)**

```javascript
// GCD using Euclidean algorithm
function gcd(a, b) {
    if (b === 0) {
        return a;
    }
    return gcd(b, a % b);
}

console.log(gcd(48, 18)); // Output: 6
```

### 2. Data Structures

- **Tree traversal** (Preorder, Inorder, Postorder)
- **Graph traversal** (Depth-First Search)
- **Linked list operations** (Reversal, Searching)

```javascript
// Tree traversal (Preorder)
function traversePreorder(node) {
    if (node === null) return;
    
    console.log(node.value); // Visit root
    traversePreorder(node.left); // Traverse left
    traversePreorder(node.right); // Traverse right
}
```

### 3. Sorting Algorithms

- **Merge Sort**
- **Quick Sort**

```javascript
// Quick Sort
function quickSort(arr) {
    if (arr.length <= 1) {
        return arr; // Base case
    }
    
    const pivot = arr[arr.length - 1];
    const left = [];
    const right = [];
    
    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i] < pivot) {
            left.push(arr[i]);
        } else {
            right.push(arr[i]);
        }
    }
    
    return [...quickSort(left), pivot, ...quickSort(right)];
}
```

### 4. Backtracking

- **N-Queens problem**
- **Sudoku solver**
- **Maze solving**

```javascript
// Simple backtracking example: Generate all subsets
function generateSubsets(arr, index = 0, current = [], result = []) {
    if (index === arr.length) {
        result.push([...current]);
        return;
    }
    
    // Include current element
    current.push(arr[index]);
    generateSubsets(arr, index + 1, current, result);
    
    // Exclude current element
    current.pop();
    generateSubsets(arr, index + 1, current, result);
    
    return result;
}

console.log(generateSubsets([1, 2, 3]));
```

### 5. Dynamic Programming

- **Fibonacci sequence optimization**
- **Longest Common Subsequence (LCS)**
- **Knapsack problem**

```javascript
// Fibonacci with memoization
function fibonacciMemo(n, memo = {}) {
    if (n in memo) return memo[n];
    if (n === 0 || n === 1) return n;
    
    memo[n] = fibonacciMemo(n - 1, memo) + fibonacciMemo(n - 2, memo);
    return memo[n];
}

console.log(fibonacciMemo(50)); // Much faster than plain recursion
```

### 6. File System Operations

- **Directory traversal**
- **Searching for files in nested folders**

```javascript
// Traverse directory structure (pseudo-code)
function traverseDirectory(directory) {
    const files = getFiles(directory);
    
    for (const file of files) {
        if (file.isDirectory) {
            traverseDirectory(file.path); // Recursive call
        } else {
            console.log(file.path);
        }
    }
}
```

## Tail Recursion

Tail Recursion is a type of recursion where the recursive call is the final operation in a function, allowing optimizations that reduce call stack usage and improve memory efficiency.

### Characteristics

- **Recursive call is the last statement**
- **No computation after the recursive call**
- **Can be optimized to avoid stack growth**
- **More memory-efficient than normal recursion**

### Key Features

1. **Last Operation:** The recursive call must be the last operation in the function
2. **No Pending Work:** The function should not perform any computation after the recursive call
3. **Optimization:** Tail-recursive functions can be optimized into a loop by the compiler or interpreter, avoiding stack overflow

### When to Use Tail Recursion

Use tail recursion when you need to solve a problem recursively and want to avoid stack overflow. Tail recursion is particularly useful for problems that involve large inputs or deep recursion.

### Example: Factorial with Tail Recursion

```javascript
function factorial(n, accumulator = 1) {
  // Base case: 
  if (n === 0 || n === 1) {
    return accumulator;
  }
  // Tail-recursive call: 
  return factorial(n - 1, n * accumulator);
}

console.log(factorial(5)); // Output: 120
```

**Explanation:**
- The `accumulator` parameter stores the intermediate result
- Each recursive call passes the updated accumulator
- The recursive call is the last operation (no computation after it)
- This allows the JavaScript engine to optimize the recursion

**Execution Flow:**
```
factorial(5, 1) → factorial(4, 5) → factorial(3, 20) → factorial(2, 60) → factorial(1, 120) → 120
```

### Comparison: Regular vs Tail Recursion

```javascript
// Regular recursion (not tail-recursive)
function factorialRegular(n) {
    if (n === 0 || n === 1) return 1;
    return n * factorialRegular(n - 1); // Multiplication happens after recursive call
}

// Tail recursion
function factorialTail(n, accumulator = 1) {
    if (n === 0 || n === 1) return accumulator;
    return factorialTail(n - 1, n * accumulator); // Recursive call is last operation
}
```

## Recursion vs Iteration

| Aspect | Recursion | Iteration |
|--------|-----------|-----------|
| **Readability** | Often more readable for complex problems | Can be less readable for complex logic |
| **Memory Usage** | Uses call stack (can cause stack overflow) | Uses constant memory |
| **Performance** | Can be slower due to function call overhead | Generally faster |
| **Use Case** | Tree/graph traversal, divide and conquer | Simple loops, linear processing |
| **Debugging** | Harder to debug (stack traces) | Easier to debug |

## Common Pitfalls

### 1. Missing Base Case

```javascript
// ❌ Wrong - no base case
function infiniteRecursion(n) {
    return n + infiniteRecursion(n - 1);
}

// ✅ Correct - has base case
function correctRecursion(n) {
    if (n === 0) return 0; // Base case
    return n + correctRecursion(n - 1);
}
```

### 2. Not Progressing Toward Base Case

```javascript
// ❌ Wrong - doesn't progress
function badRecursion(n) {
    if (n === 0) return 0;
    return n + badRecursion(n); // Same value passed
}

// ✅ Correct - progresses toward base case
function goodRecursion(n) {
    if (n === 0) return 0;
    return n + goodRecursion(n - 1); // Value decreases
}
```

### 3. Stack Overflow

Deep recursion can cause stack overflow errors. Use tail recursion or convert to iteration for deep recursion.

## Best Practices

1. **Always define a clear base case** to prevent infinite recursion
2. **Ensure the recursive call progresses** toward the base case
3. **Consider tail recursion** for better memory efficiency
4. **Use memoization** for overlapping subproblems (like Fibonacci)
5. **Be aware of stack depth** - convert to iteration if recursion is too deep
6. **Test with small inputs first** before running with large data

## Summary

- **Recursion** is a technique where a function calls itself to solve problems
- **Two essential elements:** base case (stopping condition) and recursive case
- **Common applications:** mathematical computations, data structures, sorting, backtracking
- **Tail recursion** optimizes memory by making the recursive call the last operation
- **Advantages:** cleaner code for complex problems, natural fit for hierarchical data
- **Disadvantages:** can cause stack overflow, may be slower than iteration
- **Best practice:** use recursion when it makes the code clearer, otherwise prefer iteration