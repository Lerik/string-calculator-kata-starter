"use strict";

class Calculator {
  add(numbers) {
    if (numbers.length == 0) {
      return 0;
    }

    const numbersAsArray = numbers.split(',');

    let result = 0;

    numbersAsArray.forEach(number => {
      result += parseInt(number);
    });

    return result;
  }
}

module.exports = Calculator;
