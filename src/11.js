const _ = require('lodash');

const obj1 = {
    users: [
        { id: 1, name: 'Leanne Graham' },
        { id: 2, name: 'Ervin Howell' },
    ],
};

const obj2 = {
    users: [
        { username: 'Bret', email: 'Sincere@april.biz' },
        { username: 'Antonette', email: 'Shanna@melissa.tv' },
    ],
};

const obj3 = _.merge(obj1, obj2);

console.log(obj3);