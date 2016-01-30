'use strict';

var _ = require('lodash');

function StateMachine() {

    var self = this,
        _states = [],
        _transitions = [];

    self.addState = function(state) {
        _states.push(state);
        return self;
    };

    self.hasState = function(stateId) {
        return !_.isEmpty(_.find(_states, function(state) { return state.id === stateId }));
    };

    self.hasTransition = function(from, to) {
        return !_.isEmpty(_.find(_transitions, function(transition) { return transition.from === from && transition.to === to }));
    };

    self.defineTransition = function(transition) {

        if(!self.hasState(transition.from) || !self.hasState(transition.to) || self.hasTransition(transition.from, transition.to)) {
            return false;
        }

        _transitions.push(transition);
        return true;
    };

    return self;
}

module.exports = StateMachine;
