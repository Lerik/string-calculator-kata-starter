'use strict';

var Calculator = require('../src/calculator.js');
require('chai').should();
const expect = require('chai').expect;

describe('The calculator', () => {

    var calculator;

    beforeEach(() => {
        calculator = new Calculator();
    });

    describe('can add numbers together', () => {
        describe('when the input is empty', () => {
            it('should return 0', () => {
                calculator.add("").should.equal(0);
            });
        });

        describe('when the input contains one number', () => {
            it('should return that same number', () => {
                calculator.add('7').should.equal(7);
            });
        });

        describe('when the input contains two numbers', () => {
            it('it should return the sum of those two numbers', () => {
                calculator.add('3,4').should.equal(7);
            });
        });

        describe('when the input contains multiple numbers', () => {
            describe('when using the default comma delimiter', () => {
                it('it should return the sum of all those numbers', () => {
                    calculator.add('3,4,5,10').should.equal(22);
                });
            });

            describe('when delimiting by comma and new line', () => {
                it('should allow new lines as a delimiter', () => {
                    calculator.add('3\n4,5\n10').should.equal(22);
                });
            });

            describe('when delimiting by a custom delimiter', () => {
                it('should allow any type of non-digit character as delimiter', () => {
                    calculator.add('//;\n1;2').should.equal(3);
                });
            });

            describe('when negative numbers are included', () => {
                it('should throw an exception telling which numbers are unsupported', () => {
                    var error = {
                        badNumbers: []
                    };
                    try {
                        calculator.add('-1,2,-3,4');
                    }
                    catch (ex) {
                        error = ex;
                    }
                    error.badNumbers[0].should.equal(-1);
                    error.badNumbers[1].should.equal(-3);
                });
            });
        });

    });
});