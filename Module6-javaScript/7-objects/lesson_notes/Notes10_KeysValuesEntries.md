# JavaScript Object Keys, Values & Entries

## Understanding Object Methods

JavaScript offers built-in methods that simplify working with object data. `Object.entries()`, `Object.keys()`, and `Object.values()` help extract and manipulate object properties efficiently.

### Key Characteristics:
- **Built-in Methods**: Native JavaScript methods for object manipulation
- **Array Return**: All methods return arrays, enabling array operations
- **Enumerable Properties**: Work with own enumerable properties only
- **Order Preservation**: Maintain insertion order for string/symbol keys

## Object.keys()

The `Object.keys()` method returns an array of a given object's own enumerable property names, iterated in the same order that a normal loop would.

### Syntax
```javascript
Object.keys(obj)
```

### Basic Example

```javascript
const obj = {
    name: 'Prakash',
    age: 99,
    city: 'Mumbai'
};

console.log(obj);
// { name: 'Prakash', age: 99, city: 'Mumbai' }

const keys = Object.keys(obj);
console.log(keys);
// ['name', 'age', 'city']
```

**How it works:**
- Returns an array containing all enumerable property names
- Only includes own properties (not inherited)
- Maintains insertion order for string and symbol keys
- Useful for iteration and property existence checking

### Use Cases

```javascript
// 1. Property existence checking
const hasName = Object.keys(obj).includes('name');     // true
const hasCountry = Object.keys(obj).includes('country'); // false

// 2. Dynamic property access
function getProperty(obj, propertyName) {
    const keys = Object.keys(obj);
    if (keys.includes(propertyName)) {
        return obj[propertyName];
    }
    return undefined;
}

// 3. Object comparison
function hasSameKeys(obj1, obj2) {
    const keys1 = Object.keys(obj1);
    const keys2 = Object.keys(obj2);
    
    if (keys1.length !== keys2.length) return false;
    
    return keys1.every(key => keys2.includes(key));
}
```

## Object.values()

The `Object.values()` method returns an array of a given object's own enumerable property values, in the same order as provided by a `for...in` loop.

### Syntax
```javascript
Object.values(obj)
```

### Basic Example

```javascript
const obj = {
    name: 'Prakash',
    age: 99,
    city: 'Mumbai'
};

const values = Object.values(obj);
console.log(values);
// ['Prakash', 99, 'Mumbai']
```

**How it works:**
- Returns an array containing all enumerable property values
- Corresponds to the order of `Object.keys()`
- Useful for data processing and calculations
- Excludes inherited properties

### Use Cases

```javascript
// 1. Summing numerical values
const scores = {
    math: 85,
    science: 92,
    english: 78,
    history: 88
};

const totalScore = Object.values(scores).reduce((sum, score) => sum + score, 0);
console.log(totalScore); // 343

// 2. Finding maximum value
const data = {
    x: 10,
    y: 25,
    z: 5,
    w: 15
};

const maxValue = Math.max(...Object.values(data));
console.log(maxValue); // 25

// 3. Filtering values
const products = {
    product1: { price: 10, available: true },
    product2: { price: 20, available: false },
    product3: { price: 15, available: true }
};

const availableProducts = Object.values(products)
    .filter(product => product.available)
    .map(product => product.price);

console.log(availableProducts); // [10, 15]
```

## Object.entries()

The `Object.entries()` method returns an array of a given object's own enumerable `[key, value]` pairs.

### Syntax
```javascript
Object.entries(obj)
```

### Basic Example

```javascript
const obj = {
    name: 'Prakash',
    age: 99,
    city: 'Mumbai'
};

const entries = Object.entries(obj);
console.log(entries);
// [['name', 'Prakash'], ['age', 99], ['city', 'Mumbai']]
```

**How it works:**
- Returns an array of arrays, each containing `[key, value]` pair
- Maintains insertion order
- Useful for iteration, transformation, and object manipulation
- Each entry is a two-element array: `[key, value]`

### Use Cases

```javascript
// 1. Object transformation
const user = {
    firstName: 'John',
    lastName: 'Doe',
    age: 30
};

const transformed = Object.entries(user)
    .map(([key, value]) => {
        // Transform keys to camelCase
        const newKey = key.toLowerCase();
        return [newKey, value];
    })
    .reduce((obj, [key, value]) => {
        obj[key] = value;
        return obj;
    }, {});

console.log(transformed);
// { firstname: 'John', lastname: 'Doe', age: 30 }

// 2. Filtering properties
const config = {
    api: { endpoint: '/api/v1', timeout: 5000 },
    ui: { theme: 'dark', language: 'en' },
    debug: { enabled: false, level: 'error' }
};

const apiConfig = Object.entries(config)
    .filter(([key]) => key.startsWith('api'))
    .reduce((obj, [key, value]) => {
        obj[key] = value;
        return obj;
    }, {});

console.log(apiConfig);
// { api: { endpoint: '/api/v1', timeout: 5000 } }

// 3. Creating Maps from objects
const obj = {
    name: 'Alice',
    age: 25,
    city: 'New York'
};

const map = new Map(Object.entries(obj));
console.log(map.get('name')); // 'Alice'
console.log(map.get('age'));  // 25
```

