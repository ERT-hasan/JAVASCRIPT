class Cat{
 constructor(name){
    this.name = name;
    this.legs = 4;
 }
 move(){
    console.log(`the cat is moving on ${this.legs} your legs.`);
 }
 speak(){
    console.log(`${this.name} makes a noise .`);
 }
}

let smriti = new Cat("smriti");
smriti.move();
smriti.speak();

class lion extends Cat{
   eat(){
      console.log(`${this.name}  eats meet.`);
   }
   speak(){
      console.log(`${this.name} roars.`);
   }

}
let simba  = new lion("simba");

simba.move();
simba.speak();
simba.eat();