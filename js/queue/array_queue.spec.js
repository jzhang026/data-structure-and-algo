var expect = require('chai').expect;
var ArrayQueue = require('./array_queue').ArrayQueue;
describe('array queue', function() {
    let queue = null;
    beforeEach(function(){
        queue = new ArrayQueue(5);
    })
    it('can enqueue and dequeue elements', function() {
        queue.enqueue(42);
        expect(queue.tail).to.equal(1);
        queue.enqueue(32);
        expect(queue.tail).to.equal(2);
        queue.enqueue(23);
        expect(queue.dequeue()).to.equal(42);
        expect(queue.head).to.equal(1);
    });
    it('will return -1 if the queue is full', function() {
        for(let i = 0; i < 5; i++) {
            queue.enqueue(i+1);
        }
        expect(queue.enqueue(6)).to.equal(-1);
        expect(queue.dequeue()).to.equal(1);
        expect(queue.enqueue(6)).to.equal(true);
    })
    it('will move data if the queue reach tail', function() {
        for(let i = 0; i < 5; i++) {
            queue.enqueue(i+1);
        }
        queue.dequeue();
        queue.dequeue();
        queue.dequeue();
        expect(queue.head).to.equal(3);
        expect(queue.tail).to.equal(5);
        queue.enqueue(6);
        expect(queue.head).to.equal(0);
        expect(queue.tail).to.equal(3);

    });
})