var timing = require('../util/util.js').timing;
function bubble(arr) {
    for(let i = 0; i < arr.length; i ++) {
        // 为什么内层循环是arr.length - i - 1
        // 假设进行到第i次循环，说明已经有i最大的元素排好序，那么剩下的需要被排序的长度是arr.length - i
        // 在剩下的需要排序的数组中挑选出一个最大，总共需要比较的次数则是 arr.length - i - 1, 例如三个数中挑选一个最大的，需要比较的次数是 2次
        for (let j = 0; j < arr.length - i -1; j ++) {
            if (arr[j] > arr[j + 1]) {
                let temp = arr[j + 1];
                arr[j + 1] = arr[j];
                arr[j] = temp;
            }
        }
    }
    return arr
}
logBubble = timing(bubble);

let a = [2,4,5,7,23,4,3,1,3];
console.log(logBubble(a));

let b = [2,4,5,7,23,4]
console.log(logBubble(b));

let c = [2];
console.log(logBubble(c));