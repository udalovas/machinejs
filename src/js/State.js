
function State(options) {

    var _id = options.id,
        self = this;

    self.getId = function() {
        return _id;
    }
}

module.exports = State;
