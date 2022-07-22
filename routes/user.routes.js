const controller = require('../controllers/user.controller')

module.exports = (app) => {
    app.use((req, res, next) => {
        res.header("Access-Control-Allow-Header", "*")
        next()
    });

    app.get('/api/v1/users', controller.getAllUsers)
    app.get('/api/v1/users/:id', controller.getSingleUser)
    app.post('/api/v1/users', controller.createSingleUser)
    app.put('/api/v1/users/:id', controller.updateSingleUser)
    app.delete('/api/v1/users/:id', controller.deleteSingleUser)
}