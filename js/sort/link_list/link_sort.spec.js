var expect = require('chai').expect;
var Linklist = require('./link_list');
var sort = require('./link_sort');


describe('bubble sort linklist', function() {
    let linkList = null;
    beforeEach(function() {
        linkList = new Linklist();
        linkList.headInsert(26);
        linkList.headInsert(12);
        linkList.headInsert(23);
        linkList.headInsert(14);
        linkList.headInsert(25);
        linkList.headInsert(5);
        linkList.headInsert(32);
        console.log('----------------');
        console.log('before');
        linkList.display();
    })

    afterEach(function() {
        console.log('after');
        linkList.display();
        console.log('----------------');
    })

    it('sort a link list (bubble sort)', function() {
        sort.bubbleSort(linkList);
    })

    it('sort a link list (insertion sort)', function() {
        sort.insertionSort(linkList);
    })
    it('sort a link list (selection sort)', function() {
        sort.selectionSort(linkList);
    })
})