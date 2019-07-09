var heapify = require('./heapify').heapify;

function buildHeap(arr, n) {
    for(let i = n >>>1; i >=1; i--) {
        heapify(arr,n,i)
    }
}

exports.buildHeap = buildHeap;

function heapSort(arr, n) {
    buildHeap(arr, n);
    while(n>=1) {
        let temp = arr[1];
        arr[1] = arr[n];
        arr[n] = temp;
        n--;
        heapify(arr,n,1);
    }
}
exports.heapSort = heapSort;