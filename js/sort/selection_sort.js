function selectionSort(arr) {
    for(let i = 0; i < arr.length - 1; i++) {
        let min = arr[i];
        let pos = 0;
        for(let j = i + 1; j < arr.length; j++) {
            if(min>arr[j]) {
                min = arr[j];
                pos = j;
            }
        }
        arr[pos] = arr[i];
        arr[i] = min;
        
    }
}

module.exports = selectionSort;