# JavaScript Computed Property Names

## Understanding Computed Property Names

Computed property names is an ES6 feature that allows you to create object properties using expressions or variables as keys, which are evaluated at runtime for greater flexibility.

### Key Characteristics:
- **Dynamic Evaluation**: Property names are computed at runtime, not at parse time
- **Expression-Based**: Can use any valid JavaScript expression as a property name
- **ES6 Syntax**: Uses square bracket `[ ]` syntax inside object literals
- **Flexible Object Creation**: Enables building dynamic and flexible object structures

## JavaScript Objects and Property Names

JavaScript objects store data as key-value pairs, where keys act as properties to access or modify values. Using computed property names, these keys can be generated dynamically at runtime.

### Fundamentals:
- **Keys as Properties**: Keys are treated as object properties
- **Dynamic Creation**: Property names can be created using expressions
- **Square Bracket Syntax**: Uses ES6 `[ ]` syntax for dynamic evaluation
- **Enhanced Flexibility**: Improves flexibility and dynamic object creation

## Methods for Creating Dynamic Object Properties

There are two primary methods to create object properties dynamically in JavaScript:

### Method 1: Using ES6 Computed Property Names

In ES6, you can use an expression inside square brackets `[ ]` while defining an object, and the evaluated result becomes the property name.

#### Syntax:
```javascript
const obj = {
  [expression]: value
};
```

#### Example:
```javascript
let LAST_NAME = "lastname";
let fullname = {
    firstname: "James",
    [LAST_NAME]: "Anderson"
};

console.log(
    "My fullname is: " + fullname.firstname
    + " " + fullname.lastname
);
// Output: "My fullname is: James Anderson"
```

**How it works:**
- `[LAST_NAME]` is evaluated to `"lastname"` and used as the object key
- The property `lastname` is created while the object is being initialized
- The expression inside the brackets is computed at object creation time

#### Advanced Examples:

```javascript
// Using complex expressions
let prefix = "user";
let id = 123;
let userObj = {
    [`${prefix}_${id}`]: "John Doe",
    [`${prefix}_age_${id}`]: 25
};

console.log(userObj.user_123);        // "John Doe"
console.log(userObj.user_age_123);    // 25

// Using function calls
function generateKey(suffix) {
    return `prop_${suffix}`;
}

let config = {
    [generateKey("timeout")]: 5000,
    [generateKey("retries")]: 3
};

console.log(config.prop_timeout);     // 5000
console.log(config.prop_retries);     // 3
```

### Method 2: Creating Property Names Dynamically Using Bracket Notation

In this approach, the object is created first, and then a property name is added dynamically at runtime by assigning a value to it.

#### Example:
```javascript
let LAST_NAME = "lastname";
let fullname = {
    firstname: "James"
};

fullname[LAST_NAME] = "Anderson";

console.log(
    "My fullname is: " + fullname.firstname
    + " " + fullname.lastname
);
// Output: "My fullname is: James Anderson"
```

**How it works:**
- `fullname[LAST_NAME]` dynamically adds the `lastname` property after the object is created
- The value `"Anderson"` is assigned using a variable as the key
- This approach is useful when property names are determined after object creation

## Comparison of Methods

| Aspect | Method 1 (Computed Property Names) | Method 2 (Bracket Notation) |
|--------|-----------------------------------|------------------------------|
| **Timing** | Property created during object initialization | Property added after object creation |
| **Syntax** | Inside object literal `[expression]: value` | After creation `obj[expression] = value` |
| **Readability** | More declarative and concise | More imperative and verbose |
| **Use Case** | When property names known at creation time | When property names determined later |
| **Performance** | Slightly better (single operation) | Requires two operations |

## Advanced Use Cases and Patterns

### 1. Dynamic Configuration Objects

```javascript
function createConfig(baseKey, settings) {
    const config = {};
    
    Object.keys(settings).forEach(key => {
        config[`${baseKey}_${key}`] = settings[key];
    });
    
    return config;
}

const apiSettings = {
    timeout: 3000,
    retries: 5,
    endpoint: "/api/v1"
};

const config = createConfig("api", apiSettings);
console.log(config.api_timeout);   // 3000
console.log(config.api_retries);   // 5
console.log(config.api_endpoint);   // "/api/v1"
```

### 2. Dynamic Method Names

```javascript
const methods = ["get", "post", "put", "delete"];
const api = {};

methods.forEach(method => {
    api[method] = function(url, data) {
        console.log(`Making ${method.toUpperCase()} request to ${url}`);
        // Implementation would go here
    };
});

api.get("/users");    // "Making GET request to /users"
api.post("/users");   // "Making POST request to /users"
```

### 3. Computed Property Names with Symbols

```javascript
const privateMethod = Symbol("private");
const publicMethod = Symbol("public");

const obj = {
    [privateMethod]() {
        return "This is private";
    },
    [publicMethod]() {
        return "This is public";
    }
};

console.log(obj[publicMethod]()); // "This is public"
```

### 4. Template Literals in Computed Properties

