// print(arr) = print(arr[0]) print(arr[1])
function print(arr,dimensions, current, n, prev) {
    let queue = prev;
    if(n==0) {
        console.log(queue.join('-'),': ', arr);
    }
    for(let i = 0; i< dimensions[current]; i++) {
        queue.push(current)
        print(arr[i], dimensions, current+1, n-1,queue)
    }
}
function scan(arr, dimensions, n) {
    print(arr,dimensions,0,n,[])
}

let a1 = [[1,2,3,4,5,6,7,8], [5,4,3,4,5,6,23,8]];
scan(a1,[8],1)