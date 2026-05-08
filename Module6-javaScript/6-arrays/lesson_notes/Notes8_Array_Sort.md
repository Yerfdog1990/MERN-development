# JavaScript Array sort() Method

## Introduction

The `sort()` method in JavaScript is used to arrange array elements in a specific order, usually alphabetically or in ascending order. It modifies the original array and returns the sorted result.

### Key Characteristics:
- Sorts elements alphabetically by default (as strings)
- Modifies the original array instead of creating a new one
- Can use a compare function for custom sorting (e.g., numbers)

### Basic Example - Sorting Array of Strings:

```javascript
// Original array
let ar = ["JS", "HTML", "CSS"];

console.log(ar); // Output: ["JS", "HTML", "CSS"]

// Sorting array
ar.sort();

console.log(ar); // Output: ["CSS", "HTML", "JS"]
```

## Syntax

```javascript
arr.sort(compareFunction);
```

## Parameters

### arr
The array to be sorted.

### compareFunction (Optional)
A function that defines the sort order. If omitted, array elements are sorted based on their string Unicode code points.

**Function Signature:**
```javascript
function compareFunction(a, b) {
    // Return values:
    // Negative: a comes before b
    // Positive: b comes before a
    // Zero: order unchanged
}
```

## Return Value

This method returns the reference of the sorted original array.

### Return Value Characteristics:
- Returns the same array reference (modified in place)
- The original array is sorted and returned
- No new array is created

## Sorting Different Data Types

### Sorting Strings

```javascript
let languages = ["JavaScript", "Python", "Java", "C++", "Ruby"];
languages.sort();
console.log(languages); 
// Output: ["C++", "Java", "JavaScript", "Python", "Ruby"]
```

### Sorting Numeric Arrays

#### The Problem with Default Sorting

Array `sort()` sorts elements in lexicographical order whether a string or number.

```javascript
const ar = [10, 20, 25, 100, 40];
console.log(ar.sort()); // Output: [10, 100, 20, 25, 40]
```

The sorting with JavaScript's `sort()` is different from languages like C++, Java and Python. It compares array elements alphabetically as strings rather than numbers. This causes elements to be sorted based on character Unicode values instead of numerical order.

#### Ascending Order

To sort numeric array properly we have to pass a comparator function.

```javascript
const ar = [10, 20, 25, 100, 40];
console.log(ar.sort((a, b) => a - b));
// Output: [10, 20, 25, 40, 100]
```

**Explanation:**
- `a - b` returns negative if `a < b` (a comes first)
- `a - b` returns positive if `a > b` (b comes first)
- `a - b` returns zero if `a === b` (order unchanged)

#### Descending Order

Change the comparator function to sort array in descending order.

```javascript
const ar = [10, 20, 25, 100, 40];
console.log(ar.sort((a, b) => b - a));
// Output: [100, 40, 25, 20, 10]
```

**Explanation:**
- `b - a` returns negative if `b < a` (b comes first)
- `b - a` returns positive if `b > a` (a comes first)

### Sorting Strings in Reverse Order

We can use `string.localeCompare()` method in the comparator function to sort in reverse order.

```javascript
let a = ["JS", "HTML", "CSS"];
console.log(a); // Output: ["JS", "HTML", "CSS"]
a.sort((x, y) => x.localeCompare(y));
console.log(a); // Output: ["CSS", "HTML", "JS"]
```

We can also use `array.reverse()` method to sort array in descending order.

```javascript
let a = ["JS", "CSS", "HTML"];
a.sort();      // Sort ascending first
a.reverse();   // Then reverse
console.log(a); // Output: ['JS', 'HTML', 'CSS']
```

## Sorting Array of Objects

The array of objects can be sorted on the basis of property values.

```javascript
// Array of objects with different names and ages
let a = [
    { name: 'Rahul', age: 28 },
    { name: 'Jatin', age: 25 },
    { name: 'Vikas', age: 32 },
    { name: 'Rohit', age: 35 }
];

// Sort objects by age
a.sort((x, y) => x.age - y.age);
console.log(a);
// Output: [
//   { name: 'Jatin', age: 25 },
//   { name: 'Rahul', age: 28 },
//   { name: 'Vikas', age: 32 },
//   { name: 'Rohit', age: 35 }
// ]

// Sort objects by names 
a.sort((x, y) => x.name.localeCompare(y.name));
console.log(a);
// Output: [
//   { name: 'Jatin', age: 25 },
//   { name: 'Rahul', age: 28 },
//   { name: 'Rohit', age: 35 },
//   { name: 'Vikas', age: 32 }
// ]
```

