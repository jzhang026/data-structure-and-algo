var expect = require('chai').expect;
var selectionSort = require('./selection_sort');

describe('selection sort', function() {
    let arr = [];
    let arr2 = [];
    beforeEach(function() {
        arr = [132,2,45,87,78,94,12,32,24];
        arr2 = [132,2,45,87,78,94,12,32,24];
    })
    it('can sort array', function() {
        selectionSort(arr);
        expect(arr).to.eql(arr2.sort(function(a ,b) {return a -b}));

        arr = [];
        selectionSort(arr);
        expect(arr).to.eql([]);

        arr = [2];
        selectionSort(arr);
        expect(arr).to.eql([2]);

        arr = [5,3];
        selectionSort(arr);
        expect(arr).to.eql([3,5]);
    })
})