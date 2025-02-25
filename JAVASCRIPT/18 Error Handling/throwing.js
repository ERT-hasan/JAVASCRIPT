function divide(a,b){
    if(b===0){
        throw new Error('divide by zero');
       
    }
    return a/b;

}
console.log(divide(6,3));
console.log(divide(3,6));
try{
    console.log(divide(3,0));
}
catch(error){
    console.log('error occured');
    console.log(error.message);
}


