# JavaScript Object Constructors

## Understanding Object Constructors

An object in JavaScript is a collection of related data and functionality stored as key-value pairs, where values can be variables or functions (methods). Objects group related properties and behaviors into a single structure.

### Key Characteristics:
- **Data + Behavior**: Objects combine data (properties) and functionality (methods)
- **Blueprint Pattern**: Constructors provide a template for creating multiple similar objects
- **Instance Creation**: Each object instance has its own separate data while sharing the same structure
- **Non-primitive Types**: Objects are non-primitive types in JavaScript (unlike strings, numbers, booleans)

## Object Creation Methods

### Object Literal Syntax

```javascript
const GFG = {
    subject: "programming",
    language: "JavaScript"
};
```

**How it works:**
- `subject` is a key with value "programming"
- `language` is a key with value "JavaScript"
- Each key-value pair represents a property of the `GFG` object

## Object Constructor Functions

A constructor function in JavaScript is a special function used with the `new` keyword to create and initialize objects of a specific type.

### Constructor Function Syntax

```javascript
function Person(name, age) {
    this.name = name;
    this.age = age;
    this.sayHello = function() {
        console.log(`My name is ${this.name} and I am ${this.age} years old.`);
    };
}
```

### Creating Instances

```javascript
// Creating Instances with a Constructor
const p1 = new Person("Akash", 30);
const p2 = new Person("Anvesh", 25);

p1.sayHello(); // "My name is Akash and I am 30 years old."
p2.sayHello(); // "My name is Anvesh and I am 25 years old."
```

**Key Points:**
- `this` keyword refers to the object being created
- Each instance has its own separate data
- Both instances share the same methods but different data

## The this Keyword in Constructors

### this Behavior in Constructors

In constructor functions, `this` refers to the object being created, allowing methods to access and modify object properties.

```javascript
function Car(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
    this.displayInfo = function() {
        console.log(`${this.year} ${this.make} ${this.model}`);
    };
}

const myCar = new Car("Toyota", "Camry", 2020);
myCar.displayInfo(); // "2020 Toyota Camry"
```

## Constructor Patterns and Examples

### Example 1: Basic Constructor

```javascript
function GFG(a, b, c) {
    this.A = a;
    this.B = b;
    this.C = c;
    this.G = "GEEK";
}

const gfg = new GFG(1, 2, 3);
console.log(gfg.A, gfg.B, gfg.C, gfg.G); // 1 2 3 GEEK
```

### Example 2: Constructor with Methods

```javascript
function User(name, email) {
    this.name = name;
    this.email = email;
    this.loginCount = 0;
    
    this.login = function() {
        this.loginCount++;
        console.log(`${this.name} logged in. Login count: ${this.loginCount}`);
    };
    
    this.getProfile = function() {
        return {
            name: this.name,
            email: this.email,
            loginCount: this.loginCount
        };
    };
}

const user = new User("john@example.com", "John");
user.login();
user.login();
console.log(user.getProfile());
// { name: "john@example.com", email: "John", loginCount: 2 }
```

### Example 3: Constructor with Default Values

```javascript
function Product(name, price = 0, category = "general") {
    this.name = name;
    this.price = price;
    this.category = category;
    this.inStock = true;
    this.createdAt = new Date();
    
    this.displayInfo = function() {
        console.log(`Product: ${this.name}, Price: $${this.price}, Category: ${this.category}`);
    };
}

const product1 = new Product("Laptop");
const product2 = new Product("Mouse", 25, "electronics");
const product3 = new Product("Keyboard", 75, "electronics", true);

product1.displayInfo(); // Product: Laptop, Price: $0, Category: general
product2.displayInfo(); // Product: Mouse, Price: $25, Category: electronics
product3.displayInfo(); // Product: Keyboard, Price: $75, Category: electronics
```

### Example 4: Constructor with Validation

```javascript
function Student(name, age, grade) {
    // Validation
    if (!name || name.trim() === '') {
        throw new Error('Name is required');
    }
    if (!age || age < 0 || age > 120) {
        throw new Error('Age must be between 0 and 120');
    }
    
    this.name = name.trim();
    this.age = age;
    this.grade = grade;
    this.subjects = [];
    
    this.addSubject = function(subject) {
        this.subjects.push(subject);
        console.log(`${this.name} added subject: ${subject}`);
    };
    
    this.getAverage = function() {
        if (this.subjects.length === 0) {
            return this.grade;
        }
        return this.grade; // Simplified for example
    };
}

const student = new Student("Alice", 16, "A");
student.addSubject("Math");
student.addSubject("Science");
console.log(student.getAverage()); // "A"
```

## Advanced Constructor Concepts

### 1. Prototype and Inheritance

