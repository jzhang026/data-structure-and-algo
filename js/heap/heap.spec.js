var expect = require('chai').expect;
var Heap = require('./heapify').Heap;
var buildHeap = require('./build_heap').buildHeap;
var heapSort = require('./build_heap').heapSort;

describe('heap', function() {
    let heap = new Heap(15);
    it('should initialize a heap', function() {
        expect(heap.count).to.equal(0);
        expect(heap.capacity).to.equal(15);
    })

    it('should insert a value', function() {
        heap.insert(23);
        heap.insert(12);
        heap.insert(32);
        heap.insert(14);
        heap.insert(3);
        heap.insert(24);
        heap.removeMax();
        expect(heap.count).to.equal(5)
        console.log(heap.a.join('-'))
        console.log(typeof(heap.a[0]))
    })

    it('can build a heap from right to left', function() {
        let arr = ['dummy', 23,12,32,14,3,24];
        buildHeap(arr, 6);
    })
    it('can heap sort an array', function() {
        let arr = ['dummy', 23,12,32,14,3,24];
        heapSort(arr,6);
        expect(arr).to.eql(['dummy',3,12,14,223,24,32])
    })
})