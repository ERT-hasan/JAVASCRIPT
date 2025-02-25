function outer(){
    const v = 'i am out side';
    function inner(){
        console.log(v);
    }
    return inner;
}
const closure =outer();
closure();
function count(){
    // private variable
     let count = 0;   
    return function(){
        count += 1;
        return count;
    };
}
const counter = count();
console.log(counter());

const counter2 = count();  
console.log(counter2());


// object closure

// function outer(){
//     const obj = {name: "md wasim"};
//     function inner(){
//         console.log(obj.name);
//     }
//     return inner;
// }
// const closure = outer();
// closure();

//  array closure function

// function outer(){
//     const arr =[1,2,3,4,];
//     function inner(){
//         console.log(arr.length[0]);
//     }
//     return inner;
// }
// const closure = outer();
//  closure();

