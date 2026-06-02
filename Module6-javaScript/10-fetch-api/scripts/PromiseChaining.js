function getUsers() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve([
                { username: 'john', email: 'john@test.com' },
                { username: 'jane', email: 'jane@test.com' },
            ]);
        }, 1000);
    });
}

function findUser(users, username) {
    return new Promise((resolve, reject) => {
        const user = users.find((u) => u.username === username);
        if (user) {
            resolve(user);
        } else {
            reject(`User '${username}' not found.`);
        }
    });
}

// Chaining promises
getUsers()
    .then((users) => {
        return findUser(users, 'john')
    })
    // Print all details
    .then((user) => {
        console.log('Found user:', user); // Found user: { username: 'john', email: 'john@test.com' }
        return user;
    })
    // Print username only
    .then((user) => {
        console.log('Username:', user.username); // Username: john
        return user;
    })
    // Print email only
    .then((user) => {
        console.log('Email:', user.email);
        // Email: john@test.com
    })
    .catch((error) => {
        console.log('Error:', error);
    })
    .finally(() => {
        console.log('Done.');
    });