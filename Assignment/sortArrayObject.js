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
];
array.sort((second,first) => {
    let fName=first.firstName;
    let sName=second.firstName;
    if (fName < sName) {
        return 1;
    }
    if (fName > sName) {
        return -1;
    }
    return 0;
});
console.log(array)