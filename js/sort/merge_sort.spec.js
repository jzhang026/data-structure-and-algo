var expect = require('chai').expect;
var merge_sort = require('./merge_sort').merge_sort;
var merge = require('./merge_sort').merge;

describe('O(nlogN) sorting', function() {
    let arr = [];
    let arr2 = []
    beforeEach(function() {
        arr = [12,213,1231,23,3,2,123,34,534,31,123,5,0];
        arr2 = [12,213,1231,23,3,2,123,34,534,31,123,5,0];
    })
    it('merge function is ok', function() {
        a1 = [2,7,12];
        a2 = [1,5,23];
        expect(merge(a1,a2)).to.eql([1,2,5,7,12,23])
    })
    it('merge sort', function() {
        let sorted = merge_sort(arr);
        console.log(sorted)
        expect(sorted).to.eql(arr2.sort(function(a, b){
            return a -b;
        }))
    })
})