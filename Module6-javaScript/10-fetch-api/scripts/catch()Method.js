let success = false;

function getUsers() {
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

getUsers()
    .then((users) => {
        console.log(users);
    })
    .catch((error) => {
        console.log('Caught error:', error);
        // Caught error: Failed to fetch-get the user list.
    });