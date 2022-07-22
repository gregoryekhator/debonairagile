const db = require('../config/db.config')();
// const UserModel = require('../models/user.model');
// const User = new UserModel(db);
const dbService = require('../services/db.service');
const dbServiceInstance = new dbService(db);

const Seeder = () => {
    console.log('Seeding Database...');

    const users = [
        {
            photo: 'https://cdn.pixabay.com/photo/2019/10/22/13/43/man-4568761__340.jpg',
            firstname: 'John',
            middlename: 'Doe',
            lastname: 'Doe',
            phone: '123456789',
            location: 'New York',
            facebook: 'https://www.facebook.com/',
            instagram: 'https://www.instagram.com/',
            twitter: 'https://www.twitter.com/'
        },
        {
            photo: 'https://cdn.pixabay.com/photo/2019/10/22/13/43/man-4568761__340.jpg',
            firstname: 'Jane',
            middlename: 'Doe',
            lastname: 'Doe',
            phone: '123456789',
            location: 'New York',
            facebook: 'https://www.facebook.com/',
            instagram: 'https://www.instagram.com/',
            twitter: 'https://www.twitter.com/'
        },
        {
            photo: 'https://cdn.pixabay.com/photo/2019/10/22/13/43/man-4568761__340.jpg',
            firstname: 'Precious',
            middlename: 'Paul',
            lastname: 'Adeyinka',
            phone: '07085700041',
            location: 'Abuja, Nigeria',
            facebook: '#',
            instagram: '#',
            twitter: '#',
        },
        {
        photo: 'https://cdn.pixabay.com/photo/2019/10/22/13/43/man-4568761__340.jpg',
        firstname: 'Prince',
        middlename: 'Bright',
        lastname: 'Olabanji',
        phone: '07085700041',
        location: 'Abuja, Nigeria',
        facebook: '#',
        instagram: '#',
        twitter: '#',
        },
        {
        photo: 'https://cdn.pixabay.com/photo/2019/10/22/13/43/man-4568761__340.jpg',
        firstname: 'Tamuno',
        middlename: 'Tonye',
        lastname: 'Harry',
        phone: '07085700041',
        location: 'Abuja, Nigeria',
        facebook: '#',
        instagram: '#',
        twitter: '#',
        },
        {
        photo: 'https://cdn.pixabay.com/photo/2019/10/22/13/43/man-4568761__340.jpg',
        firstname: 'Mide',
        middlename: 'Ogundijo',
        lastname: 'Olawale',
        phone: '07085700041',
        location: 'Abuja, Nigeria',
        facebook: '#',
        instagram: '#',
        twitter: '#',
        },
        {
        photo: 'https://cdn.pixabay.com/photo/2019/10/22/13/43/man-4568761__340.jpg',
        firstname: 'Moses',
        middlename: 'Jagaba',
        lastname: 'Sticks',
        phone: '07085700041',
        location: 'Abuja, Nigeria',
        facebook: '#',
        instagram: '#',
        twitter: '#',
        },
        {
        photo: 'https://cdn.pixabay.com/photo/2019/10/22/13/43/man-4568761__340.jpg',
        firstname: 'Michael',
        middlename: '',
        lastname: 'Utanbong',
        phone: '07085700041',
        location: 'Abuja, Nigeria',
        facebook: '#',
        instagram: '#',
        twitter: '#',
        },
        {
        photo: 'https://cdn.pixabay.com/photo/2019/10/22/13/43/man-4568761__340.jpg',
        firstname: 'Preye',
        middlename: '',
        lastname: 'Nabena',
        phone: '07085700041',
        location: 'Abuja, Nigeria',
        facebook: '#',
        instagram: '#',
        twitter: '#',
        },
        {
        photo: 'https://cdn.pixabay.com/photo/2019/10/22/13/43/man-4568761__340.jpg',
        firstname: 'Panda',
        middlename: '',
        lastname: 'Zakari',
        phone: '07085700041',
        location: 'Abuja, Nigeria',
        facebook: '#',
        instagram: '#',
        twitter: '#',
        },
        {
        photo: 'https://cdn.pixabay.com/photo/2019/10/22/13/43/man-4568761__340.jpg',
        firstname: 'Wisdom',
        middlename: '',
        lastname: 'Brown',
        phone: '07085700041',
        location: 'Abuja, Nigeria',
        facebook: '#',
        instagram: '#',
        twitter: '#',
        },
        {
        photo: 'https://cdn.pixabay.com/photo/2019/10/22/13/43/man-4568761__340.jpg',
        firstname: 'Mnefoni',
        middlename: '',
        lastname: 'Juliet',
        phone: '07085700041',
        location: 'Abuja, Nigeria',
        facebook: '#',
        instagram: '#',
        twitter: '#',
        },
        {
        photo: 'https://cdn.pixabay.com/photo/2019/10/22/13/43/man-4568761__340.jpg',
        firstname: 'Mnefoni',
        middlename: '',
        lastname: 'Juliet',
        phone: '07085700041',
        location: 'Abuja, Nigeria',
        facebook: '#',
        instagram: '#',
        twitter: '#',
        },
        {
        photo: 'https://cdn.pixabay.com/photo/2019/10/22/13/43/man-4568761__340.jpg',
        firstname: 'Mnefoni',
        middlename: '',
        lastname: 'Juliet',
        phone: '07085700041',
        location: 'Abuja, Nigeria',
        facebook: '#',
        instagram: '#',
        twitter: '#',
        },
        {
        photo: 'https://cdn.pixabay.com/photo/2019/10/22/13/43/man-4568761__340.jpg',
        firstname: 'Mnefoni',
        middlename: '',
        lastname: 'Juliet',
        phone: '07085700041',
        location: 'Abuja, Nigeria',
        facebook: '#',
        instagram: '#',
        twitter: '#',
        },
        {
        photo: 'https://cdn.pixabay.com/photo/2019/10/22/13/43/man-4568761__340.jpg',
        firstname: 'Mnefoni',
        middlename: '',
        lastname: 'Juliet',
        phone: '07085700041',
        location: 'Abuja, Nigeria',
        facebook: '#',
        instagram: '#',
        twitter: '#',
        },
        {
        photo: 'https://cdn.pixabay.com/photo/2019/10/22/13/43/man-4568761__340.jpg',
        firstname: 'Mnefoni',
        middlename: '',
        lastname: 'Juliet',
        phone: '07085700041',
        location: 'Abuja, Nigeria',
        facebook: '#',
        instagram: '#',
        twitter: '#',
        },
        {
        photo: 'https://cdn.pixabay.com/photo/2019/10/22/13/43/man-4568761__340.jpg',
        firstname: 'Mnefoni',
        middlename: '',
        lastname: 'Juliet',
        phone: '07085700041',
        location: 'Abuja, Nigeria',
        facebook: '#',
        instagram: '#',
        twitter: '#',
        },
    ];

    users.forEach((user, id) => {
        let tableName = 'users';
        let tableColumns = [
            'firstname',
            'middlename',
            'lastname',
            'phone',
            'location',
            'facebook',
            'instagram',
            'twitter'
        ];

        let tableValues = [
            `'${user.firstname}'`,
            `'${user.middlename}'`,
            `'${user.lastname}'`,
            `'${user.phone}'`,
            `'${user.location}'`,
            `'${user.facebook}'`,
            `'${user.instagram}'`,
            `'${user.twitter}'`,
        ];

        dbServiceInstance.insert(tableName, tableColumns, tableValues)
        .then(data => {
            // console.log(data);
            console.log(`Seeded ${id} of ${users.length}`)
        }).catch(err => {console.log(err)});

    });

    db.end();
}

module.exports = Seeder;