let age=[32,56,22,10,19,28]
let underAge=age.find((value)=>{
    return value<18
})
console.log(underAge)
//returns first element that satisfies the condition