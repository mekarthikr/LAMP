function getValue(value) {
    return value + 5;
}
function add(first, second = getValue(first)) {
    return first + second;
}
function multiply(first, second=first) {
    return first * second;
}
console.log(add(1, 1));     
console.log(add(1));
console.log(multiply(1, 1));        
console.log(multiply(undefined, 1));