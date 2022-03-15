"use strict";

if (true) {
    console.log(typeof area);        // throws error

    let area = function () { //since it is in let it wont run th program
        let a=10;
        let b=5;
        console.log(2*(a+b))
    }
    area();
}
console.log(typeof area);