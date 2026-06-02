function getUsers() {
    return [
        { username: 'john', email: 'john@test.com' },
        { username: 'jane', email: 'jane@test.com' },
    ];
}

function findUser(username, callback) {
    const users = getUsers();
    const user = users.find(user => user.username === username);
    callback(user);
}

findUser('john', (user) => {
    console.log(user);
});
