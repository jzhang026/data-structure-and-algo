var expect = require('chai').expect;
var bsearch = require('./bsearch').bsearch;
var bsearch_1 = require('./bsearch_v2').bsearch_1;
var bsearch_2 = require('./bsearch_v2').bsearch_2;
var bsearch_3 = require('./bsearch_v2').bsearch_3;
var bsearch_4 = require('./bsearch_v2').bsearch_4;

describe('search', function() {
    let arr = [1,4,12,23,34,34,34,42,56,56,56,56,56,65,78,123,123,123,123];

    it('binary search', function() {
        let searchee = 55;
        let index = bsearch(arr, arr.length, searchee);
        expect(index).to.equal(-1)
        expect(bsearch(arr, arr.length, 4)).to.equal(1)
    })
    it('found the first item equal to value', function() {
        let searchee = 123;
        let index = bsearch_1(arr, arr.length, searchee);
        let index2 = bsearch(arr, arr.length, 123);
        expect(index).to.equal(arr.length-4);
        expect(index2).to.not.be.below(index);
    })
    it('found the last item equal to value', function() {
        let searchee = 34;
        let index = bsearch_2(arr, arr.length, searchee);
        let index2 = bsearch(arr, arr.length, searchee);
        expect(index).to.equal(6);
        expect(index2).to.not.be.above(index);
    })
    it('found the first item equal or larger to value', function() {
        let searchee = 124;
        let index = bsearch_3(arr, arr.length, searchee);
        let index2 = bsearch(arr, arr.length, searchee);
        expect(index2,'can not found').to.equal(index)
        let index3 = bsearch_3(arr, arr.length, 123);
        expect(index3).to.equal(arr.length - 4)
    })
    it('found the last item equal or smaller to value', function() {
        arr = [1,4,12,23,34,34,34,42,56,56,56,56,56,65,78,123,123,123,123];
        let searchee = 124;
        let index = bsearch_4(arr, arr.length, searchee);
        let index3 = bsearch_4(arr, arr.length, 123);
        let index5 = bsearch(arr, arr.length, 123);
        expect(index3).to.equal(index)
        expect(index5).to.not.be.above(index3)

        searchee = -1;
        index = bsearch_4(arr, arr.length, searchee);
        index5 = bsearch(arr, arr.length, searchee);
        expect(index5).to.equal(index)
    })
})