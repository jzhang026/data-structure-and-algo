require('../util/util')
// 在index n 之后插入一个元素 ele

// 在这里考虑三种情况
// 1 index 小于0， 返回false 表示不能加
// 2 index 大于arr.length - 1, 直接加入，不需要进行arr的数据移动
// 3 index 大于 -1， 并且小于 arr.length,进行数据的移动
// 4 index的值不是整数，返回false
function add(arr, n , ele) {
    if (n < 0 || !Number.isInteger(n) || Object.prototype.toString.call(arr) != '[object Array]') return false

    // if (n > arr.length - 1) {
    //     arr[n] = ele;
    //     return true
    // }

    // 上面comment掉的代码是我为了照顾条件2，而专门写的一个条件照顾，从操作结果来看，她是没有必要的
    // 可以看到n > arr.length - 1 与 n < arr.length 覆盖了所有的情况，互斥
    // for循环里的判断，只是判断是否需要执行数据迁移。所以对于n > arr.length - 1,不需要进行数据迁移，已经被for循环涵盖，所以不需要
    for (let i = arr.length; i > n; i --) {
        arr[i] = arr[i-1]
    }
    arr[n] = ele;
    return true
}

// 1 index 小于0， 返回false 表示不能删除
// 2 index
function del(arr, n) {
    if (n < 0 || n > arr.length -1 || Object.prototype.toString.call(arr) !== '[object Array]') return undefined
    let deleted = arr[n]
    for (let i = n; i < arr.length - 1; i++) {
        arr[i] = arr[i+1];
    }
    arr[arr.length -1] = undefined;
    return deleted;

}
let a = [3,4,5];
console.log(del(a,1))
console.log(a)