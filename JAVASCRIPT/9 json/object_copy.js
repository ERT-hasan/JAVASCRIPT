let obj ={
    a:65,
    b:18,
    c:'hello wasim',
}
console.log('obj',obj);
let objCopy =copyMyObject(obj);
console.log('obj copy',objCopy);

 objCopy.a = 100;

 console.log('obj',obj);
console.log('obj copy',objCopy);

function copyMyObject(obj){
    let obj2 = obj;
    return obj2;
    // let objString = JSON.stringify(obj);
    // let obj2 = JSON.parse(objString);
    // return obj2;
}
