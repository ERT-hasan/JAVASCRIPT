//  call by value example

let c= 10;
let d = c;
console.log(`c=${c},d=${d}`);
c = 25;
console.log(`c=${c},d=${d}`);
console.log('call by reference ');
let x ={value:10};
let y = x;
console.log(`x=${x.value},y=${y.value}`);
x.value=15;
console.log(`x=${x.value},y=${y.value}`);

