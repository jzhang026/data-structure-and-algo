var expect = require('chai').expect;
var SearchTree = require('./binary_search_tree').BinaryTree;
 
describe('binary search tree', function() {
    let tree;
    it('should create a binary search tree', function() {
        tree = new SearchTree();
        expect(tree.tree).to.equal(null);
    })
    it('can insert node', function() {
        tree.insert(5);
        tree.insert(3);
        tree.insert(2);
        tree.insert(5);
        tree.insert(1);
        tree.insert(12);
        tree.insert(12);
        tree.insert(13);
        tree.insert(7);
        tree.insert(8);
        tree.insert(23);
        let node = tree.find(12);
        expect(node.right.data).to.equal(12);
        tree.delete(8);
        node = tree.find(7);
        expect(node.right).to.equal(null)
        expect(tree.findMin().data).to.equal(1)
        expect(tree.findMax().data).to.equal(23)
    })
})