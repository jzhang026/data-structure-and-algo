function permutations(arr, n, k) {
    let count = 0;
    let str = ''
    if (k === 1) {
        count++;
        
        for(let i = 0; i < n; i++) {
            str += ' ' + arr[i] + ''
            
        }
        
    }

    for (let i= 0; i<k; i++) {
        let temp = arr[i];
        arr[i] = arr[k-1];
        arr[k-1] = temp;
        count += permutations(arr, n, k-1);
        temp = arr[i];
        arr[i] = arr[k-1];
        arr[k-1] = temp;
    }
    k === 1 && console.log('#' + count + str)
    return count;
}

console.log(permutations([1,2,3,4],4,4));