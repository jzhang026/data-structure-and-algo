var step = require('./steps');
var expect = require('chai').expect;

describe('step recurring', function() {
    it('should return', function() {
        expect(step(3)).to.equal(3);
        expect(step(4)).to.equal(5);
    })
})