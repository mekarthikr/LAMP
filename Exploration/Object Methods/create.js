const is={
    dead:false,
    NameAndState: function (){
        console.log(`${this.name} is dead and its ${this.dead}`)
    }
};
const Name=Object.create(is);
console.log(Name)
Name.dead=true;
Name.name="Eleven";
Name.NameAndState();
console.log(is.name);
console.log(is);
console.log(typeof Name.NameAndState())

//creates a new object with existing object as the prototype of the new object