## Practical Examples

### Example 1: Summing Values

```javascript
const obj = {
    x: 1,
    y: 2,
    z: 17
};

const values = Object.values(obj);
const sum = values.reduce((acc, val) => acc + val, 0);

console.log(sum); // 20
```

### Example 2: Checking for Property Existence

```javascript
const obj = {
    name: 'Prakash',
    age: 99,
    city: 'Mumbai'
};

const isPropertyFound = 'name' in obj;
console.log(isPropertyFound);     // true

const isAgePropertyFound = 'age' in obj;
console.log(isAgePropertyFound);     // true

const isCountryPropertyFound = 'country' in obj;
console.log(isCountryPropertyFound);     // false
```

### Example 3: Iterating Over an Object

```javascript
const obj = {
    name: 'Prakash',
    age: 99,
    city: 'Mumbai'
};

for (let key in obj) {
    console.log(`${key}: ${obj[key]}`);
}

// Output:
// name: Prakash
// age: 99
// city: Mumbai
```

## Advanced Usage Patterns

### 1. Object to Array Conversion

```javascript
const user = {
    id: 123,
    name: 'John Doe',
    email: 'john@example.com',
    settings: {
        theme: 'dark',
        notifications: true
    }
};

// Convert to different formats
const keysArray = Object.keys(user);
const valuesArray = Object.values(user);
const entriesArray = Object.entries(user);

console.log('Keys:', keysArray);
// ['id', 'name', 'email', 'settings']

console.log('Values:', valuesArray);
// [123, 'John Doe', 'john@example.com', { theme: 'dark', notifications: true }]

console.log('Entries:', entriesArray);
// [['id', 123], ['name', 'John Doe'], ['email', 'john@example.com'], ['settings', { theme: 'dark', notifications: true }]]
```

### 2. Data Processing Pipeline

```javascript
function processData(data) {
    return Object.entries(data)
        .map(([key, value]) => {
            // Process each key-value pair
            const processedKey = key.toLowerCase().trim();
            const processedValue = typeof value === 'string' ? value.trim() : value;
            
            return [processedKey, processedValue];
        })
        .filter(([key, value]) => {
            // Filter out empty or null values
            return value !== null && value !== undefined && value !== '';
        })
        .reduce((obj, [key, value]) => {
            obj[key] = value;
            return obj;
        }, {});
}

const rawData = {
    '  Name  ': 'John Doe',
    'AGE': 30,
    'EMAIL': 'john@example.com',
    'PHONE': '',
    'ADDRESS': null
};

const cleanData = processData(rawData);
console.log(cleanData);
// { name: 'John Doe', age: 30, email: 'john@example.com' }
```

### 3. Object Validation and Cleaning

```javascript
function validateObject(obj, requiredKeys = []) {
    const keys = Object.keys(obj);
    const entries = Object.entries(obj);
    
    const validation = {
        hasAllRequired: requiredKeys.every(key => keys.includes(key)),
        missingKeys: requiredKeys.filter(key => !keys.includes(key)),
        emptyValues: entries.filter(([key, value]) => 
            value === null || value === undefined || value === ''
        ).map(([key]) => key),
        duplicateKeys: keys.length !== new Set(keys).size
    };
    
    return {
        isValid: validation.hasAllRequired && validation.emptyValues.length === 0 && !validation.duplicateKeys,
        validation,
        cleanObject: Object.fromEntries(
            entries.filter(([key, value]) => value !== null && value !== undefined && value !== '')
        )
    };
}

const userData = {
    name: 'John',
    email: 'john@example.com',
    age: null,
    phone: ''
};

const validation = validateObject(userData, ['name', 'email']);
console.log(validation);
/*
{
  isValid: false,
  validation: {
    hasAllRequired: true,
    missingKeys: [],
    emptyValues: ['age', 'phone'],
    duplicateKeys: false
  },
  cleanObject: { name: 'John', email: 'john@example.com' }
}
*/
```

## Performance Considerations

### Method Performance Comparison

```javascript
const largeObj = {};
for (let i = 0; i < 10000; i++) {
    largeObj[`key${i}`] = `value${i}`;
}

// Performance test
console.time('Object.keys');
const keys = Object.keys(largeObj);
console.timeEnd('Object.keys');

console.time('Object.values');
const values = Object.values(largeObj);
console.timeEnd('Object.values');

console.time('Object.entries');
const entries = Object.entries(largeObj);
console.timeEnd('Object.entries');
```

### Memory Usage

```javascript
// Each method creates a new array
const obj = { a: 1, b: 2, c: 3 };

const keys = Object.keys(obj);     // New array
const values = Object.values(obj);   // New array
const entries = Object.entries(obj); // New array of arrays

// Consider memory usage for large objects
```

## Browser Compatibility

| Method | ES Version | Browser Support |
|---------|------------|-----------------|
| `Object.keys()` | ES5.1 (2009) | IE9+, all modern browsers |
| `Object.values()` | ES2017 (ES8) | Chrome 54+, Firefox 47+, Edge 14+ |
| `Object.entries()` | ES2017 (ES8) | Chrome 54+, Firefox 47+, Edge 14+ |

