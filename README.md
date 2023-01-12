<details>
  <summary>1</summary>
Посчитать количество слов в тексте

  ```
  Классический «Lorem ipsum dolor sit amet…» проход отнести к ремиксов римского философа Цицерона 45 г. до н.э. текст De Finibus Bonorum et Malorum («О крайностями добра и зла»). Более конкретно, проход, как полагают, происходит из секций 1.10.32 - 33 из его текста, с наиболее заметным часть извлечена ниже:
  ```
Ожидаемый результат: 50
</details>

<details>
  <summary>2</summary>
Обрезать текст

Результат: "Curabitur fermentum ante at nulla molestie, vitae..."

  ```
  Curabitur fermentum ante at nulla molestie, vitae fermentum est cursus. Nam non justo libero. 
  Proin orci tortor, hendrerit quis consectetur nec, egestas faucibus libero. 
  ```
</details>

<details>
  <summary>3</summary>
debounce и throttle: 

1) в чем суть и отличия debounce и throttle
2) проверить работу ф-ции ниже
3) навесить debounce на logScrollY
4) навесить throttle на logScrollY
5) протестировать

  ```
  const logScrollY = () => console.log(window.scrollY);
  
  window.addEventListener('scroll', logScrollY);
  ```
</details>

<details>
  <summary>4</summary>
1) Отсортировать массив в порядке возрастания по позиции
2) Отсортировать массив в порядке возрастания по типу, и в порядке убывания по позиции


  ```
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
        {
            type: 'kiwi',
            emoji: '🥝',
            color: 'green',
            position: 8,
        },
        {
            type: 'peach',
            emoji: '🍑',
            color: 'peach',
            position: 9,
        },
    ];
  ```
</details>

<details>
  <summary>5</summary>
Мемоизировать функцию, вызвать несколько раз, затем почистить ее кеш

  ```
  const multiplyArray = (numbersArray: number[]) => numbersArray.reduce((result, number) => result * number);
  ```
</details>

<details>
  <summary>6</summary>

1) Найти значение по пути 'address.geo.1.lng'
2) Добавить элемент { lat: '0', lng: '0' } по пути 'address.geo.3'
3) Убрать элемент по пути 'contactInfo.website.1'

  ```
    {
        id: 5,
        name: 'Chelsey Dietrich',
        username: 'Kamren',
        address: {
            street: 'Skiles Walks',
            suite: 'Suite 351',
            city: 'Roscoeview',
            zipcode: '33263',
            geo: [
                {
                    lat: '-31.8129',
                    lng: '62.5342',
                },
                {
                    lat: '-15.89',
                    lng: '57.08',
                },
            ],
        },
        contactInfo: {
            email: 'Lucio_Hettinger@annie.ca',
            phone: '(254)954-1289',
            website: ['demarco.info', 'jacynthe.com'],
        },
        company: {
            name: 'Keebler LLC',
            catchPhrase: 'User-centric fault-tolerant solution',
            bs: 'revolutionize end-to-end systems',
        },
    };
  ```
</details>

<details>
  <summary>7</summary>

1. Найти массив общих одинаковых элементов
2. Найти массив схожих по типу фруктов
3. Каких элементов первого нет во втором массиве?

  ```
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
  ```
</details>

<details>
  <summary>8</summary>

1) как создать такой же объект, но без свойств "address", "company", "website"?
2) как создать объект только с этими свойствами?

  ```
    {
        id: 5,
        name: "Chelsey Dietrich",
        username: "Kamren",
        email: "Lucio_Hettinger@annie.ca",
        address: {
            street: "Skiles Walks",
            suite: "Suite 351",
            city: "Roscoeview",
            zipcode: "33263",
            geo: {
                lat: "-31.8129",
                lng: "62.5342"
            }
        },
        phone: "(254)954-1289",
        website: "demarco.info",
        company: {
            name: "Keebler LLC",
            catchPhrase: "User-centric fault-tolerant solution",
            bs: "revolutionize end-to-end systems"
        }
    }
  ```
</details>

<details>
  <summary>9</summary>

1. какие виды копирования бывают? в чем разница и недостатки
2. объяснить вывод результата
3. как сравнить с помощью lodash?
4. как скопировать эталонный объект?

  ```
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
    });
  ```
</details>

<details>
  <summary>10</summary>
сделать первую букву заглавной

  ```
  1) "михаил"
  2) "LOREM IPSUM DOLOR SIT AMET, CONSECTETUR ADIPISCING ELIT. TU QUIDEM REDDES; NAM ANTE ARISTIPPUS, ET ILLE MELIUS. DUO REGES: CONSTRUCTIO INTERRETE."
  ```
</details>

<details>
  <summary>11</summary>
смержить объекты

  ```
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
  ```
</details>

<details>
  <summary>12</summary>
смержить массивы

  ```
    const users1 = [
        { id: 1, name: 'Leanne Graham' },
        { id: 2, name: 'Ervin Howell', email: 'Sincere@april.biz' },
    ];

    const users2 = [
        { id: 0, username: 'Zero' },
        { id: 2, username: 'Bret' },
        { id: 1, username: 'Antonette', email: 'Shanna@melissa.tv' },
    ];
  ```  
  ```  
    // Результат: 
    
    [
        {
            "id": 0,
            "username": "Zero"
        },
        {
            "id": 1,
            "name": "Leanne Graham",
            "username": "Antonette",
            "email": "Shanna@melissa.tv"
        },
        {
            "id": 2,
            "name": "Ervin Howell",
            "username": "Bret",
            "email": "Sincere@april.biz"
        }
    ]
  ```
</details>

<details>
  <summary>13</summary>
смержить массивы, убрав дублирование

  ```
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
  ```  
```
    // Результат
    [
        {
            "id": 0,
            "username": "Zero"
        },
        {
            "id": 1,
            "name": "Leanne Graham",
            "username": "Antonette",
            "email": "Shanna@melissa.tv"
        },
        {
            "id": 2,
            "name": "Ervin Howell",
            "username": "Bret",
            "email": "Sincere@april.biz"
        },
        {
            "id": 3,
            "name": "Clementine Bauch",
            "username": "Samantha",
            "email": "Nathan@yesenia.net"
        }
    ]
  ```
</details>

<details>
  <summary>14</summary>
разделить массив активных и неактивных юзеров

  ```
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
   ```
``` 
    // Результат 
    {
        "N": [
            {
                "id": 0,
                "username": "Zero",
                "isActive": "N"
            },
            ...
        ],
        "Y": [
            {
                "id": 1,
                "name": "Leanne Graham",
                "username": "Antonette",
                "email": "Shanna@melissa.tv",
                "isActive": "Y"
            },
            ...
        ]
    }
  ```
</details>

<details>
  <summary>15</summary>
подсчитать кол-во юзеров c указанным email и без

  ```
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
```
```
    // Результат
    {
        "false": 3,
        "true": 2
    }   
  ```
</details>

<details>
  <summary>16</summary>
сгенерировать массив чисел от 0 до 100 и выбрать рандомный элемент
</details>

<details>
  <summary>17</summary>
сгенерировать случайную строку из 10 символов
</details>

<details>
  <summary>18</summary>

1. сгенерировать целое случайное число от 0 до 100; 
2. число с точкой от 0 до 1, округлив до сотых
</details>

<details>
  <summary>19</summary>
сгенерировать массив длиной 100 с шагом 5 и разделить его на группы по 5 элементов (массив массивов)
</details>

<details>
  <summary>20</summary>
вызов по цепочке

  ```
  отрефакторить решения, где больше 1 строки, в цепочный вызов
  ```
</details>

