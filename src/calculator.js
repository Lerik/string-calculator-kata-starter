'use strict';

class Calculator {
  add(numbers) {
    if (numbers === '') 
      return 0;

    const listOfNumbers = numbers.split(',');

    if (listOfNumbers.length === 1)
      return parseInt(listOfNumbers[0]);

    return parseInt(listOfNumbers[0]) + parseInt(parseInt(listOfNumbers[1]));
  }
}

module.exports = Calculator;