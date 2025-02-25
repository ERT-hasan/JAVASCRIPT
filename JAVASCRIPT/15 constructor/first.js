let student1 ={
    name :'md wasim bhai',
    age:25,
    course:'it',
    roll:1,

    printName(){
        console.log(this.name);
    },
}

let student2 ={
    name :'md nadeem bhai',
    age:23,
    course:'cse',
    roll:2,
}


function Student(name,age,course,roll){
    this.name = name;
    this.age = age;
    this.course  =  course;
    this.roll = roll;

    this.printName = function(){
        console.log(this.name);
    }
}
      let student3 = new Student('hari',21,'IT',3);


       console.log(student1);
       console.log(student2);
       console.log(student3);

       let student4 = new Student('wari',20,'ITi',4);
       console.log(student4);


  student1.printName();
  student3.printName();
  student4.printName();