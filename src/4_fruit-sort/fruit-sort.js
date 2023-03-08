const _ = require('lodash');

const fruits = [
    {
        type: 'kiwi',
        emoji: '🥝',
        color: 'green',
        position: 8,
    },
    {
        type: 'apple',
        color: 'red',
        emoji: '🍎',
        position: 0,
    },
    {
        type: 'orange',
        color: 'orange',
        emoji: '🍊',
        position: 0,
    },
    {
        type: 'peach',
        emoji: '🍑',
        color: 'orange',
        position: 1,
    },
    {
        type: 'apple',
        color: 'green',
        emoji: '🍏',
        position: 3,
    },
    {
        type: 'peach',
        emoji: '🍑',
        color: 'peach',
        position: 9,
    },
    {
        type: 'mango',
        color: 'yellow',
        emoji: '🥭',
        position: 4,
    },
    {
        type: 'orange',
        color: 'orange',
        emoji: '🍊',
        position: 5,
    },
    {
        type: 'pineapple',
        emoji: '🍍',
        color: 'brown',
        position: 5,
    },
    {
        type: 'peach',
        emoji: '🍑',
        color: 'orange',
        position: 7,
    },
];

const sortedByPosition = _.sortBy(fruits, 'position');

const sortedByType = _.sortBy(fruits, 'type');

const orderedByPosition = _.orderBy(fruits, 'position', 'desc');

console.log(
    'byPos', sortedByPosition,
    'byType', sortedByType,
    'orderedByPos', orderedByPosition
)

