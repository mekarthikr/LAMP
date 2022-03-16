let set = new Set();
set.add(5);
set.add("5");
set.add("8");
set.add(5);//ignored
console.log(set.size);