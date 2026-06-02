function getUsers() {
    let users = [];

    setTimeout(() => {
        // This runs AFTER getUsers() has already returned
        users = [
            { username: 'john', email: 'john@test.com' },
            { username: 'jane', email: 'jane@test.com' },
        ];
    }, 1000);

    return users; // Returns empty array immediately
}

function findUser(username) {
    const users = getUsers(); // Gets empty array
    const user = users.find((user) => user.username === username);
    return user;
}

console.log(findUser('john')); // undefined