### Polyfills for Older Browsers

```javascript
// Object.values() polyfill
if (!Object.values) {
    Object.values = function(obj) {
        return Object.keys(obj).map(key => obj[key]);
    };
}

// Object.entries() polyfill
if (!Object.entries) {
    Object.entries = function(obj) {
        return Object.keys(obj).map(key => [key, obj[key]]);
    };
}
```

## Best Practices

### 1. Choose the Right Method

```javascript
const obj = { name: 'John', age: 30 };

// Use Object.keys() when you need property names
const keys = Object.keys(obj);
if (keys.includes('email')) {
    // Process email
}

// Use Object.values() when you only need values
const values = Object.values(obj);
const total = values.reduce((sum, val) => sum + (typeof val === 'number' ? val : 0), 0);

// Use Object.entries() when you need both keys and values
const entries = Object.entries(obj);
const filtered = Object.fromEntries(
    entries.filter(([key, value]) => typeof value === 'string')
);
```

### 2. Handle Edge Cases

```javascript
// Handle null/undefined objects
function safeObjectKeys(obj) {
    if (obj == null || typeof obj !== 'object') {
        return [];
    }
    return Object.keys(obj);
}

// Handle non-plain objects
function safeObjectEntries(obj) {
    if (obj == null || typeof obj !== 'object' || Array.isArray(obj)) {
        return [];
    }
    return Object.entries(obj);
}
```

### 3. Use with Array Methods

```javascript
const user = {
    name: 'John',
    age: 30,
    city: 'New York',
    country: 'USA'
};

// Filter properties
const stringProperties = Object.entries(user)
    .filter(([key, value]) => typeof value === 'string')
    .map(([key, value]) => key);

console.log(stringProperties); // ['name', 'city', 'country']

// Transform to query string
const queryString = Object.entries(user)
    .map(([key, value]) => `${encodeURIComponent(key)}=${encodeURIComponent(value)}`)
    .join('&');

console.log(queryString);
// name=John&age=30&city=New%20York&country=USA
```

## Common Use Cases

### 1. Configuration Processing

```javascript
const config = {
    api: {
        endpoint: 'https://api.example.com',
        timeout: 5000,
        retries: 3
    },
    ui: {
        theme: 'dark',
        language: 'en'
    },
    features: {
        analytics: true,
        debugging: false
    }
};

// Extract specific sections
const apiConfig = Object.fromEntries(
    Object.entries(config).filter(([key]) => key.startsWith('api'))
);

const uiConfig = Object.fromEntries(
    Object.entries(config).filter(([key]) => key.startsWith('ui'))
);

console.log(apiConfig);
// { endpoint: 'https://api.example.com', timeout: 5000, retries: 3 }
```

### 2. Data Validation

```javascript
function validateRequiredFields(data, requiredFields) {
    const dataKeys = Object.keys(data);
    const missingFields = requiredFields.filter(field => !dataKeys.includes(field));
    
    if (missingFields.length > 0) {
        throw new Error(`Missing required fields: ${missingFields.join(', ')}`);
    }
    
    return true;
}

const formData = {
    name: 'John',
    email: 'john@example.com'
    // Missing age
};

validateRequiredFields(formData, ['name', 'email', 'age']);
// Throws: Missing required fields: age
```

### 3. Object Transformation

```javascript
function normalizeObject(obj) {
    return Object.entries(obj)
        .map(([key, value]) => [
            key.toLowerCase().replace(/[^a-zA-Z0-9]/g, '_'),
            typeof value === 'string' ? value.toLowerCase().trim() : value
        ])
        .reduce((normalized, [key, value]) => {
            normalized[key] = value;
            return normalized;
        }, {});
}

const rawData = {
    'User-Name': 'John Doe',
    'Email-Address': 'JOHN@EXAMPLE.COM',
    'Phone-Number': '555-1234'
};

const normalized = normalizeObject(rawData);
console.log(normalized);
// { user_name: 'john doe', email_address: 'john@example.com', phone_number: '555-1234' }
```

## Comparison with Other Methods

| Method | Returns | Use Case | Performance |
|---------|---------|----------|------------|
| `Object.keys()` | Array of keys | Need property names | Fast |
| `Object.values()` | Array of values | Need only values | Fast |
| `Object.entries()` | Array of [key, value] pairs | Need both keys and values | Moderate |
| `for...in` | Direct iteration | Custom processing | Fastest |

## Summary

JavaScript's `Object.keys()`, `Object.values()`, and `Object.entries()` methods provide powerful tools for object manipulation:

- **Object.keys()**: Extract property names for iteration and validation
- **Object.values()**: Extract values for calculations and data processing
- **Object.entries()**: Extract key-value pairs for transformation and filtering
- **Array Integration**: All methods return arrays, enabling array operations
- **Order Preservation**: Maintain insertion order for predictable results
- **Modern JavaScript**: ES6+ features with good browser support

These methods are essential for modern JavaScript development, providing clean, functional approaches to object manipulation that replace verbose manual iteration and property access patterns.
