const mysql = require('mysql');
const dbService = require('../services/db.service');
const dbSetup = require('./dbsetup.config');

const startDB = () => {
    const connection = mysql.createConnection({
        host: process.env.DB_HOST,
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_NAME
    });

    connection.connect((err) => {
        if (err) {
            console.error('error connecting: ' + err.stack);
            return;
        }
        else {
            console.log('connected as id ' + connection.threadId);

            /*
            *
            * Uncomment this block to create the database
            *
            */

            // try {
            //     const dbServiceInstance = new dbService(connection);
            //     dbServiceInstance.createDatabase()
            //     .then(() => {
            //         console.log('Database created');
            //     })
            //     .catch(e => console.log(e))
            // }
            // catch (e) {
            //     console.error('error connecting: ' + e.stack);
            // }

            /*
            *
            * Uncomment this block to create the tables
            * 
            * Use the dbSetup function to create the database tables
            * 
            */

            // dbSetup(connection); // creating default database tables
        }
    });

    return connection;
}

module.exports = startDB;