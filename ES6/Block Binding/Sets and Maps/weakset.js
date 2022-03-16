function weakset()
{
//can't use size,forEach
var set=new WeakSet();
var item={name:'Joe'};
set.add(item);
console.log(set);
}
weakset();