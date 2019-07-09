var expect = require('chai').expect;
var insertionSort = require('./insertion_sort');
describe('insertion sort', function() {
    let arr = [];
    let arr2 = [];
    beforeEach(function() {
        arr = [45,132,2,87,78,94,12,32,24];
        arr2 = [45,132,2,87,78,94,12,32,24];
    })

    it('can sort an array', function() {
        insertionSort(arr);
        expect(arr).to.eql(arr2.sort(function(a ,b) {return a -b}))

        arr = [];
        insertionSort(arr);
        expect(arr).to.eql([]);

        arr = [2];
        insertionSort(arr);
        expect(arr).to.eql([2]);

        arr = [5,3];
        insertionSort(arr);
        expect(arr).to.eql([3,5]);
    })
})
