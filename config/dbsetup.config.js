const dbService = require('../services/db.service');

const dbSetup = (connection) => {
    // Create User Table
    let tableName = 'users';
    let tableColumns = [
        'id INT(11) NOT NULL AUTO_INCREMENT',
        'firstname VARCHAR(255) NOT NULL',
        'middlename VARCHAR(255) NOT NULL',
        'lastname VARCHAR(255) NOT NULL',
        'phone VARCHAR(255) NOT NULL',
        'location VARCHAR(255) NOT NULL',
        'facebook VARCHAR(255) NOT NULL',
        'instagram VARCHAR(255) NOT NULL',
        'twitter VARCHAR(255) NOT NULL',
        'PRIMARY KEY (id)'
    ];

    const dbServiceInstance = new dbService(connection);
    dbServiceInstance.createTable(tableName, tableColumns)
    .then(() => {
        console.log('Table created');
    })
    .catch(e => console.log(e))
}

module.exports = dbSetup