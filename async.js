async function asin(){
    await console.log("one")
    await setTimeout(()=>{
        console.log("tow")
    },3000)
    await console.log("three")
}
asin()