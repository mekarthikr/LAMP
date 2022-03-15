const square = function(num){ //traditional way
    return num*num;
}

console.log("square result = "+square(5));

const sq = (num) => num*num; //concised way of coding 

console.log("square of the value is = "+square(5));