var StateMachine = require("../src/js/StateMachine.js");

describe("StateMachine", function() {

    var _stateMachine;

    beforeEach(function() {
        _stateMachine = new StateMachine();
    });

    it("should be defined", function() {
        expect(StateMachine).toBeDefined();
    });

    describe("States registration", function() {

        it("allows to add states", function() {
            _stateMachine.addState({ id: "stateA" });
        });

        it("indicates if state is added", function() {
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

});