function merge_sort(arr) {
    if(!arr || Object.prototype.toString.call(arr) !== '[object Array]') return arr;

    let n = arr.length;
    if(n <= 1) return arr

    let midPoint = Math.floor((n-1)/2)
    let arr1=[];
    let arr2 = [];
    for(let i =0; i < midPoint + 1; i++) {
        arr1[i] = arr[i]
    }
    for(let i =midPoint + 1; i < n; i++) {
        arr2[i-midPoint-1] = arr[i]
    }
    return merge(merge_sort(arr1), merge_sort(arr2))
}

function merge(arr1, arr2) {
    let index1 = index2 = 0;
    let arr = [];
    let i = 0;
    let length1 = arr1.length;
    let length2 = arr2.length;

    while(index1 < length1 && index2 < length2) {
        if(arr1[index1] <= arr2[index2]) {
            arr[i] = arr1[index1];
            index1++;
        } else {
            arr[i] = arr2[index2];
            index2++;
        }
        i++;
    }
    if (index1 < length1) {
        for (let j=index1;j<length1; j++) {
            arr[i] = arr1[j];
            i++;
        }
    } else {
        for (let j=index2;j<length2; j++) {
            arr[i] = arr2[j];
            i++;
        }
    }
    return arr;

}

module.exports = {merge_sort, merge};