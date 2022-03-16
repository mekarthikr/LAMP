const arrayOfNumbers = [1, 2, 3, 4];
 
const sum = arrayOfNumbers.reduce((previousValue, currentValue) => { 
    console.log(previousValue,currentValue);
    return previousValue + currentValue;
});
 
console.log(sum); // 10
//reduce method iterates througha a array and return a single value