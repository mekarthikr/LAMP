//generates an iterator
let number=function* (){
    yield 1;
    yield 2;
    yield 3;
    yield 4;
    // for(let i=0;i<=3;i++)
    // {
    //     yield i;
    // }
}
let sum=0;
let iterator=number();
let next=iterator.next();
while(!next.done)
{
    sum+=next.value;
    next=iterator.next();
}
console.log(sum);