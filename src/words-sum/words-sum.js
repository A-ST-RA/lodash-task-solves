const _ = require('lodash');

const wordsSum = (text) => {
    return _.words(text).length;
}

module.exports = wordsSum;