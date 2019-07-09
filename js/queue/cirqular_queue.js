
function CircleQueue(n) {
    this.head = 0;
    this.tail = 0;
    this.n = n;
    this.queue = [];
}
CircleQueue.prototype.enqueue = function(ele) {
    if ((this.tail+1)%this.n !== this.head) {
        this.queue[this.tail] = ele;
        this.tail = (this.tail + 1) % this.n;
    }
    return -1;
}

CircleQueue.prototype.dequeue = function() {
    if (this.head === this.tail) return undefined;
    let head = this.queue[this.head];
    this.head = (this.head + 1) % this.n;
    return head;
}
module.exports = {
    CircleQueue: CircleQueue
}