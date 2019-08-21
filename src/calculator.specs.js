'use strict';

var Calculator = require('../src/calculator.js');
var should = require('chai').should();

describe('The calculator', () => {
    
  describe('WHEN adding some number', () => {
    const calculator = new Calculator();

    describe('AND parameter is empty', () => {
      it('SHOULD return 0', () => {
        const result = calculator.add("");
        expect(result).toEqual(-1);
      });
    });
  });
  
});