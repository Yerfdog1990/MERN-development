let promise1 = new Promise(resolve => setTimeout(resolve, 1000));
let promise2 = new Promise(resolve => setTimeout(resolve, 2000));
let promise3 = new Promise(resolve => setTimeout(resolve, 3000));


// call all promises at once using Promise.all
Promise.allSettled([promise1, promise2, promise3])
    .then(values => console.log(values))
    .catch(error => console.error(error));
