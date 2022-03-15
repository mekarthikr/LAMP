var add = new Function("first", "second = first","return first + second");
var pickFirst = new Function("...args", "return args[0]");
console.log(add(1, 1));
console.log(add(1));    
console.log(pickFirst(1, 2));