function iterator()
{
    let sum=0;
    let numbers=[1,2,3,4];
    numbers.forEach(x => {
        sum=sum+x;
    });
    console.log(sum);
    sum=0;
    //iterator
    let iterator=numbers.values();
    console.log(iterator);
    let element=iterator.next();
    console.log(element);
    while(!element.done)
    {
        sum=sum+element.value;
        element=iterator.next();
       console.log(element);
    }
    console.log(sum);
}
iterator();