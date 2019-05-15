'use strict';

class Calculator {
  add(nums) {
    var delimiter = ',';

    if (nums.startsWith('//')) {
      const thirdCharacter = nums[2];
      delimiter = thirdCharacter;
    }

    return nums
      .replace(`//${delimiter}\n`, '')
      .split(delimiter)
      .flatMap(item => item.split('\n'))
      .map(num => Number(num))
      .reduce((num, acc) => num + acc);
  }
}

module.exports = Calculator;