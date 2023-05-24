const _ = require('lodash');

const str =
    'Curabitur fermentum ante at nulla molestie, vitae fermentum est cursus. Nam non justo libero. Proin orci tortor, hendrerit quis consectetur nec, egestas faucibus libero.';
const newStr = _.truncate(str, {
    length: 55,
    separator: ' ',
});

console.log({ newStr });