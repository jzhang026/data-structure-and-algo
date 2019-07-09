/* 
确定二叉树高度有两种思路：
第一种是深度优先思想的递归，
分别求左右子树的高度。当前节点的高度就是左右子树中较大的那个+1；

第二种可以采用层次遍历的方式，
每一层记录都记录下当前队列的长度，这个是队尾，每一层队头从0开始。
然后每遍历一个元素，队头下标+1。直到队头下标等于队尾下标。这个时候表示当前层遍历完成。
每一层刚开始遍历的时候，树的高度+1。最后队列为空，就能得到树的高度。 
*/

function Node(data, left, right) {
    this.data = data;
    this.left = left || null;
    this.right = right || null;
}

function BinaryTree() {
   this.tree = null; 
}

BinaryTree.prototype.find = function(data) {
    let p = this.tree;
    while (p !== null) {
        if (p.data < data) {
            p = p.right;
        } else if (p.data > data) {
            p = p.left;
        } else {
            return p;
        }
    }
    return -1;
}

BinaryTree.prototype.insert = function(data) {
    let newNode = new Node(data);
    let p = this.tree;
    if(p === null) {
        this.tree = newNode;
        return;
    }
    while(p !== null) {
        if (p.data <= data) {
            if (p.right === null) {
                p.right = newNode;
                return;
            }
            p = p.right;
        } else {
            if (p.left === null) {
                p.left = newNode;
                return;
            }
            p = p.left;
           
        }
    }
}

BinaryTree.prototype.delete = function(data) {
    let p = this.tree;
    let pp = null;
    while(p !== null && p.data !== data) {
        pp = p;
        if (p.data < data) p = p.right;
        else if (p.data > data) p = p.left;
    }

    if (p === null) return; // did not found the item need to be deleted

    if (p.left !== null && p.right !== null) {
        let minP = p.right;
        let minPP = p;
        while (minP.left !== null) {
            minPP = minP;
            minP = minP.left;
        }
        p.data = minP.data;
        p = minP;
        pp = minPP;
    }
    let child;
    if(p.left !== null) child = p,left;
    else if(p.right !== null) child = p.right;
    else child = null;

    if(pp === null) this.tree = child; 
    else if(pp.left !== p) pp.right = child;
    else pp.left = child;
    
}
BinaryTree.prototype.findMin = function() {
    let p = this.tree;
    if (p === null) {
        return null
    }
    while(p.left !== null) {
        p = p.left;
    }
    return p;

}

BinaryTree.prototype.findMax = function() {
    let p = this.tree;
    if (p === null) {
        return null;
    }
    while (p.right !== null) {
        p = p.right;
    }
    return p;
}

module.exports = {
    BinaryTree
}