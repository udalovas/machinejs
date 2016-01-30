var StateMachine = require("../src/js/StateMachine.js");

describe("StateMachine", function() {

    var _stateMachine;

    beforeEach(function() {
        _stateMachine = new StateMachine();
    });

    it("should be defined", function() {
        expect(StateMachine).toBeDefined();
    });

    describe("States setup", function() {

        it("allows to add states", function() {
            _stateMachine.addState({ id: "stateA" });
        });

        it("indicates if some state is added", function() {
            _stateMachine.addState({ id: "state A" });
            expect(_stateMachine.hasState("state A")).toBe(true);
        });

        it("allows to add states in a pipe", function() {
            _stateMachine
                .addState({ id: "state A" })
                .addState({ id: "state B"});
            expect(_stateMachine.hasState("state A")).toBe(true);
            expect(_stateMachine.hasState("state B")).toBe(true);
        });
    });

    describe("Transitions setup", function() {

        it('should define transitions', function() {
            _stateMachine.defineTransition({
                from: 'A',
                to: 'B'
            });
        });

        describe('should handle invalid inputs', function() {

            it('indicates if transition there is no states for such transition', function() {
                expect(_stateMachine.defineTransition({
                   from: 'A',
                   to: 'B'
                })).toBe(false);
            });

            it('indicates if there is already transition defined between states provided', function() {

                _stateMachine.addState({ id: "A" });
                _stateMachine.addState({ id: "B" });

                expect(_stateMachine.defineTransition({
                    from: 'A',
                    to: 'B'
                })).toBe(true);

                expect(_stateMachine.defineTransition({
                    from: 'A',
                    to: 'B'
                })).toBe(false);
            });
        });

    });

    describe('Transitions in action', function() {
       it('should execute transition', function() {

       });
    });

});