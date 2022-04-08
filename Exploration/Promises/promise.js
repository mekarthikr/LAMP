console.log("Print statement before promise")
const alphaRegex = /^[a-zA-Z]+$/
let name = 4
const pr = new Promise((resolve,reject)=>{
    if(alphaRegex.test(name) == true)
    resolve("Valid Name")
    else
    reject("Invalid Name")
})
console.log("Print statement after promise")
pr.then((success)=>{
    console.log(success)
}).catch((failure)=>{
    console.log(failure)
})