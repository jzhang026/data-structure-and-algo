function similarNumber(n) {
    let digits = [];
    let i = 0;
    while(n > 0) {
        digits[i] = n % 10;
        n = (n - digits[i]) / 10;
        i++;
    }
    console.log(digits)
    return similar(digits, 0, digits.length - 1)
}

function similar(arr, p, q) {
    if(q<=p) return 1;
    let mid = ((q - p) >>> 1) + p;
    return 2*similar(arr,p, mid)*similar(arr, mid + 1, q);
}


console.log(similarNumber(123))