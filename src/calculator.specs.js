'use strict';

var Calculator = require('../src/calculator.js');
var should = require('chai').should();

describe('The calculator', () => {

    var calculator;

    beforeEach(() => {
        calculator = new Calculator();
    });

    describe('can add some numbers', () => {
        it('should accept an empty string and return 0', () => {
            var result = calculator.add("");
            result.should.equal(0);
        });
    });

});