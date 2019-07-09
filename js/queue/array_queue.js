
function ArrayQueue(n) {
    this.head = 0;
    this.tail = 0;
    this.n = n
    this.queue = []
}

ArrayQueue.prototype.enqueue = function(ele) {
    if(this.tail === this.n) {
        if (this.head !== 0) {
            for(let i = this.head; i < this.n; i++) {
                this.queue[i - this.head] = this.queue[i];
            }
            this.tail = this.n - this.head;
            this.head = 0;
        } else {
            return -1;
        }
    }
    this.queue[this.tail] = ele;
    this.tail++;
    return true;
}

ArrayQueue.prototype.dequeue = function() {
    if (this.head === this.tail) return undefined;
    let head = this.queue[this.head];
    this.head++;
    return head;
}

module.exports = {
    ArrayQueue: ArrayQueue
}