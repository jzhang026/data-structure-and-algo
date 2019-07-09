function toBinary(n) {
    let binaries = '';
    while(n > 0) {
        binaries = n % 2 + binaries;
        n = n >>> 1;
    }
    return binaries;
}


console.log(toBinary(64))

for(let j = 0; j<4; ++j) {
    console.log(j)
}