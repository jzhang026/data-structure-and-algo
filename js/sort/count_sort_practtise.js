let arr = ['D','a','x',3,'F','u',8,'Z',12,'T','z']

function countSorting(arr) {
    let newArr = new Array(arr.length);
    let indexMap = {
        'number': 1,
        'lowercase': 0,
        'uppercase': 2,
        'untyped': 3
    }
    let c = countDistribute(arr,indexMap);
    for (let i =0; i< arr.length; i++) {
        let index = c[indexMap[charType(arr[i])]] - 1
        newArr[index] = arr[i];
        c[indexMap[charType(arr[i])]] -= 1;
    }

    return newArr;
}

function countDistribute(arr,indexMap) {
    
    let c = Array.apply(null, {length: 4}).map(function() {return 0});
    for (let i = 0; i<arr.length; i++) {
        let index = indexMap[charType(arr[i])];
        c[index] += 1; 
    }
    for(let i = 1; i < 4; i++) {
        c[i] = c[i] + c[i-1]
    }
    return c;
}

function charType (c) {
    if (typeof c === 'number') {
        return 'number'
    }
    if (c >= 'A' && c <= 'Z') {
        return 'uppercase'
    }
    if (c >= 'a' && c <= 'z') {
        return 'lowercase'
    }
    return 'untyped'
}

console.log(countSorting(arr))