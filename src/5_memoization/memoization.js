const _ = require('lodash');

const reducedMultiply = _.memoize(numbersArray =>
    numbersArray.reduce((result, number) => result * number)
);

console.log(reducedMultiply([1, 2, 3, 4, 5]));

reducedMultiply([1, 2, 3, 4, 5, 6]);

console.log('cache', reducedMultiply.cache);

reducedMultiply.cache.clear();

console.log('cleared cache', reducedMultiply.cache);