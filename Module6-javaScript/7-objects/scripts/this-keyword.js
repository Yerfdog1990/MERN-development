const user1 = {
    name: "Godfrey",
    showName: function() {
        console.log("user 1: " + this.name);
    }
}
user1.showName();
const user2 = {
    name: "Godfrey",
    showName() {
        console.log("user 2: " + this.name);
    }
}
user2.showName();

const user3 = {
    name: "Godfrey",
    showName() {
        console.log("user 3: " + this.name);
        function innerFunction(){
            console.log("user 3 inner function: " + this.name);
        }
        innerFunction();
    }
}
user3.showName();

const user4 ={
    name: "Godfrey",
    showName: () => {
        console.log("Arrow function inside object: " + this.name);
    }
}
user4.showName();

const showName = () => {
    console.log("Arrow function outside object: " + this.name);
}
showName();

function showName1(){
    console.log("Regular function outside object: " + this.name);
}
showName1();

