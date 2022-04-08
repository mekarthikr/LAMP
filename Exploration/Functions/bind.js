let user1 = {
    gender:"Boy",
    show:function(name){
        return `gender = ${this.gender} , name = ${name}`
    }
}
let user2 = {
    gender:"Girl"
}
const res = user1.show("Mike");
console.log(res)
const functionref = user1.show.bind(user2) 
/*bind returns function */
console.log(functionref("Eleven"))