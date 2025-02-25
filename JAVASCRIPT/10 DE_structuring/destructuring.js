let student = {
    firstName:'md wasim',
    lastName:'hasan',
    age:20,
    address:{
        house: 10,
        road:'mg road',
        city:'hyderabad',
        state:'telangana',

    },
    subjects:['math','science','english'],
    feespaid:true,

};
function printName(argstudent){
    let firstName = argstudent.firstName;
    let lastName = argstudent.lastName;
    console.log('name:',firstName,lastName);


}
printName(student);