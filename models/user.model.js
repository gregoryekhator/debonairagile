/*
*
* User entity model
*
*/

class User {
    constructor(connection) {
        this.connection = connection;
    }

    findAll() {
        return new Promise((resolve, reject) => {
            this.connection.query('SELECT * FROM users', (err, rows) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(rows);
                }
            });
        });
    }

    findById(id) {
        return new Promise((resolve, reject) => {
            this.connection.query('SELECT * FROM users WHERE id = ?', [id], (err, rows) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(rows[0]);
                }
            });
        });
    }

    findByEmail(email) {
        return new Promise((resolve, reject) => {
            this.connection.query('SELECT * FROM users WHERE email = ?', [email], (err, rows) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(rows[0]);
                }
            });
        });
    }

    create(firstname, middlename, lastname, phone, location, facebook, instagram, twitter) {
        return new Promise((resolve, reject) => {
            this.connection.query('INSERT INTO users (firstname, middlename, lastname, phone, location, facebook, instagram, twitter) VALUES (?, ?, ?, ?, ?, ?, ?, ?)', [firstname, middlename, lastname, phone, location, facebook, instagram, twitter], (err, result) => {
                if (err) {
                    reject(err);
                } else {
                    // resolve(result);
                    resolve(this.findAll())
                }
            });
        });
    }

    update(id, firstname, middlename, lastname, phone, location, facebook, instagram, twitter) {
        return new Promise((resolve, reject) => {
            this.connection.query('UPDATE users SET firstname = ?, middlename = ?, lastname = ?, phone = ?, location = ?, facebook = ?, instagram = ?, twitter = ? WHERE id = ?', [firstname, middlename, lastname, phone, location, facebook, instagram, twitter, id], (err, result) => {
                if (err) {
                    reject(err);
                } else {
                    // resolve(result);
                    resolve(this.findAll())
                }
            });
        });
    }

    delete(id) {
        return new Promise((resolve, reject) => {
            this.connection.query('DELETE FROM users WHERE id = ?', [id], (err, result) => {
                if (err) {
                    reject(err);
                } else {
                    // resolve(result);
                    resolve(this.findAll())
                }
            });
        });
    }

    deleteAll() {
        return new Promise((resolve, reject) => {
            this.connection.query('DELETE FROM users', (err, result) => {
                if (err) {
                    reject(err);
                } else {
                    // resolve(result);
                    resolve(this.findAll())
                }
            });
        });
    }

}

module.exports = User;