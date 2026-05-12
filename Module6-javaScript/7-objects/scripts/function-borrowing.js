// user 1 object
const user1 = {
    name: "John",
    age: 30
}

// user 2 object
const user2 = {
    name: "Jane",
    age: 25
}

// user 3 object
const user3 = {
    name: "John",
    age: 30,
    showName: function() { // implicit binding
        console.log(this.name);
    }
}

// non-parameterized function
function showName1() {
    console.log(this.name);
}

// parameterized function
function showName2(city, course) {
    console.log(this.name, city, course);
}

// call function borrowing
showName1.call(user1); // explicit binding
showName2.call(user2, "New York", "JavaScript");

// apply function borrowing
showName2.apply(user1, ["New York", "JavaScript"]);

// bind function borrowing
const showName3 = showName2.bind(user1, "New York", "JavaScript");
showName3();

// bind function borrowing
const showName4 = showName2.bind(user2, "New York");
showName4("JavaScript");

