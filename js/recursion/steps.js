function step(n) {
    if (n < 3) return n;
    return step(n-1) + step(n-2);
}

module.exports = step;