```javascript
function Animal(name) {
    this.name = name;
    this.species = "Animal";
}

Animal.prototype.speak = function() {
    console.log(`${this.name} makes a sound`);
};

function Dog(name, breed) {
    // Call parent constructor
    Animal.call(this, name);
    this.breed = breed;
}

// Inherit prototype
Dog.prototype = Object.create(Animal.prototype);
Dog.prototype.speak = function() {
    console.log(`${this.name} barks`);
};

const dog = new Dog("Buddy", "Golden Retriever");
dog.speak(); // "Buddy barks"
```

### 2. Static Properties and Methods

```javascript
function MathUtils() {
    // Static property
    MathUtils.PI = 3.14159;
}

// Static method
MathUtils.calculateArea = function(radius) {
    return MathUtils.PI * radius * radius;
};

console.log(MathUtils.PI); // 3.14159
console.log(MathUtils.calculateArea(5)); // 78.53975
```

### 3. Factory Functions

```javascript
function createUser(type) {
    switch (type) {
        case 'admin':
            return {
                permissions: ['read', 'write', 'delete'],
                level: 'admin'
            };
        case 'user':
            return {
                permissions: ['read'],
                level: 'user'
            };
        case 'guest':
            return {
                permissions: [],
                level: 'guest'
            };
        default:
            return {
                permissions: [],
                level: 'guest'
            };
    }
}

const admin = createUser('admin');
const user = createUser('user');
const guest = createUser('guest');

console.log(admin); // { permissions: ['read', 'write', 'delete'], level: 'admin' }
console.log(user);   // { permissions: ['read'], level: 'user' }
console.log(guest);  // { permissions: [], level: 'guest' }
```

### 4. Constructor with Private Properties

```javascript
function BankAccount(initialBalance) {
    // Private property using closure
    let balance = initialBalance;
    
    this.getBalance = function() {
        return balance;
    };
    
    this.deposit = function(amount) {
        if (amount > 0) {
            balance += amount;
            console.log(`Deposited: $${amount}. New balance: $${balance}`);
        }
    };
    
    this.withdraw = function(amount) {
        if (amount > 0 && amount <= balance) {
            balance -= amount;
            console.log(`Withdrew: $${amount}. New balance: $${balance}`);
        } else {
            console.log('Insufficient funds');
        }
    };
}

const account = new BankAccount(1000);
account.deposit(500);
account.withdraw(200);
console.log(account.getBalance()); // 1300
```

## Practical Applications

### Example 1: Configuration Objects

```javascript
function DatabaseConnection(config) {
    this.host = config.host || 'localhost';
    this.port = config.port || 5432;
    this.database = config.database || 'myapp';
    this.connected = false;
    
    this.connect = function() {
        console.log(`Connecting to ${this.host}:${this.port}/${this.database}`);
        this.connected = true;
    };
    
    this.disconnect = function() {
        if (this.connected) {
            console.log('Disconnecting from database');
            this.connected = false;
        }
    };
    
    this.query = function(sql) {
        if (!this.connected) {
            throw new Error('Not connected to database');
        }
        console.log(`Executing query: ${sql}`);
        // Query implementation would go here
    };
}

const dbConfig = {
    host: 'example.com',
    port: 3306,
    database: 'production'
};

const db = new DatabaseConnection(dbConfig);
db.connect();
db.query('SELECT * FROM users');
db.disconnect();
```

### Example 2: UI Components

```javascript
function Button(text, onClick) {
    this.text = text;
    this.onClick = onClick;
    this.element = null;
    
    this.render = function() {
        const button = document.createElement('button');
        button.textContent = this.text;
        button.addEventListener('click', () => {
            this.onClick.call(this);
        });
        this.element = button;
        return button;
    };
    
    this.mount = function(container) {
        const button = this.render();
        container.appendChild(button);
        console.log(`Button "${this.text}" mounted to container`);
    };
}

const myButton = new Button('Click me', function() {
    console.log('Button clicked!');
});

myButton.mount(document.body);
```

### Example 3: Data Models

```javascript
function TodoItem(text, priority = 'normal') {
    this.id = Date.now().toString();
    this.text = text;
    this.priority = priority;
    this.completed = false;
    this.createdAt = new Date();
    
    this.toggle = function() {
        this.completed = !this.completed;
        console.log(`Todo "${this.text}" marked as ${this.completed ? 'completed' : 'pending'}`);
    };
    
    this.update = function(newText) {
        this.text = newText;
        this.updatedAt = new Date();
        console.log(`Todo updated: ${this.text}`);
    };
}

const todo1 = new TodoItem('Learn JavaScript', 'high');
const todo2 = new TodoItem('Build project', 'normal');

todo1.toggle(); // "Todo "Learn JavaScript" marked as pending"
todo2.toggle(); // "Todo "Build project" marked as pending"

todo1.update('Master JavaScript');
```

