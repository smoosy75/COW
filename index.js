const { info } = require('./information.js')

var cowsay = require("cowsay");

console.log(cowsay.say({
    text: `i'm ${info.name} from ${info.campus}`,
    e: "oO",
    T: "U "
}));
