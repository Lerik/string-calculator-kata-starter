"use strict";

class Calculator {
  add(numbers) {
    if (numbers.length == 0) {
      return 0;
    }

    const numbersAsArray = numbers.split(',');

    if (numbersAsArray.length == 1) {
      return parseInt(numbersAsArray[0]);
    }

    return parseInt(numbersAsArray[0]) + parseInt(numbersAsArray[1]);
  }
}

module.exports = Calculator;
