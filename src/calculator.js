'use strict';

class Calculator {
  add(numbers) {
    return numbers === '' ? 0 : parseInt(numbers);
  }
}

module.exports = Calculator;