const _ = require('lodash');

const fruits1 = [
  {
      type: 'apple',
      color: 'red',
      emoji: '🍎',
  },
  {
      type: 'orange',
      color: 'orange',
      emoji: '🍊',
  },
  {
      type: 'peach',
      emoji: '🍑',
      color: 'orange',
  },
  {
      type: 'apple',
      color: 'green',
      emoji: '🍏',
  },
];

const fruits2 = [
  {
      type: 'mango',
      color: 'yellow',
      emoji: '🥭',
  },
  {
      type: 'orange',
      color: 'orange',
      emoji: '🍊',
  },
  {
      type: 'pineapple',
      emoji: '🍍',
      color: 'brown',
  },
  {
      type: 'peach',
      emoji: '🍑',
      color: 'orange',
  },
  {
      type: 'kiwi',
      emoji: '🥝',
      color: 'green',
  },
  {
      type: 'peach',
      emoji: '🍑',
      color: 'peach',
  },
];
    
// Найти массив общих одинаковых элементов
const commonFruits = _.intersectionBy(fruits1, fruits2, 'type');
console.log(commonFruits);

// Найти массив схожих по типу фруктов
const similarFruits = _.intersectionWith(fruits1, fruits2, (fruit1, fruit2) => {
  return fruit1.type === fruit2.type;
});
console.log(similarFruits);

// Каких элементов первого нет во втором массиве?
const uniqueFruits = _.differenceBy(fruits1, fruits2, 'type');
console.log(uniqueFruits);
