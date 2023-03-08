const _ = require('lodash');

const user = {
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

const addressGeoFirstLng = _.get(user, 'address.geo.1.lng');

console.log('addressGeoFirstLng', addressGeoFirstLng);

_.set(user, 'address.geo.3', { lat: '0', lng: '0' });

_.unset(user, 'contactInfo.website.1');

const omittedUserData = _.omit(user, 'contactInfo.website.1'); // или так, так безопаснее, так как создадим копию

console.log('user', user);

console.log('omittedUserData', omittedUserData);