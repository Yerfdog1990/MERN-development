let success = true;

function getUsers() {
    // create a new Promise
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (success) {
                resolve([
                    { username: 'john', email: 'john@test.com' },
                    { username: 'jane', email: 'jane@test.com' },
                ]);
            } else {
                reject('Failed to fetch-get the user list.');
            }
        }, 1000);
    });
}

function onFulfilled(users) {
    console.log('Users:', users);
}

function onRejected(error) {
    console.log('Error:', error);
}

getUsers().then(onFulfilled, onRejected);

// If success = true  → Users: [ { username: 'john', ... }, ... ]
// If success = false → Error: Failed to fetch-get the user list.