const _ = require('lodash');

const arr = _.range(0, 100, 5)

const chunk = _.chunk(arr, 5)

console.log(chunk);