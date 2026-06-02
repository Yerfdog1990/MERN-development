function getUsers() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve([
                { username: 'john', email: 'john@test.com' },
                { username: 'jane', email: 'jane@test.com' },
            ]);
        }, 1000);
    });
}

// Using named functions
function onFulfilled(users) {
    console.log(users);
}

const promise = getUsers();
promise.then(onFulfilled);

// Output (after 1 second):
// [
//   { username: 'john', email: 'john@test.com' },
//   { username: 'jane', email: 'jane@test.com' }
// ]