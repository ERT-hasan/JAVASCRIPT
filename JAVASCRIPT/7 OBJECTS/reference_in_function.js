function swap(a,b){
    console.log(`in function: before swap a =${a},b=${b}`);
    var temp = a;
    a =b;
    b = temp;
    console.log(`in function: after swap a =${a},b=${b}`);
}
let x = 10;
let y = 10;
console.log(`before swap x =${x},y=${y}`);
swap(x,y);
console.log(`after swap x =${x},y=${y}`);
