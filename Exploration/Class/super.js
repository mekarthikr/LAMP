class Parent{
    constructor(name){
        this.name = name;
    }
    set name(name){
        this._name = name;
    }
    get name(){
        return this._name
    }
    none() {
        console.log("NONE")
    }
}
class Child extends Parent{
    constructor(name,age){
        super(name);
        this._age = age;
        super.none();
    }
    set age(age){
        this._age = age;
    }
    get age(){
        return this._age;
    }
}
const ob = new Child("Karthik",21);
console.log(ob.name+" "+ob.age)
ob.age = 22;
console.log(ob.name+" "+ob.age)