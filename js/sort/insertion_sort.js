function insertionSort(arr, dir) {
    for (i = 1; i < arr.length; i++) {
        let value = arr[i];
        let j = i -1;
        for(; j >= 0; j -- ) {
            if (arr[j] > value) {
                arr[j+1] = arr[j];
            } else {
                break;
            }
        }
        arr[j+1] = value
    }
}

module.exports = insertionSort;