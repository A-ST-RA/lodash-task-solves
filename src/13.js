const _ = require('lodash');

const users1 = [
    { id: 0, username: 'Zero' },
    { id: 1, name: 'Leanne Graham', username: 'Antonette', email: 'Shanna@melissa.tv' },
    { id: 2, name: 'Ervin Howell', username: 'Bret', email: 'Sincere@april.biz' },
];

const users2 = [
    { id: 1, name: 'Leanne Graham', username: 'Antonette', email: 'Shanna@melissa.tv' },
    { id: 2, name: 'Ervin Howell', username: 'Bret', email: 'Sincere@april.biz' },
    { id: 3, name: 'Clementine Bauch', username: 'Samantha', email: 'Nathan@yesenia.net' },
];

const mergeArray = _.uniqWith([...users1, ...users2], _.isEqual);