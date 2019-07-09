function bubble_sort(arr) {
    let n = arr.length;
    for(let i = 0; i < n; i++) {
        let flag = true;
        for (let j = 0; j < n - i - 1; j++) {
            
            if (a[j] > a[j+1]) {
                let temp = a[j+1];
                a[j+1] = a[j];
                a[j] = temp;
                flag = false;
            }
            
        }
        if(flag) {
            break;
        }
    }
}

let a = [25,12,4,1,2,3,5,65,23];
// let a = [25,12];
// bubble_sort(a)
console.log(a)

function insertSort(arr) {
    let n = arr.length;
    for (let i = 1; i < n; i++) {
        let cur = a[i];
        let j = i -1
        for (; j >= 0; j--) {
            if(cur < a[j]) {
                a[j+1] = a[j]
            } else {
                
                break;
            }
        }
        a[j+1] = cur;
        
    }
}

// insertSort(a)
// console.log(a)
function selectSort(arr) {
    let n = arr.length;
    for(let i = 0; i < n; i++) {
        let min = arr[i];
        let p = i;
        for(let j = i+1; j<n;j++) {
            if(a[j] < min) {
                min = arr[j];
                p = j;
            }
        }
        arr[p] = arr[i];
        arr[i] = min;
    }
}
selectSort(a)
console.log(a)