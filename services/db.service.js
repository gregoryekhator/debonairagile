/*
*
* Database entity service layer
*
*/

class DB {

    constructor(connection) {
        this.connection = connection;
    }

    createDatabase() {
        return new Promise((resolve, reject) => {
            this.connection.query(`CREATE DATABASE IF NOT EXISTS ${process.env.DB_NAME}`, (err, rows) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(rows);
                }
            });
        });
    }

    dropTable(tableName) {
        return new Promise((resolve, reject) => {
            this.connection.query(`DROP TABLE IF EXISTS ${tableName}`, (err, rows) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(rows);
                }
            });
        });
    }

    dropDatabase() {
        return new Promise((resolve, reject) => {
            this.connection.query(`DROP DATABASE IF EXISTS ${process.env.DB_NAME}`, (err, rows) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(rows);
                }
            });
        });
    }

    createTable(tableName, columns) {
        return new Promise((resolve, reject) => {
            this.connection.query(`CREATE TABLE IF NOT EXISTS ${tableName} (${columns.join(', ')})`, (err, rows) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(rows);
                }
            });
        });
    }

    insert(tableName, columns, values) {
        return new Promise((resolve, reject) => {
            this.connection.query(`INSERT INTO ${tableName} (${columns.join(', ')}) VALUES (${values.join(', ')})`, (err, rows) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(rows);
                }
            });
        });
    }

    update(tableName, columns, values, id) {
        return new Promise((resolve, reject) => {
            this.connection.query(`UPDATE ${tableName} SET ${columns} = ${values} WHERE id = ${id}`, (err, rows) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(rows);
                }
            });
        });
    }

    delete(tableName, id) {
        return new Promise((resolve, reject) => {
            this.connection.query(`DELETE FROM ${tableName} WHERE id = ${id}`, (err, rows) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(rows);
                }
            });
        });
    }

    findById(tableName, id) {
        return new Promise((resolve, reject) => {
            this.connection.query(`SELECT * FROM ${tableName} WHERE id = ${id}`, (err, rows) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(rows[0]);
                }
            });
        });
    }

    findByEmail(tableName, email) {
        return new Promise((resolve, reject) => {
            this.connection.query(`SELECT * FROM ${tableName} WHERE email = '${email}'`, (err, rows) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(rows[0]);
                }
            });
        });
    }

    query(sql, args) {
        return new Promise((resolve, reject) => {
            this.connection.query(sql, args, (err, rows) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(rows);
                }
            });
        });
    }

    close() {
        return new Promise((resolve, reject) => {
            this.connection.end(err => {
                if (err) {
                    reject(err);
                } else {
                    resolve();
                }
            });
        });
    }
}

module.exports = DB;