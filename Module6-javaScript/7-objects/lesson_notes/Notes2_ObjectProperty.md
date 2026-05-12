# JavaScript Object Properties

## Understanding Object Properties

JavaScript objects store data as key-value pairs, making them ideal for representing real-world entities. Object properties allow developers to easily organize, access, and modify related data.

### Key Characteristics:
- **Structure**: Each property consists of a key (name) and a value
- **Flexible Values**: Values can be any data type (strings, numbers, booleans, objects, functions)
- **Dynamic**: Properties can be added, updated, or deleted dynamically at runtime
- **Organized**: Objects help structure data efficiently, improving code readability and maintainability

## Defining Object Properties

You can create objects using object literals, defining properties as key-value pairs.

```javascript
let obj = {
    name: 'Sourav',
    age: 23,
    isActive: true
};
console.log(obj.name);
```

Here, `name`, `age`, and `isActive` are properties of the object. The values can be of any type, including strings, numbers, and booleans.

## Accessing Object Properties

Properties can be accessed using dot notation or bracket notation.

```javascript
let obj = {
    name: 'Sourav',
    age: 23,
    isActive: true
};

console.log(obj.age);        // 23 (dot notation)
console.log(obj['isActive']); // true (bracket notation)
```

### Dot Notation
- **Simple and easy to use**
- **Works when the property name is a valid identifier**
- **More readable for straightforward property access**

### Bracket Notation
- **Useful when accessing properties dynamically**
- **Required when property names include special characters or spaces**
- **Allows using variables as property names**

```javascript
// When property name has special characters
let obj = { 'first-name': 'Sourav', 'user age': 23 };
console.log(obj['first-name']); // 'Sourav'

// Using variables as property names
let propertyName = 'age';
console.log(obj[propertyName]); // 23
```

## Adding and Modifying Properties

You can add new properties or update existing ones using simple assignment.

```javascript
let obj = {
    name: 'Sourav',
    age: 23,
    isActive: true
};

obj.gender = 'male'; // Adding a new property
obj.age = 26;        // Modifying an existing property

console.log(obj);
// Output: { name: 'Sourav', age: 26, isActive: true, gender: 'male' }
```

Properties can be added or updated simply by assigning a value to a key using either dot or bracket notation.

## Deleting Properties

Use the `delete` operator to remove a property from an object.

```javascript
let obj = {
    name: 'Sourav',
    age: 23,
    isActive: true
};

delete obj.isActive;
console.log(obj);
// Output: { name: 'Sourav', age: 23 }
```

**Important Notes:**
- `delete` returns `true` if the property was successfully deleted
- `delete` returns `false` if the property doesn't exist or cannot be deleted
- Deleting non-configurable properties will fail silently in non-strict mode

## Checking Property Existence

You can check if a property exists using the `in` operator or `hasOwnProperty()` method.

```javascript
let obj = {
    name: 'Sourav',
    age: 23,
    gender: 'female'
};

console.log('age' in obj);              // true
console.log(obj.hasOwnProperty('gender')); // true
console.log('salary' in obj);            // false
console.log(obj.hasOwnProperty('salary')); // false
```

### `in` Operator
- **Checks if the property exists in the object or its prototype chain**
- **Returns `true` for both own properties and inherited properties**

### `hasOwnProperty()`
- **Only checks properties owned directly by the object**
- **Returns `false` for inherited properties**

```javascript
let obj = { name: 'Sourav' };
console.log('toString' in obj);              // true (inherited from Object.prototype)
console.log(obj.hasOwnProperty('toString'));  // false (not own property)
```

## Enumerable vs Non-Enumerable Properties

Properties can be marked as enumerable or non-enumerable using `Object.defineProperty()`.

```javascript
let obj = {
    name: 'Sourav',
    age: 23,
    gender: 'male'
};

Object.defineProperty(obj, 'country', {
    value: 'India',
    enumerable: false
});

console.log(obj.country);        // 'India'
console.log(Object.keys(obj));    // ['name', 'age', 'gender']
```

**Key Points:**
- **Enumerable properties** appear in `for...in` loops and `Object.keys()` results
- **Non-enumerable properties** are hidden from enumeration but still accessible
- All properties defined using object literal syntax are enumerable by default

## Property Attributes

