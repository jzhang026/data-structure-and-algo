function Node(ele) {
    this.ele = ele;
    this.next = null;
}
function LinkStack() {
    this.top = null;
}

LinkStack.prototype.push = function(ele) {
    let newNode = new Node(ele);
    if (this.top === null) {
        this.top = newNode;
    } else {
        newNode.next = this.top;
        this.top = newNode;
    }
    return true;
}

LinkStack.prototype.pop = function() {
    if(this.top === null) return null;
    let top = this.top;
    this.top = this.top.next;
    return top;
}

LinkStack.prototype.display = function() {
    let top = this.top;
    while(top !== null) {
        console.log(top.ele);
        top = top.next
    }
}

module.exports = {
    LinkStack: LinkStack
}