function jsonStringToJson(str){
    
    try{
        return JSON.parse(str);
    } catch(error){
       console.log('error occured');
       console.log('error.message');
       return {};
    } finally{
        console.log('finally');
    }

}
let newobj2 = jsonStringToJson('{"A":1}');
console.log('obj2',newobj2);