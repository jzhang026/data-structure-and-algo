function findKth(arr, k) {
    if (k > arr.length) return undefined;
    return arr[findKthC(arr, k, 0, arr.length -1)]
}

function findKthC(arr, k, p, r) {
    let q = partition(arr, p, r);
    if (q < k-1) {
        q = findKthC(arr, k, q+1, r)
    } else if(q > k-1) {
        q = findKthC(arr, k, p, q-1)
    }
    return q;
}
function partition(arr, p, r) {
    let i = p;
    for (let j = p; j < r; j++) {
        if (arr[j]<arr[r]) {
            let temp = arr[i];
            arr[i] = arr[j];
            arr[j]= temp;
            i++;
        }
    }

    let temp = arr[r];
    arr[r] = arr[i];
    arr[i] = temp;
    return i;
}

module.exports = findKth;