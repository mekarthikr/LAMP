class Stranger1{
    constructor(name){
        this.name = name;
    }
    display(){
        return `Hi ${this.name} `
    }
}
class Stranger2 extends Stranger1{
    display(){
        return `Hi ${this.name} `
    }
}
const user = new Stranger1("Mike");
const user2 = new Stranger2("Eleven")
console.log(user.display());
console.log(user2.display())