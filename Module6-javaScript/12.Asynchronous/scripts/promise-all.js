let promise1 = new Promise(resolve => setTimeout(resolve, 1000));
let promise2 = new Promise(resolve => setTimeout(resolve, 2000));
let promise3 = new Promise(resolve => setTimeout(resolve, 3000));

// call each promise one by one
/*
promise1.then(() => console.log('Promise 1 resolved'));
promise2.then(() => console.log('Promise 2 resolved'));
promise3.then(() => console.log('Promise 3 resolved'));
*/

// call all promises at once using Promise.all
Promise.all([promise1, promise2, promise3])
    .then(values => console.log(values))
    .catch(error => console.error(error));
