var expect = require('chai').expect;
var BT = require('./iterate_binarytree');

describe('binary tree', function() {
    let bt = null;
    it('should create a b tree', function() {
        bt = new BT.BTree();
        expect(bt.root).to.equal(null);
        expect(bt.flag).to.equal(0);
        expect(bt.current).to.equal(null);
    });
    it('can insert value to binary tree', function() {
        bt.insert('A');
        bt.insert('B');
        bt.insert('C');
        bt.insert('D')
        bt.insert('E');
        bt.insert('F');
        bt.insert('G');
        expect(bt.root.data).to.equal('A');
        expect(bt.flag).to.equal(0);
    })
    it('can pre order search', function() {
        let tempArr = [];
        let tempFunc = function(data) {
            tempArr.push(data)
        }
        BT.preOrder(bt.root, tempFunc);
        expect(tempArr).to.eql(['A','B','D','E','C','F','G'])
    })
    it('can in order search', function() {
        let tempArr = [];
        let tempFunc = function(data) {
            tempArr.push(data)
        }
        BT.inOrder(bt.root, tempFunc);
        expect(tempArr).to.eql(['D','B','E','A','F','C','G'])  
    })
    it('can post order', function() {
        let tempArr = [];
        let tempFunc = function(data) {
            tempArr.push(data)
        }
        BT.postOrder(bt.root, tempFunc);
        expect(tempArr).to.eql(['D','E','B','F','G','C','A'])  
    })
})