## Constructor Best Practices

### 1. Use Descriptive Names

```javascript
// Good
function createUserAccount(username, email, password) {
    this.username = username;
    this.email = email;
    this.password = password;
}

// Avoid
function createUA(u, e, p) {
    this.u = u;
    this.e = e;
    this.p = p;
}
```

### 2. Validate Input

```javascript
function Product(name, price) {
    if (!name || typeof name !== 'string') {
        throw new Error('Product name must be a non-empty string');
    }
    if (!price || typeof price !== 'number' || price < 0) {
        throw new Error('Product price must be a positive number');
    }
    
    this.name = name;
    this.price = price;
}
```

### 3. Use Default Parameters

```javascript
function Car(make, model, year = new Date().getFullYear()) {
    this.make = make;
    this.model = model;
    this.year = year;
    this.color = 'black'; // Default color
}

const car1 = new Car('Toyota', 'Camry');
const car2 = new Car('Honda', 'Civic', 2022); // Explicit year
```

### 4. Separate Data from Behavior

```javascript
function Rectangle(width, height) {
    // Data properties
    this.width = width;
    this.height = height;
    
    // Behavior methods
    this.getArea = function() {
        return this.width * this.height;
    };
    
    this.getPerimeter = function() {
        return 2 * (this.width + this.height);
    };
}
```

### 5. Use Prototypes for Shared Methods

```javascript
function Shape(name) {
    this.name = name;
}

// Add methods to prototype (shared by all instances)
Shape.prototype.getArea = function() {
    throw new Error('getArea() must be implemented by subclass');
};

Shape.prototype.toString = function() {
    return `Shape: ${this.name}`;
};

function Circle(radius) {
    this.name = 'Circle';
    this.radius = radius;
}

// Inherit from Shape
Circle.prototype = Object.create(Shape.prototype);
Circle.prototype.getArea = function() {
    return Math.PI * this.radius * this.radius;
};

const circle = new Circle(5);
console.log(circle.getArea()); // 78.53975
console.log(circle.toString()); // "Shape: Circle"
```

## ES6 Class Syntax

Modern JavaScript (ES6+) provides class syntax as a cleaner way to create constructors:

```javascript
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    
    sayHello() {
        console.log(`Hello, I'm ${this.name} and I'm ${this.age} years old.`);
    }
    
    get info() {
        return `${this.name} (${this.age} years old)`;
    }
}

const person = new Person('Alice', 30);
person.sayHello(); // "Hello, I'm Alice and I'm 30 years old."
console.log(person.info); // "Alice (30 years old)"
```

## Common Constructor Patterns

### 1. Singleton Pattern

```javascript
function Database() {
    // Private instance
    let instance = null;
    
    function createInstance() {
        if (!instance) {
            instance = {
                connected: false,
                data: {}
            };
        }
        return instance;
    }
    
    // Public static method
    Database.getInstance = createInstance;
}

const db1 = Database.getInstance();
const db2 = Database.getInstance();
console.log(db1 === db2); // true (same instance)
```

### 2. Module Pattern

```javascript
const AppModule = (function() {
    let instance = null;
    
    function createInstance() {
        if (!instance) {
            instance = {
                initialized: false,
                start: function() {
                    this.initialized = true;
                    console.log('App started');
                }
            };
        }
        return instance;
    }
    
    return {
        getInstance: createInstance
    };
})();

const app = AppModule.getInstance();
app.start();
```

## Performance Considerations

### Constructor vs Factory Function

```javascript
// Constructor function
function CreateUser(name) {
    this.name = name;
    this.createdAt = new Date();
}

// Factory function
function createUser(name) {
    return {
        name: name,
        createdAt: new Date()
    };
}

// Performance test
console.time('constructor');
for (let i = 0; i < 10000; i++) {
    new CreateUser('User' + i);
}
console.timeEnd('constructor');

console.time('factory');
for (let i = 0; i < 10000; i++) {
    createUser('User' + i);
}
console.timeEnd('factory');
```

## Summary

JavaScript object constructors provide powerful patterns for creating structured, reusable code:

- **Blueprint Pattern**: Constructors provide templates for creating similar objects
- **Instance Management**: Each instance maintains its own state while sharing behavior
- **this Keyword**: Enables methods to access instance properties and methods
- **Inheritance**: Prototypes allow sharing methods across instances
- **Modern Syntax**: ES6 classes provide cleaner constructor syntax
- **Design Patterns**: Singleton, factory, and module patterns solve common problems
- **Best Practices**: Validation, defaults, and separation of concerns lead to maintainable code

Object constructors are fundamental to object-oriented programming in JavaScript, enabling the creation of complex, maintainable applications with clear structure and reusable functionality.
