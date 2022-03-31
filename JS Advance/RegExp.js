let anydigit=/\d/;
let anyalphachar=/\w/;
let date = /\d{1,2}-\d{1,2}-\d{4} \d{1,2}:\d{2}/;
let url=/^https:\/\/www\.[a-z]+\.com$/;
let link="https://www.aspiresys.com"
let phoneno="+919089899030"
let pno=/^\+91[6-9]{1}\d{9}$/;
console.log(anydigit.test("456"))
console.log(anydigit.test("hello"))
console.log(anyalphachar.test("as465"));
console.log(date.test("16-03-2022 11:45"));
console.log(url.test("https://www.aspiresys.com"));
console.log(pno.test(phoneno));