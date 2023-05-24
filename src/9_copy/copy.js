const _ = require('lodash');

const etalon = {
    keys: [{ key: 1 }, { key: 2 }, { key: 3 }],
};

const obj1 = {
    keys: [{ key: 1 }, { key: 2 }, { key: 3 }],
};

const obj2 = etalon;

obj2.keys.push({ key: 4 });

const obj3 = { ...etalon };

obj3.keys[2] = { key: 0 };

obj3.keys.push({ key: 5 });

const obj4 = Object.assign({}, etalon);

const obj5 = JSON.parse(JSON.stringify(etalon));

const obj6 = _.cloneDeep(etalon); // Глубокое копирование объекта (вложенные объекты копируются по содержанию, а не по ссылке)

obj5.keys.shift();

console.log({
    etalon,
    obj1,
    obj2,
    obj3,
    obj4,
    obj5,
});

console.log({
    'etalon === obj1': etalon === obj1,
    'etalon === obj2': etalon === obj2,
    'etalon === obj3': etalon === obj3,
    'etalon === obj4': etalon === obj4,
    'etalon === obj5': etalon === obj5,
    'etalon === obj6': etalon === obj6,
});