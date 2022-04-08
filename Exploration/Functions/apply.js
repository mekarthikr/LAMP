
let user1 = {
    gender:"Boy",
    show:function(name){
        console.log(`gender = ${this.gender} , name = ${name}`)
    }
}
let user2 = {
    gender:"Girl"
}
user1.show("Mike");

user1.show.apply(user2,["Eleven"]) 
/*same as call but in params section pass as array */