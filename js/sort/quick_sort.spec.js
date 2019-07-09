var expect = require('chai').expect;
var partition = require('./quick_sort').partition;
var quickSort = require('./quick_sort').quickSort;
var findKth = require('./find_the_k_th');

describe('O(nlogN) sorting', function() {
    let arr = [];
    let arr2 = []
    beforeEach(function() {
        arr = [12,213,1231,23,3,2,123,34,534,31,123,5,0];
        arr2 = [12,213,1231,23,3,2,123,34,534,31,123,5,0];
    })
   it('partition works', function() {
       let test = [2,4,7,23,9,12,24,11];
       partition(test, 3, test.length - 3);
       expect(test).to.eql([2,4,7,9,12,23,24,11]);
   });

   it('quick sort', function() {
        quickSort(arr);
        console.log(arr)
        expect(arr).to.eql(arr2.sort(function(a, b){
            return a -b;s
        }))
    })
    it('can find the k th value', function() {
       let kth = findKth(arr, 8)
       console.log('the 8th max is ', kth)
       expect(kth).to.equal(arr2.sort(function(a, b){
        return a -b;
    })[7])
    })
})