// console.log('object equality');
// let a ={firstName:'md wasim'};
// let b =a;
// console.log(a==b);
// console.log(a===b);
let student = {
    firstName:'md wasim',
    lastName:'hasan',
    age:20,
    address:{
        house: 10,
        road:'mg road',
        city:'hyderabad',
        state:'telangana',

    },
    subjects:['math','science','english'],
    feespaid:true,

};
student.friends =[student];
console.log(JSON.stringify(student));

// let student1 = {
//     firstName:' nadeem',
//     lastName:'alam',
//     age:21,
//     address:{
//         house: 19,
//         road:'pilakhwara road',
//         city:'mumbai',
//         state:'mahrastra',

//     },
//     subjects:['ca','mba','mca'],
//     feespaid:true,

// };
// document.write(student1.firstName);


//  objects

// let obj = {
//     name :'md wasim bhai'
// };
// let user = obj;
// user.name="bruce"
// console.warn(obj)


//  sallow copy
let obj = {
    name :'md wasim bhai'
};
let user = Object.assign({},obj);
user.name="bruce"
console.warn(obj)
console.warn(user)
