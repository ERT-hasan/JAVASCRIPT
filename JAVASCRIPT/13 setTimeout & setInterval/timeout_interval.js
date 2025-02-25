
(() =>{
    let counter =0;
    let increment =() =>console.log(++counter);
console.log('Start');
increment();

let response =setTimeout(() =>increment('timer'),5000);
console.log('response',response);
// setTimeout(() =>{clearTimeout(response)},1000);


console.log('End');


})();



