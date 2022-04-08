class Person{
    constructor(name){
        this.name = name;
    }
}
let user = new Person("Mike")
user.age = 21;
let aUser = new Person("Steve");
console.log(user.name+" "+user.age)
console.log(aUser.name+" "+aUser.age)
Person.prototype.age = 21; 
console.log(user.name+" "+user.age)
console.log(aUser.name+" "+aUser.age)
function construct(name,age,color){ 
    this.name = name;
    this.age = age;
    this.color = color;
}
construct.prototype.gender = "male"
const ob = new construct("ST",21,"white");
console.log(ob.gender)