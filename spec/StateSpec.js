var State = require('../src/js/State.js');

describe('State', function() {

    it('should be defined', function() {
       expect(State).toBeDefined();
    });

    describe('#getId()', function () {
        it('should return id provided in constructor', function () {
            var someId = 'some id';
            expect(new State({ id: someId}).getId()).toEqual(someId);
        });
    });
});
