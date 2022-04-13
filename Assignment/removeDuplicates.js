let array1=[1,2,5,4,6,3,8,9,2,5,4,3]
let array2=[1,5,4,6,5,4,9,0,5,2,1,4]
let array=array1.filter((value)=>{
    return array2.indexOf(value)===-1;
})
console.log(array)