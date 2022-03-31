const power = base => {
  let exponent=10;
    let result = 1;
    for (let count = 0; count < exponent; count++) {
      result *= base;
    }
    return result;
  };
console.log(power(2));

