'use strict';

var Calculator = require('../src/calculator.js');
var should = require('chai').should();

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
            it('it should return the sum of all those numbers', () => {
                calculator.add('3,4,5,10').should.equal(22);
            });
        });

        describe('when delimiting an unknown quantity of numbers by comma and new line to get the sum', () => {
           it('should allow new lines as a delimiter', () => {
               calculator.add('3\n4,5\n10').should.equal(22);
           }); 
        });

        describe('when delimiting an unknown quantity of number by a predetermined delimiter', () => {
            it('should allow any type of non-digit character as delimiter', () => {
                calculator.add('//;\n1;2').should.equal(3);
            });
        });
    });


});