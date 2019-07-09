function quickSort(arr) {
    if (arr.length <=1 || Object.prototype.toString.call(arr) !== '[object Array]') return arr;

    quickSort_c(arr, 0, arr.length-1);
}

function quickSort_c(arr, p, r) {
    if (p >=r) return;
    let q = partition(arr, p, r);
    quickSort_c(arr, p, q-1);
    quickSort_c(arr, q+1, r);
}

function partition(arr, p, r) {
    let i = p;
    for (let j = p; j < r; j ++) {
        if (arr[j] < arr[r]) {
            let temp = arr[j];
            arr[j] = arr[i];
            arr[i] = temp;
            i++;
        }
    }

    let temp = arr[i];
    arr[i] = arr[r];
    arr[r] = temp; 
    return i;
}

module.exports = {
    quickSort,
    partition
}