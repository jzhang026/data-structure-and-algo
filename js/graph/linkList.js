function LinkList() {
    this.head = null;
    this.size = 0;
}

// append elements at the end of linklist
LinkList.prototype.add = function(data) {
    this.size++;
    let newNode = new Node(data);
    let p = this.head;
    if (p === null) {
        this.head = newNode;
        return;
    }
    while(p.next !== null) {
        p = p.next;
    }
    p.next = newNode;
}

// get the i th element of linklist
LinkList.prototype.getByIndex = function(index) {
    if(index < 0) return null;
    let i = 0;
    let p = this.head;
    if (this.head === null) {
        return null
    }
    while( i < index && p !== null) {
        p = p.next;
    }

    return i < index ? null : p;
}

LinkList.prototype.getByValue = function(value) {
    let p = this.head;
    if (this.head === null) {
        return null
    }
    while(p!==null && p.data !== value) {
        p = p.next;
    }
    return p === null ? null : p;
}

LinkList.prototype.dequeue = function() {
    if(this.head !== null) {
        this.size--;
        let p = this.head;
        this.head = this.head.next;
        return p.data;
    } else {
        return null
    }
}

LinkList.prototype.enqueue = function(data) {
    let newNode = new Node(data);
    if(this.head === null) {
        this.head = newNode;
    } else {
        let p = this.head;
        while(p.next !== null) {
            p = p.next;
        }
        p.next = newNode;
    }
}


function Node(data, next) {
    this.data = data;
    this.next = (typeof next === 'undefined') ? null : next; 
}

module.exports = LinkList;