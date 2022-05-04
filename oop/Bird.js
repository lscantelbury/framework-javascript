const Wings = require('./Wings');
const Nest = require('./Nest');
const Egg = require('./Egg');

class Bird {

    // Object instantiation inside the class,
    // an exemple of composition
    wings = new Wings(true);
    
    // Constructor exemple
    constructor(color, flies) {
        this._color = color;
        this._flies = flies;
    }

    // Method for flying, requires a flying bird
    // and healthy wings
    fly(){
        if (this.flies && this.wings.healthy) {
            console.log('I can fly');
        }else {
            console.log('I cannot fly');
        }
    };


    // Method for laying eggs, which require an external
    // Nest object to exchange information and take decisions
    // an exemple of association
    layEggs(Nest) {
        if (Nest.warm) {
            console.log('Laying eggs');
            return new Egg(this);
        }else {
            console.log('Here is not warm')
        }
    };

    // Abstract method, which is not implemented
    // in the class, but in the child classes
    // each bird sings differently
    sing() {
        throw new Error('Method not implemented');
    };

    // Method which creates a new nest
    createNest() {
        return new Nest(true);
    }

    // Encapsulation exemple
    get color() {
        return this._color;
    }

    set color(color) {
        this._color = color;
    }

    get flies() {
        return this._flies;
    }

    set flies(flies) {
        this._flies = flies;
    }
}

module.exports = Bird;