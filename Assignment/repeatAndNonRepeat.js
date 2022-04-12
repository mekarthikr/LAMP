let array=[1,2,3,5,2,6,9,4,2,8,5,1,6,2,4,3]
let unique=array.find((element,index)=>{
    array1=array.slice(index+1,array.length)
    if(!array1.includes(element))
    {
        return element;
    }
});
console.log(unique);