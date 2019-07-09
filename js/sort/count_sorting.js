function countSorting(arr) {
    let k = Math.max.apply(null, arr);
    let c = countDistribute(arr, k);
    let newArr = new Array(arr.length);
    for (let i = 0; i < arr.length; i++) {
        newArr[c[arr[i]]-1] = arr[i];
        c[arr[i]] -= 1;
    }

    return newArr;
}

function countDistribute(arr, k) {
    let c = Array.apply(null, {length: k+1}).map(function() {return 0});
    for (let i = 0; i < arr.length; i++) {
        c[arr[i]] += 1;
    }
    for (let i = 1; i < k +1; i++) {
        c[i] = c[i] + c[i-1];
    }
    return c
}

module.exports = countSorting;