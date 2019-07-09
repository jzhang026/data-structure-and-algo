var expect = require('chai').expect;
var ArrayStack = require('./array_stack').ArrayStack;

describe('Array Stack', function() {
    let stack = null;
    before(function() {
        stack = new ArrayStack();
    })
    it('can construct a stack with top position be -1', function() {
        expect(stack.top).to.equal(0);
    })
    it('can push and pop element', function() {
        stack.push(5);
        stack.push(56);
        stack.push(7);
        expect(stack.top).to.equal(3);
        expect(stack.pop()).to.equal(7);
        expect(stack.top).to.equal(2);
        stack.pop();
        stack.pop();
        expect(stack.top).to.equal(0);
        expect(stack.pop()).to.equal(undefined);
        expect(stack.top).to.equal(0);
        expect(stack.top).to.equal(0);
        expect(stack.pop()).to.equal(undefined);
        expect(stack.top).to.equal(0);
    })
})