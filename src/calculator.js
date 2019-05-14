'use strict';

class Calculator {
  add(nums) {
    // TO MUCH CODE - REFACTOR NOW
    var result = nums
      .split(',')
      .map(num => Number(num))
      .reduce((current, accumulate) => current + accumulate);

    return result;
  }
}

module.exports = Calculator;