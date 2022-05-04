const Bird = require('./Bird');

class Arara extends Bird {
    constructor(color) {
        super(color);
    }

    fly() {
        console.log('I can fly');
    }

    sing() {
        console.log('ARARA ARARA');
    }
}

module.exports = Arara;