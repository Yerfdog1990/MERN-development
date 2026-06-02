const render = () => console.log('Rendering UI...');

function getUsers(){
    return new Promise((resolve, reject)=>{
        const success = true;
        setTimeout(()=>{
            if(success){
                resolve([
                    { username: 'john', email: 'john@test.com' },
                    { username: 'jane', email: 'jane@test.com' },
                ]);
            } else {
                reject('Something went wrong.');
            }
        }, 1000);
    });
}
getUsers()
    .then((users) => {
        console.log(users);
    })
    .catch((error) => {
        console.log(error);
    })
    .finally(() => {
        render(); // Always runs — fulfilled or rejected
    });