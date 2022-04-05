let name="karthik";
let arrayName=Array.from(name);
let arrayName1=Array.from((name),(value)=>{
    return value+" change"
})
console.log(arrayName);
console.log(arrayName1);
//splits the string into a array