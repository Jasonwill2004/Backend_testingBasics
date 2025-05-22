// test/sample.test.js
import { expect } from 'chai';
import { add } from '../math.js';

describe('Math functions', () => {

    it('should return the sum of two numbers', () => {
        const result = add(2, 3);
        expect(result).to.equal(5);
    });

    it('should return the same number when adding zero', () => {
        const result = add(5, 0);
        expect(result).to.equal(5);
    });

    it('should handle negative numbers', () => {
        const result = add(-3, -2);
        expect(result).to.equal(-5);
    });

    it('should handle decimal values', () => {
        const result = add(2.5, 1.2);
        expect(result).to.be.closeTo(3.7, 0.01);
    });

    it('should return the type of the result as a number', () => {
        const result = add(2,3);
        expect(result).to.be.a('number');
    })

});