```javascript
const user = {
    name: "John",
    age: 30,
    ["get" + "Name"]() {
        return this.name;
    },
    ["get" + "Age"]() {
        return this.age;
    },
    [`${user.name}_profile`]: {
        active: true,
        role: "admin"
    }
};

console.log(user.getName());           // "John"
console.log(user.getAge());            // 30
console.log(user["John_profile"]);     // { active: true, role: "admin" }
```

## Practical Applications

### 1. Form Data Processing

```javascript
function processFormData(formData) {
    const processed = {};
    
    Object.keys(formData).forEach(key => {
        const value = formData[key];
        const processedKey = `processed_${key}`;
        
        // Add validation or transformation logic
        processed[processedKey] = value.trim().toLowerCase();
    });
    
    return processed;
}

const formInput = {
    userName: "  JOHN DOE  ",
    userEmail: "  JOHN@EXAMPLE.COM  "
};

const result = processFormData(formInput);
console.log(result.processed_userName);  // "john doe"
console.log(result.processed_userEmail);  // "john@example.com"
```

### 2. Dynamic Component Properties

```javascript
function createComponent(type, props) {
    return {
        [`is${type.charAt(0).toUpperCase() + type.slice(1)}`]: true,
        [`render${type.charAt(0).toUpperCase() + type.slice(1)}`]() {
            return `<${type}>${props.content}</${type}>`;
        },
        props
    };
}

const button = createComponent("button", { content: "Click me" });
console.log(button.isButton);           // true
console.log(button.renderButton());     // "<button>Click me</button>"
```

### 3. API Response Mapping

```javascript
function mapApiResponse(response, mapping) {
    const mapped = {};
    
    Object.keys(mapping).forEach(responseKey => {
        const mappedKey = mapping[responseKey];
        mapped[mappedKey] = response[responseKey];
    });
    
    return mapped;
}

const apiResponse = {
    "user_id": 123,
    "user_name": "John Doe",
    "user_email": "john@example.com"
};

const fieldMapping = {
    "user_id": "id",
    "user_name": "name",
    "user_email": "email"
};

const user = mapApiResponse(apiResponse, fieldMapping);
console.log(user.id);     // 123
console.log(user.name);   // "John Doe"
console.log(user.email);  // "john@example.com"
```

## Edge Cases and Considerations

### 1. Non-String Property Names

```javascript
const obj = {
    [1]: "number key",
    [true]: "boolean key",
    [null]: "null key",
    [undefined]: "undefined key"
};

console.log(obj[1]);          // "number key"
console.log(obj["1"]);         // "number key" (converted to string)
console.log(obj[true]);        // "boolean key"
console.log(obj["true"]);      // "boolean key" (converted to string)
```

### 2. Symbol Keys

```javascript
const sym1 = Symbol("description");
const sym2 = Symbol("description");

const obj = {
    [sym1]: "value1",
    [sym2]: "value2"
};

console.log(obj[sym1]);        // "value1"
console.log(obj[sym2]);        // "value2" (different symbols)
```

### 3. Expression Evaluation Order

```javascript
let counter = 0;
const obj = {
    [`prop_${counter++}`]: "first",
    [`prop_${counter++}`]: "second"
};

console.log(obj.prop_0);      // "first"
console.log(obj.prop_1);      // "second"
console.log(counter);         // 2
```

## Performance Considerations

### 1. Expression Evaluation Cost
- Complex expressions in computed properties are evaluated at object creation
- Consider caching expensive computations if used multiple times

### 2. Memory Usage
- Computed property names are stored as strings in memory
- Be mindful when creating many dynamic properties with long names

### 3. Optimization Tips
```javascript
// Less efficient - expression evaluated multiple times
const obj = {
    [expensiveCalculation()]: value1,
    [expensiveCalculation()]: value2
};

// More efficient - cache the result
const key = expensiveCalculation();
const obj = {
    [key]: value1,
    [`${key}_2`]: value2
};
```

## Best Practices

1. **Use descriptive variable names** for computed property expressions
2. **Keep expressions simple** and readable within the brackets
3. **Consider using template literals** for string concatenation in property names
4. **Validate expressions** when they come from external sources
5. **Use computed properties** when property names are known at creation time
6. **Use bracket notation** when property names are determined after creation
7. **Document dynamic property patterns** for better code maintainability

## Common Pitfalls to Avoid

### 1. Reserved Keywords
```javascript
// This works
const obj = {
    ["class"]: "my-class",
    ["function"]: "my-function"
};

// Better approach for readability
const obj = {
    className: "my-class",
    functionName: "my-function"
};
```

### 2. Undefined Property Names
```javascript
let undefinedVar;
const obj = {
    [undefinedVar]: "value"  // Creates property named "undefined"
};

console.log(obj.undefined);  // "value"
```

### 3. Complex Expressions
```javascript
// Hard to read
const obj = {
    [users.find(u => u.active).id + "_profile"]: data
};

// Better approach
const activeUser = users.find(u => u.active);
const obj = {
    [`${activeUser.id}_profile`]: data
};
```

## Summary

Computed property names provide a powerful and flexible way to create dynamic JavaScript objects. By allowing expressions to be evaluated as property names at runtime, this ES6 feature enables more dynamic and adaptable code structures. Whether used for configuration objects, API mapping, or dynamic method creation, computed property names enhance JavaScript's object-oriented capabilities while maintaining clean and readable syntax when used appropriately.