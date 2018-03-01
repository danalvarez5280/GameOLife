var assert = require('chai').assert;
var Block = require('../Block');



describe('Block', function () {

    it('should be a function', function () {
        assert.isFunction(Block);
    });

    it('should be dead to start', function () {
        var block = new Block();
        assert.equal(block.alive, false);
    });

    it('should be able to die or revived', function () {
        var block = new Block();
        assert.equal(block.alive, false)
        block.checkAlive();
        assert.equal(block.alive, true)
        block.checkAlive();
        assert.equal(block.alive, false)

    });
});