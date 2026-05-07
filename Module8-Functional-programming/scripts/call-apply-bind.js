let student = {
    name: "John",
    age: 25,
    course: "Computer Science",
    showDetails() {
        console.log(this.name, this.age, this.course);
    }
}

student.showDetails();


// function

function registerStudent(name, age, course) {
    console.log(`${name}, ${age}, ${course}`);
}

// call
registerStudent.call(student, "John", 25, "Computer Science");

// apply
registerStudent.apply(student, ["John", 25, "Computer Science"]);

// bind
let registerStudent1 = registerStudent.bind(student);
registerStudent1("John", 25, "Computer Science");
