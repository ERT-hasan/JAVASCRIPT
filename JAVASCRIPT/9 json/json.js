let user = {
    firstName : 'md wasim ',
    lastName  : 'hasan',
    age: 28,
    email: 'wasim@123',
    hobbies:['music','sports'],

};
console.log(user);

let userJSON = JSON.stringify(user);
console.log(userJSON);

console.log(typeof userJSON);


let newUser=JSON.parse(userJSON);
console.log(newUser);
console.log(typeof newUser);