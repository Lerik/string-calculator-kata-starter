'use strict';

class Calculator {
  add(nums) {
    var numsFormatted = nums
      .split(',')
      .map(num => Number(num));

    if (numsFormatted.length === 1) {
      return numsFormatted[0];
    } else {
      return numsFormatted[0] + numsFormatted[1];
    }
  }
}

module.exports = Calculator;