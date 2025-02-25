function hello(name){
 console.log('Hello ' + name);
}
// greeting('wasim ');

     function capittalize(name){
        let Upper=name.toUpperCase();
        console.log(Upper);
     }


  function processUserInput(process){ 
 let studentName =prompt('Enter your name:');
 process(studentName);
}

processUserInput(hello);
processUserInput(capittalize);

// let myfunction = function(){
//     console.log(' i am an  anonymous');
// }
// myfunction();
// setTimeout(myfunction,3000);