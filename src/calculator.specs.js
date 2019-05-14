'use strict';

var Calculator = require('../src/calculator.js');
var should = require('chai').should();

describe('The calculator', () => {

    var calculator;

    beforeEach(() => {
        calculator = new Calculator();
    });

    describe('METHOD: add', () => {
        describe('WHEN the parameter is an empty string', () => {
            it('should return 0', () => {
                calculator.add("").should.equal(0);
            });
        });

        describe('WHEN the parameter contains one number', () => {
            it('should return that same number', () => {
                calculator.add('7').should.equal(7);
            });
        });
    });


});