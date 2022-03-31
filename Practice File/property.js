function carName(brand,model)
{
    this.brand=brand;
    this.model=model;
}
carName.prototype.year=2000;
let car=new carName("bmw","x6")
console.log(car.year)


function sum(num)
{
    return num+num
}
function lets(val,add){
    let num=val;
    return add(num)
}

console.log(lets(5,sum))