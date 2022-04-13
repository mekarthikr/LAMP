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

let employees = [
    {
        firstName: 'John',
        lastName: 'Doe',
        age: 27,
        joinedDate: 'December 15, 2017'
    },

    {
        firstName: 'Ana',
        lastName: 'Rosy',
        age: 25,
        joinedDate: 'January 15, 2019'
    },

    {
        firstName: 'Zion',
        lastName: 'Albert',
        age: 30,
        joinedDate: 'February 15, 2011'
    }
];
employees.sort((a, b) => {
    return a.age - b.age;
});
console.log(employees)