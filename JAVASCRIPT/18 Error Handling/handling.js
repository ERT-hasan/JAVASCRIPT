let parseStringToJson = (jsonString) =>{
    return JSON.parse(jsonString);
}

let obj ={
    a:1,
    b:2,
    x:3,

}
let objString = JSON.stringify(obj);

let newobj = parseStringToJson(objString);
console.log(newobj);


let newobj2;
try{
     newobj2 =parseStringToJson('{"A":1}');
} catch(error){
    console.log('error occured');
console.log(error);
}
console.log(newobj2);

