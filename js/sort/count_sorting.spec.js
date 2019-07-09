var expect = require('chai').expect;
var countSorting = require('./count_sorting');


describe('counting sort', function() {
    let arr = [];
    let arr2 = [];
    beforeEach(function() {
        arr = [45,132,2,87,78,94,12,32,24];
        arr2 = [45,132,2,87,78,94,12,32,24];
    })

    it('can sort an array (counting sort)', function() {
      let sorted = countSorting(arr);
        console.log(sorted)
      expect(sorted).to.eql(arr2.sort(function(a, b) {return a -b;}))
    })
})