const object={
    number:20
}
Object.freeze(object);
object.number=60;
console.log(object.number)
//using freeze we cannot modify the values of the object