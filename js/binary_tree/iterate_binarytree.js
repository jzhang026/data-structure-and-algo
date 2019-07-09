function Node(data, left, right) {
    this.data = data;
    this.left = left || null;
    this.right = right || null;
}

function BTree() {
    this.root = null;
    this.flag = 0; // 0 stands for left node, 1 stands for right nodes
    this.current = null;
    this.index = 0;
    this.arr = ['dummy'];
}
BTree.prototype.insert = function(data) {
    let newNode = new Node(data);
    this.arr.push(newNode);
    if (this.root === null) {
        this.root = newNode;
        this.current = newNode;
        this.index++;
        return;
    }
    if (this.flag === 0) {
        this.current.left = newNode;
        this.flag = 1;
    } else {
        this.current.right = newNode;
        this.flag = 0;
        this.index++;
        this.current = this.arr[this.index]

    }
    
}

function preOrder(bt, cb) {
    if (bt === null) return;
    // console.log(bt.data)
    cb(bt.data);
    preOrder(bt.left,cb);
    preOrder(bt.right,cb);
    
}

function inOrder(bt, cb) {
    if (bt === null) return;
    inOrder(bt.left,cb);
    cb(bt.data);
    inOrder(bt.right,cb);
}

function postOrder(bt, cb) {
    if (bt === null) return;
    postOrder(bt.left,cb);
    postOrder(bt.right,cb);
    cb(bt.data);
}

module.exports = {
    BTree,
    preOrder,
    inOrder,
    postOrder
}
