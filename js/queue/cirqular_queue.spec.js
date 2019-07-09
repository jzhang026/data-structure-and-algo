var expect = require('chai').expect;
var CircleQueue = require('./cirqular_queue').CircleQueue; 
describe('cirqular queue', function() {
    let queue = null;
    beforeEach(function() {
        queue = new CircleQueue(5);
    })
    it('can enqueue and dequeue elements', function() {
        queue.enqueue(42);
        expect(queue.tail).to.equal(1);
        queue.enqueue(32);
        expect(queue.tail).to.equal(2);
        queue.enqueue(23);
        expect(queue.tail).to.equal(3);
        expect(queue.dequeue()).to.equal(42);
        expect(queue.head).to.equal(1);
        expect(queue.dequeue()).to.equal(32);
        expect(queue.head).to.equal(2);
        expect(queue.tail).to.equal(3);

        queue.enqueue(53);
        queue.enqueue(63);
        expect(queue.tail).to.equal(0);
        queue.enqueue(65);
        expect(queue.tail).to.equal(1);
        expect(queue.enqueue(20)).to.equal(-1);
    });

})