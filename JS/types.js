var number=13;
var string="hello";
var sent="first line\nsecond line";
var newl="next line character\"\\n\"";
var backtick=`power of 2 is ${2*2}`;
console.log(typeof number)
console.log(typeof string)
console.log((100*2)+4)
console.log(0/0); //NaN
console.log(typeof 100/0); //infinity
console.log(0/100); //0
console.log(sent);
console.log(newl);
if(Infinity==Infinity)
{
    console.log(true);
}
else
{
    console.log(false)
}
console.log(backtick);

let arr = [1,2,3]
let[x,y,z] = [...arr]
console.log(x,y,z)
let set1=new Set([1,2,3,4,5]);//set to array
console.log(set1)
let array= [...set1]
console.log(array);

let set2=new Set()
set2=[...arr];
console.log(set2)
let set3 = new Set(arr);
console.log(set3);