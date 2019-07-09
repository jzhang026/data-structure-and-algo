function Node(data) {
    this.data = data;
    this.next = null;
}
function LinkList() {
    this.head = new Node('dummy');
}
LinkList.prototype.findByValue = function(value) {
    let currentNode = this.head;
    while(currentNode !== null && currentNode.data !== value) {
        currentNode = currentNode.next;
    }
    return currentNode === null ? -1 : currentNode;
}
LinkList.prototype.findByIndex = function(index) {
    let pos = 0;
    let currentNode = this.head;
    while(currentNode != null && pos != index) {
        currentNode = currentNode.next;
        pos++;
    }
    return currentNode === null ? -1 : currentNode;
}
LinkList.prototype.insert = function(value, element) {
    let tobeInserted = new Node(value);
    let node = this.findByValue(element);
    if (node !== -1) {
        tobeInserted.next = node.next;
        node.next = tobeInserted;
    } else {
        console.log('didnt find the index to be inserted')
    }
}
LinkList.prototype.findPrev = function(value) {
    let currentNode = this.head;
    while(currentNode.next !== null && currentNode.next.data != value){
        currentNode = currentNode.next;
    }
    return currentNode.next === null ? -1 : currentNode;
}
LinkList.prototype.remove = function(value) {
    let node = this.findPrev(value);
    node.next = node.next.next;
}
LinkList.prototype.display = function() {
    let currentNode = this.head.next;
    while (currentNode !== null) {
        console.log(currentNode.data);
        currentNode = currentNode.next;
    }
}
LinkList.prototype.reverse = function() {
    let currentNode = this.head.next;
    let pointer = currentNode.next;
    currentNode.next = null;
    while(pointer !== null) {
        currentNode = pointer;
        pointer = pointer.next;
        currentNode.next = this.head.next;
        this.head.next = currentNode;
    }
    return this;
}

LinkList.prototype.reverse1 = function() {
    let newList = new LinkList('root');
    let currentNode = this.head.next;
    while(currentNode !== null) {
        let next = currentNode.next;
        currentNode.next = newList.head.next;
        newList.head.next = currentNode;
        currentNode = next;
    }
    return newList;
}
LinkList.prototype.checkCircle = function() {
    let slow = this.head;
    let fast = this.head.next;
    while(fast !== null && fast.next != null && fast !== slow) {
        fast = fast.next.next;
        slow = slow.next
    }

    return fast === slow;
}

LinkList.prototype.findMiddleNode = function() {
    let fast = this.head;
    let slow = this.head;
    while(fast.next !== null && fast.next.next !== null) {
        slow = slow.next;
        fast = fast.next.next;
    }

    return slow.next;
}

LinkList.prototype.removeLastKth = function(k) {
    let fast = this.head.next;
    let pos = 1;
    while (fast !== null && pos < k) {
        fast = fast.next;
        ++pos;
    }
    if (fast === null) return this;

    let slow = this.head.next;
    let prev = this.head;
    while(fast.next !== null) {
        fast = fast.next;
        prev = slow;
        slow = slow.next;
    }
    prev.next = slow.next;
    return this;
}

function mergeLinkList(l1, l2) {
    let newList = new LinkList();
    let currentL1 = l1.head.next;
    let currentL2 = l2.head.next;
    let newListTail = newList.head;
    while (currentL1 !== null && currentL2 !== null) {
        if (currentL1.data < currentL2.data) {
            newListTail.next = currentL1;
            currentL1 = currentL1.next;
        } else {
            newListTail.next = currentL2;
            currentL2 = currentL2.next;
        }
        newListTail = newListTail.next;
    }
    let remaining = currentL1 === null ? currentL2 : currentL1;
    newListTail.next = remaining;
    return newList;
}
module.exports = {
    LinkList: LinkList,
    Node: Node,
    mergeLinkList: mergeLinkList
}
