const Bird = require("./Bird");

class Egg {
    constructor(Parent){
        this.Parent = Parent;
    }

    break() {
        console.log('Egg breaks');
    }
}

module.exports = Egg;