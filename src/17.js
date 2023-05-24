const _ = require('lodash');

const str = _.times(10, () => _.random(35).toString(36)).join('');

console.log(str);