// Shorthand property method 1
function getObject(name, city){
    return {
        name, //name: name,
        city //city: city
    }
}

console.log(getObject('John', 'New York'));

// Shorthand property method 2
const name = "John";
const city = "New York";

console.log({name, city});