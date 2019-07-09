function Node(ele, next) {
    this.ele = ele;
    this.next = next || null;
}

function Linklist() {
    this.head = null;
}

Linklist.prototype.headInsert = function(value) {
    let newNode = new Node(value);
    if (this.head === null) {
        this.head = newNode;
    } else {
        newNode.next = this.head;
        this.head = newNode;
    }
}

Linklist.prototype.display = function() {
    current = this.head;
    while(current!== null) {
        console.log(current.ele);
        current = current.next;
    }
}

module.exports = Linklist;