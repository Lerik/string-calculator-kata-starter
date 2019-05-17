'use strict';

class Calculator {
  _checkForNegativeNumbers(numbers) {
    var badNumbers = numbers.filter(num => num < 0);

    if (badNumbers.length > 0) {
      throw { badNumbers };
    }
  }

  add(numsAsStr) {
    var delimiter = ',';

    if (numsAsStr.startsWith('//')) {
      const thirdCharacter = numsAsStr[2];
      delimiter = thirdCharacter;
    }

    var numbers = numsAsStr
      .replace(`//${delimiter}\n`, '')
      .split(delimiter)
      .flatMap(item => item.split('\n'))
      .map(num => Number(num));
      
    this._checkForNegativeNumbers(numbers);
    return numbers.reduce((num, acc) => num + acc);
  }
}

module.exports = Calculator;