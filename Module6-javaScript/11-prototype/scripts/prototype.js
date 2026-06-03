const admin ={
    isAdmin: true
}

const user = {
    name: 'John',
    role: 'admin',
    __proto__: admin
}

console.log(user.isAdmin); // true
console.log(user.role); // admin