function timing(fn) {
    
    return function() {
        
        let args = [].slice.call(arguments);
        let start = new Date().valueOf();
        let results = fn.apply(null, args)
        let end = new Date().valueOf();
        console.log('the ellapsed time is ' + (end - start) + 'ms')
        return results;
    }
}

Number.isInteger = Number.isInteger || function (value) {
    return typeof value === 'number' && isFinite(value) && Math.floor(value) === value
}

module.exports = {
    timing
};