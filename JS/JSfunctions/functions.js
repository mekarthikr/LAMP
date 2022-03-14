const car=function(){
    console.log("BMW");
}
const power =function(b,e){
    let val=1;
    for(let count=0;count<e;count++)
    {
        val=val*b;
    }
    return val;
}
car();
console.log(power(2,10));