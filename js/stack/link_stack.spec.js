var expect = require('chai').expect;
var LinkStack = require('./link_stack').LinkStack;
describe('Link Stack', function() {
    let stack = null;
    before(function() {
        stack = new LinkStack();
    })
    it('can push and pop element', function() {
        stack.push(11);
        stack.push(12);
        stack.push(13);
        expect(stack.top).to.not.equal(null);
        expect(stack.pop().ele).to.equal(13);
        expect(stack.pop().ele).to.equal(12);
        expect(stack.pop().ele).to.equal(11);
        expect(stack.top).to.equal(null);
        expect(stack.pop()).to.equal(null);
        expect(stack.top).to.equal(null);
    })
})