// create a set
let map1 = new Map();

// insert key-value pair
map1.set('info', {name: 'Jack', age: 26});
console.log(map1.get("info").name); 
// Map {"info" => {name: "Jack", age: 26}}
// let map2=new Map(map1.get("info"));
// console.log(map2)

map1={};
map1["name"]="karthik";
console.log(map1)
// console.log(map1.get('name'))