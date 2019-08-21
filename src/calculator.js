"use strict";

class Calculator {
  add(number) {
    if (number.length == 0) {
      return 0;
    }
    return parseInt(number);
  }
}

module.exports = Calculator;
