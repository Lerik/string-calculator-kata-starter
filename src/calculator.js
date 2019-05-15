'use strict';

class Calculator {
  add(nums) {
    return nums
      .split(',')
      .flatMap(item => item.split('\n'))
      .map(num => Number(num))
      .reduce((num, acc) => num + acc);
  }
}

module.exports = Calculator;