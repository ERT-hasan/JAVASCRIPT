// let obj ={
//     a:45,
//     x:98,
//     hello:'world',
// }
// let even =[2,4,6,8,10];
// console.log('even', even);

// let neweven =[...even];

// console.log('neweven', neweven);

// even.push(12);
// console.log(even);

// console.log(neweven.length);

let even = [1,2,3,4,5];
// let first = even[0];
// let second = even[1];


let [first,second,...bachgaye] = even;
console.log['first',first];
console.log['second',second];
console.log['bachgaye',bachgaye];