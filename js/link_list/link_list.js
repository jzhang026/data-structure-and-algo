function Node(data) {
    this.data = data;
    this.next = null;
}
function LinkList() {
    this.head = new Node('dummy');
}
LinkList.prototype.findByValue = function(value) {

}
LinkList.prototype.findByIndex = function(index) {

}
LinkList.prototype.insert = function(value, element) {

}
LinkList.prototype.findPrev = function(value) {
    
}
LinkList.prototype.remove = function(value) {
    
}
LinkList.prototype.display = function() {
    
}
LinkList.prototype.reverse = function() {

}


LinkList.prototype.checkCircle = function() {

}

LinkList.prototype.findMiddleNode = function() {

}

LinkList.prototype.removeLastKth = function(k) {

}

function mergeLinkList(l1, l2) {

}
module.exports = {
    LinkList: LinkList,
    Node: Node,
    mergeLinkList: mergeLinkList
}
