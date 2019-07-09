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
    let found = -1;
    while (start <= end) {
        let mid = ((end - start) >>> 1) + start;
        if (arr[mid] < value) {
            start = mid + 1;
        } else if (arr[mid] > value) {
            end = mid - 1;
        } else {
            found = mid;
            for (let i = mid - 1; i>=start; i --) {
                if (arr[i] === value) {
                    found = i;
                }
            }
            return found;
        }
    }
}

//find the last one equal to value
function bsearch_2 (arr, n, value) {
    let end = n -1;
    let start = 0;
    let found = -1;
    while (start <= end) {
        let mid = ((end - start) >>> 1) + start;
        if (arr[mid] < value) {
            start = mid + 1;
        } else if (arr[mid] > value) {
            end = mid - 1;
        } else {
            found = mid;
            for (let i = mid + 1; i<=end; i++) {
                if (arr[i] === value) {
                    found = i;
                }
            }
            return found;
        }
    }
}

// find the first one larger or equal to value
function bsearch_3 (arr, n, value) {
    let end = n -1;
    let start = 0;
    let found = -1;
    while(start <= end) {
        let mid = ((end-start) >>> 1) + start;
        if (arr[mid] < value) {
            start = mid + 1;
        } else if (arr[mid] > value) {
            end = mid - 1;
        } else {
            found = mid;
            for (let i = mid -1; i>=start; i--) {
                if(arr[i] === value) {
                    found = i;
                }
            }
            return found
        }
    }
    if(start>n-1) return -1
    found = end+1;
    return found
}

// find the last one smaller or equal to value
function bsearch_4 (arr, n, value) {
    let end = n -1;
    let start = 0;
    let found = -1;
    while(start <= end) {
        let mid = ((end-start) >>> 1) + start;
        if (arr[mid] < value) {
            start = mid + 1;
        } else if (arr[mid] > value) {
            end = mid - 1;
        } else {
            found = mid;
            for (let i = mid +1; i<=end; i++) {
                if(arr[i] === value) {
                    found = i;
                }
            }
            return found
        }
    }
    found = start - 1;
    return found
}
module.exports = {
    bsearch,
    bsearch_1,
    bsearch_2,
    bsearch_3,
    bsearch_4
}
