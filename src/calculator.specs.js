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
    });


});