const Arara = require('./Arara');
let arara = new Arara('red', true);
arara.fly();
arara.sing();
araraNest = arara.createNest();
egg = arara.layEggs(araraNest);
egg.break();
