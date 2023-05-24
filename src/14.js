const _ = require('lodash');

const users = [
    {
        id: 0,
        username: 'Zero',
        isActive: 'N',
    },
    {
        id: 1,
        name: 'Leanne Graham',
        username: 'Antonette',
        email: 'Shanna@melissa.tv',
        isActive: 'Y',
    },
    {
        id: 2,
        name: 'Ervin Howell',
        username: 'Bret',
        email: 'Sincere@april.biz',
        isActive: 'Y',
    },
    {
        id: 3,
        name: 'Clementine Bauch',
        username: 'Samantha',
        email: 'Nathan@yesenia.net',
        isActive: 'N',
    },
    {
        id: 4,
        name: 'Patricia Lebsack',
        username: 'Karianne',
        email: 'Julianne.OConner@kory.org',
        isActive: 'N',
    },
];

const data = _.groupBy(users, 'isActive');

console.log(data);