let number=/^\+91[6-9]{1}[0-9]{9}$/;
let num="+9150898030"
console.log(number.test(num))
let name="Karthik R"
let mname=name.split(" ")
console.log(mname[0]);

//  function name{
//      function func1()

//      function func2()
// }
let a=null;
// console.log(b)
let pass=true;
let array=[80,97,67,31,22];
array.forEach(values=>{
    if(values<40)
    {
        pass=false;
    }
})
if(pass)
{
    console.log("he has pass")
}
else{
    console.log("he has failed")
}
// slice(0,5)

class sample{
    constructor()
    {

    }
}