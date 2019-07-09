function Heap(n) {
    this.a = new Array(n+1);
    this.capacity = n;
    this.count = 0;
}

Heap.prototype.insert = function(data) {
    if (this.count >= this.capacity) return;
    this.count++;
    this.a[this.count] =data;
    let i = this.count;
    while(i >= 1) {
        let p = i >>> 1;
        if (this.a[p] < this.a[i]) {
            swap(this.a, p,i);
            i = p;
        }
        break;
    }
}

Heap.prototype.removeMax = function() {
    if (this.count < 1) return;
    swap(this.a, 1, this.count);
    this.count--;
    heapify(this.a, this.count, 1)
}
function swap(arr, p, i) {
    let temp = arr[p];
    arr[p] = arr[i];
    arr[i] = temp;
}

function heapify(arr, n, i) {
    while(true) {
        let maxPos = i;
        if (i*2 <= n && arr[i] < arr[i*2]) maxPos = i*2;
        if(i*2+1 <= n && arr[i] < arr[i*2 + 1]) maxPos = i*2 + 1;
        if(maxPos === i) return;
        swap(arr, i, maxPos);
        i = maxPos;
    }
}
exports.Heap = Heap;
exports.heapify = heapify;