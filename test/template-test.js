const assert = require('assert');

/* Test de ejemplo a partir del cual crear mas tests */

describe('x', function () {
    beforeEach(function () {
    });

    describe('#doStuff()', function () {
        it('does stuff', function (done) {
            assert.ok(true);
            done();
        });
    });

    afterEach(function () {
    });
});


