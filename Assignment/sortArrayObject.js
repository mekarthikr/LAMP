let array=[
    {
        firstName:"Jake",
        lastName:"Peralta"
    },
    {
        firstName:"Rosa",
        lastName:"Diaz"
    },
    {
        firstName:"Amy",
        lastName:"Santiago"
    },
    {
        firstName:"Gina",
        lastName:"Linetti"
    }
]
// let array1=array.map((object,index)=>{
//     let array2=array.map((obj,ind)=>{

//     })
// })

array.sort((a,b)=>{
    console.log(a.firstName,b.firstName)
    return a.firstName - b.firstName;
})
console.log(array)