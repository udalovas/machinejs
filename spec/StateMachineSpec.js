var StateMachine = require("../src/js/StateMachine.js");

describe("StateMachine", function() {

    var _stateMachine;

    it("should be defined", function() {
        expect(StateMachine).toBeDefined();
    });

    describe("States registration", function() {

        beforeEach(function() {
            _stateMachine = new StateMachine();
        });

        it("should add states", function() {
            _stateMachine.addState({ id: "stateA" });
        });

        it("should indicate if state is added", function() {
            _stateMachine.addState({ id: "state A" });
            expect(_stateMachine.hasState("state A")).toBe(true);
        });
    });

});