let req = true
const pro = new Promise((resolve,reject)=>{
    if(req)
    resolve("Success")
    else
    reject("Failed")
})
// pro.then((msg)=>{
//     console.log(msg)
// })
// pro.then((msg)=>{
//     console.log(msg);
// })
pro.then(
    (msg)=>{
        console.log(msg);
    },
    (msg)=>{
        console.log(msg);
    }
)