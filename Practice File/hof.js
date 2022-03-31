let sum= function(a,b){
    return a+b;
}
    function add(plus){  //higher order function
        let a=plus(4,6)
        return a;
    }


console.log(add(sum))

let number=[1,2,3,4,5,6,7];
// let num = number.map((value,index) => value +1 );
// console.log(num);
let res=number.slice(2,4);
console.log(res,number);
const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.splice(2, 1, "Lemon", "Kiwi");
console.log(fruits)