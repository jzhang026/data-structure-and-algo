var expect = require('chai').expect;
var bubbleSort = require('./bubble_sort');

describe('bubble sort', function() {
    let arr = [];
    beforeEach(function() {
        arr = [23,1,4,5,123,12,5,64]
    })
    it('can sort an array', function() {
        bubbleSort(arr, 1);
        expect(arr).to.eql([1,4,5,5,12,23,64,123])
        bubbleSort(arr, -11);
        expect(arr).to.eql([123,64,23,12,5,5,4,1])
        let arr2=[];
        bubbleSort(arr2, 1);
        expect(arr2).to.eql([]);
        arr2=[2];
        expect(arr2).to.eql([2]);
    })
})