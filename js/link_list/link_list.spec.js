var LinkList = require('./link_list').LinkList;
var mergeLinkList = require('./link_list').mergeLinkList;
var Node = require('./link_list').Node;
var expect = require('chai').expect;
describe('link list', function() {
    var linkList = null;
    before(function() {
        linkList = new LinkList(); 
    });
    it('should create a link list with a dummy node', function() {
        expect(linkList.head, 'head is an object').to.be.an('object');
        expect(linkList.head.data).to.equal('dummy');
        expect(linkList.head.next).to.equal(null);
    });
    it('can insert value', function() {
        linkList.insert('first', 'dummy');
        linkList.insert('second', 'dummy');
        linkList.insert('third', 'dummy');
        linkList.insert('fourth', 'dummy');
        linkList.insert('fifth', 'dummy');
        expect(linkList.head.next).not.to.equal(null);
    })
    it('can find node by value', function() {
        let node = linkList.findByValue('first');
        expect(node.next).to.equal(null);
        node = linkList.findByValue('second');
        expect(node.next).to.eql({ data: 'first', next: null });
    });
    it('can find value by index', function() {
        let node1 = linkList.findByIndex(1);
        let node2 = linkList.findByIndex(3);
        expect(node1.next.next).to.equal(node2);
    })
    it('can find middle node', function() {
        expect(linkList.findMiddleNode().data).to.equal('third');
    })
    it('can delete the last kth element', function() {
        expect(linkList.findByIndex(3).data).to.equal('third');
        expect(linkList.findByIndex(4).data).to.equal('second');
        linkList.removeLastKth(2);
        expect(linkList.findByIndex(3).data).to.equal('third');
        expect(linkList.findByIndex(4).data).to.equal('first');
    })
    it('can check circle', function() {
        let haveCircle = linkList.checkCircle();
        expect(haveCircle).to.equal(false)
        let second = linkList.findByIndex(2);
        let fourth = linkList.findByIndex(4);
        fourth.next = second;
        haveCircle = linkList.checkCircle();
        expect(haveCircle).to.equal(true)
    })
    
})

describe('link list util', function() {
    let l1 = new LinkList();
    let l2 = new LinkList();
    before(function() {
        l1.insert(19, 'dummy');
        l1.insert(16, 'dummy');
        l1.insert(13, 'dummy');
        l1.insert(8, 'dummy');
        l1.insert(2, 'dummy');

        l2.insert(21, 'dummy');
        l2.insert(17, 'dummy');
        l2.insert(15, 'dummy');
        l2.insert(3, 'dummy');
        l2.insert(2, 'dummy');
    })
    it('can merge two ordered link list', function() {
        let merged = mergeLinkList(l1, l2);
        let thirdValue = merged.findByIndex(3);
        expect(thirdValue.data).to.equal(3);
        let lastValue = merged.findByIndex(10);
        expect(lastValue.data).to.equal(21);
    })
})