### Complex Object Sorting

```javascript
let employees = [
    { name: 'John', department: 'HR', salary: 50000, experience: 2 },
    { name: 'Jane', department: 'IT', salary: 75000, experience: 5 },
    { name: 'Bob', department: 'IT', salary: 80000, experience: 3 },
    { name: 'Alice', department: 'HR', salary: 55000, experience: 4 }
];

// Sort by department, then by salary (descending)
employees.sort((a, b) => {
    if (a.department !== b.department) {
        return a.department.localeCompare(b.department);
    }
    return b.salary - a.salary;
});
```

## Sort Stability

Sort stability means that when sorting, if two items have the same value, their order stays the same as in the original list. A stable sort keeps the order of equal items unchanged during sorting.

**Important Note:** Before ECMAScript 2019 (version 10), JavaScript's `sort()` method did not guarantee sort stability, meaning the original order of equal elements might not be preserved after sorting.

```javascript
let a = [
    { name: 'Rahul', age: 30 },
    { name: 'Jatin', age: 25 },
    { name: 'Vikas', age: 30 },
    { name: 'Rohit', age: 25 }
];

a.sort((x, y) => x.age - y.age);
console.log(a);
// Output (in modern JavaScript - stable sort):
// [
//   { name: 'Jatin', age: 25 },
//   { name: 'Rohit', age: 25 },
//   { name: 'Rahul', age: 30 },
//   { name: 'Vikas', age: 30 }
// ]
```

In the output above, `Jatin` comes before `Rohit` and `Rahul` comes before `Vikas` because that was their original order in the array.

## Advanced Sorting Techniques

### Custom Compare Function

```javascript
// Sort by multiple criteria
function multiSort(arr, criteria) {
    return arr.sort((a, b) => {
        for (let criterion of criteria) {
            const { key, order = 'asc' } = criterion;
            let comparison = 0;
            
            if (typeof a[key] === 'string') {
                comparison = a[key].localeCompare(b[key]);
            } else {
                comparison = a[key] - b[key];
            }
            
            if (comparison !== 0) {
                return order === 'desc' ? -comparison : comparison;
            }
        }
        return 0;
    });
}

// Usage
const people = [
    { name: 'John', age: 30, score: 85 },
    { name: 'Jane', age: 25, score: 90 },
    { name: 'Bob', age: 30, score: 80 }
];

multiSort(people, [
    { key: 'age', order: 'asc' },
    { key: 'score', order: 'desc' }
]);
```

### Sorting with Null/Undefined Values

```javascript
let data = [5, null, 3, undefined, 1, 4];

data.sort((a, b) => {
    // Handle null/undefined values
    if (a == null && b == null) return 0;
    if (a == null) return 1;  // null/undefined go to end
    if (b == null) return -1;
    return a - b;
});

console.log(data); // Output: [1, 3, 4, 5, null, undefined]
```

### Case-Insensitive String Sorting

```javascript
let names = ['john', 'Alice', 'bob', 'CHARLIE'];
names.sort((a, b) => a.toLowerCase().localeCompare(b.toLowerCase()));
console.log(names); // Output: ['Alice', 'bob', 'CHARLIE', 'john']
```

## Common Use Cases

### 1. Sorting User Data

```javascript
let users = [
    { id: 3, name: 'Charlie', joinDate: '2023-01-15' },
    { id: 1, name: 'Alice', joinDate: '2023-03-20' },
    { id: 2, name: 'Bob', joinDate: '2023-02-10' }
];

// Sort by join date (newest first)
users.sort((a, b) => new Date(b.joinDate) - new Date(a.joinDate));
```

### 2. Sorting Product Lists

```javascript
let products = [
    { name: 'Laptop', price: 999, category: 'Electronics' },
    { name: 'Book', price: 19, category: 'Education' },
    { name: 'Phone', price: 699, category: 'Electronics' }
];

// Sort by category, then by price
products.sort((a, b) => {
    if (a.category !== b.category) {
        return a.category.localeCompare(b.category);
    }
    return a.price - b.price;
});
```