Object properties have attributes that define their behavior, such as `writable`, `configurable`, and `enumerable`.

```javascript
let obj = {
    name: 'Sourav',
    age: 23
};

Object.defineProperty(obj, 'status', {
    value: 'active',
    writable: false,
    configurable: false,
    enumerable: true
});

obj.status = 'inactive'; // Does not change due to `writable: false`
console.log(obj.status); // 'active'
```

### Property Attributes Explained:

#### `writable`
- **Determines if the value can be changed**
- `true`: Property value can be modified
- `false`: Property value is read-only

#### `configurable`
- **Specifies if the property can be deleted or modified**
- `true`: Property can be deleted and its attributes can be changed
- `false`: Property cannot be deleted and its attributes are locked

#### `enumerable`
- **Indicates if the property shows up during enumeration**
- `true`: Property appears in `for...in` loops and `Object.keys()`
- `false`: Property is hidden from enumeration

#### `value`
- **The actual value associated with the property**
- Can be any JavaScript value

## Accessors (Getters and Setters)

Objects can have computed properties using getters and setters for controlled access to properties.

```javascript
let obj = {
    fName: 'Sourav',
    lName: 'Sharma',
    get fullName() {
        return `${this.fName} ${this.lName}`;
    },
    set fullName(name) {
        [this.fName, this.lName] = name.split(' ');
    }
};

console.log(obj.fullName); // 'Sourav Sharma'
obj.fullName = 'Ravi Kumar';
console.log(obj.fName);   // 'Ravi'
console.log(obj.lName);   // 'Kumar'
```

### Getters
- **Allow reading computed properties**
- **Execute code when accessing the property**
- **Don't take any parameters**
- **Must return a value**

### Setters
- **Enable modifying properties in a controlled manner**
- **Execute code when assigning a value to the property**
- **Take one parameter (the value being assigned)**
- **Used for validation or transformation**

### Benefits of Getters and Setters:
- **Encapsulation**: Hide internal implementation details
- **Validation**: Ensure data integrity when setting values
- **Computed Properties**: Create properties that derive their values from other properties
- **Debugging**: Add logging or breakpoints when properties are accessed or modified

## Property Descriptors

You can inspect property attributes using `Object.getOwnPropertyDescriptor()`.

```javascript
let obj = { name: 'Sourav' };
let descriptor = Object.getOwnPropertyDescriptor(obj, 'name');

console.log(descriptor);
// Output:
// {
//   value: 'Sourav',
//   writable: true,
//   enumerable: true,
//   configurable: true
// }
```

## Multiple Property Definition

You can define multiple properties at once using `Object.defineProperties()`.

```javascript
let obj = {};

Object.defineProperties(obj, {
    name: {
        value: 'Sourav',
        writable: true,
        enumerable: true
    },
    age: {
        value: 23,
        writable: false,
        enumerable: true
    },
    id: {
        value: '12345',
        writable: true,
        enumerable: false
    }
});

console.log(obj);           // { name: 'Sourav', age: 23 }
console.log(obj.id);        // '12345'
console.log(Object.keys(obj)); // ['name', 'age']
```

## Common Property Patterns

### Computed Property Names
```javascript
let prefix = 'user';
let obj = {
    [prefix + 'Name']: 'Sourav',
    [prefix + 'Age']: 23
};
```

### Property Shorthand
```javascript
let name = 'Sourav';
let age = 23;
let obj = { name, age }; // Shorthand for { name: name, age: age }
```

### Method Properties
```javascript
let obj = {
    greet() { // Shorthand for greet: function() { ... }
        return 'Hello!';
    }
};
```

## Best Practices

1. **Use descriptive property names** that clearly indicate their purpose
2. **Prefer dot notation** for simple property access
3. **Use bracket notation** for dynamic property names or special characters
4. **Consider using getters/setters** for computed properties or validation
5. **Be careful with non-enumerable properties** as they can be confusing during debugging
6. **Use `hasOwnProperty()`** when you only want to check own properties
7. **Avoid modifying built-in object prototypes** unless absolutely necessary

## Summary

JavaScript object properties provide a flexible and powerful way to structure and manipulate data. Understanding how to define, access, modify, and control properties is essential for effective JavaScript programming. The combination of simple key-value pairs with advanced features like property attributes and accessor methods makes objects one of JavaScript's most versatile data structures.