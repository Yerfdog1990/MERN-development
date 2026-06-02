function getUser(){
    return [
        {username: 'john', email: 'john@test.com'},
        {username: 'jane', email: 'jane@test.com'}
    ];
}

function findUser(username){
    const users = getUser();
    const user = users.find(user => user.username === username);
    return user;
}

console.log(findUser('john'));
// { username: 'john', email: 'john@test.com' }