### 3. Creating Sorted Copies

```javascript
// To avoid modifying original array
function sortedCopy(arr, compareFn) {
    return [...arr].sort(compareFn);
}

let original = [3, 1, 4, 1, 5];
let sorted = sortedCopy(original, (a, b) => a - b);

console.log(original); // Output: [3, 1, 4, 1, 5] (unchanged)
console.log(sorted);   // Output: [1, 1, 3, 4, 5]
```

## Performance Considerations

### Time Complexity
- `sort()` has O(n log n) time complexity in most implementations
- The exact algorithm varies by browser (typically quicksort, mergesort, or timsort)

### Performance Tips

```javascript
// For large arrays, avoid expensive comparisons
let largeArray = [{/* many objects */}];

// Bad: expensive string operations in compare
largeArray.sort((a, b) => a.name.toLowerCase().localeCompare(b.name.toLowerCase()));

// Better: pre-compute values
largeArray.forEach(item => {
    item.sortKey = item.name.toLowerCase();
});
largeArray.sort((a, b) => a.sortKey.localeCompare(b.sortKey));
```

## Browser Compatibility

The `sort()` method is supported in all browsers:

- Chrome 1+
- Firefox 1+
- Safari 1+
- Internet Explorer 5.5+
- Edge 12+

**Note:** Sort stability is guaranteed in ECMAScript 2019+ (modern browsers)

## Common Pitfalls

### 1. Forgetting Compare Function for Numbers

```javascript
// Wrong
let numbers = [10, 2, 100];
numbers.sort(); // Result: [10, 100, 2]

// Correct
numbers.sort((a, b) => a - b); // Result: [2, 10, 100]
```

### 2. Modifying Original Array Unintentionally

```javascript
let original = [3, 1, 2];
let sorted = original.sort();

console.log(original === sorted); // Output: true (same reference)
console.log(original); // Output: [1, 2, 3] (modified!)
```

### 3. Inconsistent Compare Functions

```javascript
// Bad: can cause undefined behavior
arr.sort((a, b) => {
    if (Math.random() > 0.5) return 1;
    return -1;
});

// Good: consistent comparison
arr.sort((a, b) => a - b);
```

### 4. Case Sensitivity Issues

```javascript
let names = ['alice', 'Bob', 'charlie'];
names.sort(); // Result: ['Bob', 'alice', 'charlie'] (case-sensitive)

// Better: case-insensitive
names.sort((a, b) => a.toLowerCase().localeCompare(b.toLowerCase()));
```

## Best Practices

### 1. Always Use Compare Functions for Numbers

```javascript
// Always specify comparison for numbers
numbers.sort((a, b) => a - b); // ascending
numbers.sort((a, b) => b - a); // descending
```

### 2. Create Copies When Needed

```javascript
// Use spread operator to avoid modifying original
let sorted = [...original].sort((a, b) => a - b);
```

### 3. Handle Edge Cases

```javascript
function safeSort(arr, compareFn) {
    return arr.filter(item => item != null)
            .sort(compareFn)
            .concat(arr.filter(item => item == null));
}
```

### 4. Use localeCompare for Strings

```javascript
// Better for international strings
strings.sort((a, b) => a.localeCompare(b));
```

## Summary

The `Array.prototype.sort()` method is a powerful tool for:

- **Sorting arrays** in place (modifies original)
- **Custom sorting** with compare functions
- **Multi-level sorting** with complex criteria
- **String sorting** with locale awareness
- **Object sorting** by properties

### Key Benefits:
- **Flexible**: Supports custom comparison logic
- **In-place**: No additional memory for new array
- **Stable**: Preserves order of equal elements (ES2019+)
- **Universal**: Works with all data types
- **Efficient**: O(n log n) time complexity

### Key Considerations:
- **Destructive**: Modifies original array
- **Default Behavior**: Sorts as strings (problematic for numbers)
- **Compare Function**: Required for numeric sorting
- **Stability**: Guaranteed only in modern JavaScript

Use `sort()` when you need to reorder array elements, especially for organizing data, implementing algorithms, or preparing data for display. Always remember to provide appropriate compare functions for non-string data types.
