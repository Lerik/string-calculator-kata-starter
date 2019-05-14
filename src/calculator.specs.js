'use strict';

var Calculator = require('../src/calculator.js');
var should = require('chai').should();

describe('The calculator', () => {
    var calculator;

    beforeEach(()=> {
        calculator = new Calculator();
    });
    
    describe('METHOD: add', () => {
        describe('WHEN the parameter is an empty string', () => {
            it('should return 0', () => {
                calculator.add('').should.equal(0);
            });
        });

        describe('WHEN the parameter is one number', () => {
            it('should return the same parameter', () => {
                calculator.add(5).should.equal(5);
            });
        });

        describe('WHEN the parameter have two numbers', () => {
            it('should return the sum of both numbers', () => {
                calculator.add('4,10').should.equal(14);
            });
        });
    });
});