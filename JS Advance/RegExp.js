let anydigit=/\d/;
let anyalphachar=/\w/;
let date = /\d{1,2}-\d{1,2}-\d{4} \d{1,2}:\d{2}/;
console.log(anydigit.test("456"))
console.log(anydigit.test("hello"))
console.log(anyalphachar.test("as465"));
console.log(date.test("16-03-2022 11:45"));