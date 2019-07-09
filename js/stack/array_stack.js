function ArrayStack() {
    this.statck = [];
    this.top = 0;
}

ArrayStack.prototype.push = function(ele) {
    this.statck[this.top] = ele;
    this.top++;
    return true;
}

ArrayStack.prototype.pop = function() {
    if(this.top < 1) return undefined;
    this.top--;
    return this.statck[this.top];
}

module.exports = {
    ArrayStack: ArrayStack
}