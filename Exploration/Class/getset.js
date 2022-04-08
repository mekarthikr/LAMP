class Account{
    constructor(name){
        this.name = name;
    }
    get name(){
        return this.nam.toUpperCase();
    }
    set name(newName){
        this.nam = newName;
    }
}
let user = new Account("Mike");
user.name = "Eleven"
console.log(user.name)