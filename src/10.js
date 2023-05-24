const _ = require('lodash');

const firstString = 'михаил';

const secondString =
    'LOREM IPSUM DOLOR SIT AMET, CONSECTETUR ADIPISCING ELIT. TU QUIDEM REDDES; NAM ANTE ARISTIPPUS, ET ILLE MELIUS. DUO REGES: CONSTRUCTIO INTERRETE.';

console.log(_.upperFirst(firstString), _.upperFirst(secondString));