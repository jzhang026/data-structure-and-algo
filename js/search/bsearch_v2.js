function bsearch(arr, n, value) {
    let end = n -1;
    let start = 0;
    while(start <= end) {
        let mid =((end - start) >>> 1 ) + start;
        if (arr[mid] < value) {
            start = mid + 1;
        } else if (arr[mid] > value) {
            end = mid - 1;
        } else {
            return mid
        }
    }
    return -1;
}

//find the first one equal to value
function bsearch_1 (arr, n, value) {
    let end = n -1;
    let start = 0;
    while (start<=end) {
        let mid = ((end - start) >>> 1) + start;
        if (arr[mid]>=value) {
            end = mid - 1;
        } else {
            start = mid + 1;
        }
        if(arr[end] !== value && arr[mid] == value) return mid;
    }
    return -1;
}

//find the last one equal to value
function bsearch_2 (arr, n, value) {
    let end = n -1;
    let start = 0;
    while(start <= end) {
        let mid = ((end - start) >>> 1) + start;
        if (arr[mid] <= value) {
            start = mid + 1;
        } else {
            end = mid - 1;
        }
    }
    if(end >= 0 && arr[end] === value) return end;
    return -1;

}

// find the first one larger or equal to value
function bsearch_3 (arr, n, value) {
   let start = 0;
   let end = n - 1;
   while(start <= end) {
       let mid = ((end - start) >>> 2) + start;
       if(arr[mid]>=value) {
           end = mid - 1;
       } else {
           start = mid + 1;
       }
   }
   if(start < n) return start;
   return -1;
}

// find the last one smaller or equal to value
function bsearch_4 (arr, n, value) {
    let end = n -1;
    let start = 0;
    while(start<=end) {
        let mid = ((end-start) >>> 1) + start;
        if (arr[mid]<=value) {
            start = mid + 1;
        } else {
            end = mid - 1;
        }
    }
    if (end > -1) return start;
    return -1;
}
module.exports = {
    bsearch,
    bsearch_1,
    bsearch_2,
    bsearch_3,
    bsearch_4
}
