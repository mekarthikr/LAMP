const isEven = (n) => {
    return n % 2 == 0;
  }
   
  let printMsg = (evenFunc, num) => {
    const isNumEven = evenFunc(num);
    console.log(`The number ${num} is an even number: ${isNumEven}.`)
  }
  printMsg(isEven, 4); 
