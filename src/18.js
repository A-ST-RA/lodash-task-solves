const _ = require('lodash');

const arrOfNumbers = _.random(0, 100);

const floatNumbers = _.random(true).toFixed(2);

console.log(arrOfNumbers, floatNumbers);