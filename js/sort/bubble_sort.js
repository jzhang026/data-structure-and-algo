function bubbleSort(arr,dir) {
    let direction = dir>=0 ? 1 : -1;
    for(let i = 0; i<arr.length - 1; i++) {
        let flag = false;
        for (let j = 0; j<arr.length-i-1; j++) {
            if(direction == 1) {
                if(arr[j] > arr[j+1]) {
                    let temp = arr[j+1];
                    arr[j+1] = arr[j];
                    arr[j] = temp;
                    flag = true;
                }
            } else {
                if(arr[j] < arr[j+1]) {
                    let temp = arr[j+1];
                    arr[j+1] = arr[j];
                    arr[j] = temp;
                    flag = true;
                }
            }
        }
        if (!flag) break;
    }
}

module.exports = bubbleSort