// CommonJS, every file is module (by default)
// Modules - Encapsulated Code (only share minimum)
const names = require('./4-names');
const sayHi = require('./5-utils');
const data = require('./6-alternative-flavor');
require('./7-mind-grenade');
const { items, singlePerson } = require('./6-alternative-flavor');
sayHi('susan');
sayHi(names.john);
sayHi(names.peter);
console.log(items[0]);
console.log(singlePerson.name);
