const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        const success = true;

        if (success) {
            resolve('Operation completed successfully!');
        } else {
            reject('Something went wrong.');
        }
    }, 1000);
});