// // normal function

// function add1(first,second){
//     return first + second; 
// }
// console.log(add1(4,5));

// // anonymous function
// const add2 = function(first,second){
//     return first+second;
// }
// console.log(add2(7,8));

// //  arrow function 
// const add3 = (first,second) =>{
//     return first + second;
// }
// console.log(add3(9,8));
function reverse(n){
    n = n +"";
    return n.split("").reverse().join("");
}
console.log(Number(reverse(32243)));