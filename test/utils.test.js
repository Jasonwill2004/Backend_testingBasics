import { expect } from 'chai';
import { add } from '../math.js';

describe('Utility Functions', () => {
    describe('add()', () => {
        // Basic arithmetic
        it('should correctly add two positive numbers', () => {
            expect(add(2, 3)).to.equal(5);
        });

        // Edge cases
        it('should handle zero values', () => {
            expect(add(0, 5)).to.equal(5);
            expect(add(5, 0)).to.equal(5);
            expect(add(0, 0)).to.equal(0);
        });

        // Negative numbers
        it('should handle negative numbers', () => {
            expect(add(-2, -3)).to.equal(-5);
            expect(add(-2, 3)).to.equal(1);
            expect(add(2, -3)).to.equal(-1);
        });

        // Decimal numbers
        it('should handle decimal numbers', () => {
            expect(add(0.1, 0.2)).to.be.closeTo(0.3, 0.001);
            expect(add(1.5, 2.5)).to.equal(4);
        });

        // Type checking
        it('should return NaN for non-number inputs', () => {
            expect(add('2', 3)).to.be.NaN;
            expect(add(2, '3')).to.be.NaN;
            expect(add(null, 5)).to.be.NaN;
            expect(add(undefined, 5)).to.be.NaN;
        });
    });
});