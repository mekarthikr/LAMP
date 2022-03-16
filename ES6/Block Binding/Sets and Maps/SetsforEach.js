let set = new Set([1, 2, 3, 4, 5, 6]);

set.forEach(function(value, key, ownerSet) {
    console.log(key + " " + value);
    console.log(ownerSet === set);
});