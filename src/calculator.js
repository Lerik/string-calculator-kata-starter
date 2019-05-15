'use strict';

class Calculator {
  add(nums) {
    return nums
      .split(',')
      .map(num => Number(num))
      .reduce((num, acc) => num + acc);
  }
}

module.exports = Calculator;