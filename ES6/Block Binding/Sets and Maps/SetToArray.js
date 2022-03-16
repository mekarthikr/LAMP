let set = new Set([1, 2, 3, 4, 5, 6]);
array=[...set];
console.log(array);
function eliminateDuplicates(items) {
    return [...new Set(items)];
}
let numbers = [1, 2, 3, 3, 3, 4, 5],
    noDuplicates = eliminateDuplicates(numbers);
console.log(noDuplicates); 