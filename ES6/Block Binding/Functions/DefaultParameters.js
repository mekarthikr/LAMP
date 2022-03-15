
let number = 5;

function getNum() {
    return number++;
}

function add(first, second = getNum()) {
    return first + second;
}

console.log(add(1, 1));
console.log(add(1));
console.log(add(1));