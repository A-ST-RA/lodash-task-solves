const _ = require('lodash');

const users1 = [
    { id: 1, name: 'Leanne Graham' },
    { id: 2, name: 'Ervin Howell', email: 'Sincere@april.biz' },
];

const users2 = [
    { id: 0, username: 'Zero' },
    { id: 2, username: 'Bret' },
    { id: 1, username: 'Antonette', email: 'Shanna@melissa.tv' },
];

const user3 = _.map(users2, function (item) {
    return _.merge(item, _.find(users1, { id: item.id }));
});

console.log( user3 );