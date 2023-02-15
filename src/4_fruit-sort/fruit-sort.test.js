const fruitSort = require("./fruit-sort");

const fruits = [
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
        position: 1,
    },
];

const fruitsSortedByPos = [
    {
        type: 'orange',
        color: 'orange',
        emoji: '🍊',
        position: 1,
    },
    {
        type: 'apple',
        color: 'red',
        emoji: '🍎',
        position: 0,
    }
];

test('should be defined', () => {
    expect(fruitSort).toBeDefined();
})

test('should sort fuits by position', () => {
    expect(fruitSort(fruits, 'position', 'asc')).toEqual(fruitsSortedByPos);
})