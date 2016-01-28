
var _ = require('lodash');

function StateMachine() {

    var self = this,
        _states = [];

    self.addState = function(state) {
        _states.push(state);
    };

    self.hasState = function(stateId) {
        return !_.isEmpty(_.find(_states, function(state) { return state.id === stateId }));
    };

    return self;
}

module.exports = StateMachine;
