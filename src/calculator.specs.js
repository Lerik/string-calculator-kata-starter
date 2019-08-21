'use strict';

var Calculator = require('../src/calculator.js');
var should = require('chai').should();

describe('The calculator', () => {
    
  describe('WHEN adding some numbers', () => {
    const calculator = new Calculator();

    describe('AND parameter is empty', () => {
      it('SHOULD return 0', () => {
        const result = calculator.add("");
        result.should.equal(0);
      });
    });

    describe('AND parameter is one number', () => {
      it('SHOULD return the same number', () => {
        const result = calculator.add("1");
        result.should.equal(1);
      });
    });

    describe('AND parameter is two numbers separated by comma', () => {
      it('SHOULD return the sum of both numbers', () => {
        const result = calculator.add("1,2");
        result.should.equal(3);
      });
    });

    describe('AND parameter is more than two numbers separated by comma', () => {
      it('SHOULD return the sum of all numbers', () => {
        const result = calculator.add("1,2,3");
        result.should.equal(6);
      });
    });
  });
  
});