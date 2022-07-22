// creating the connection
const connection = require('../config/db.config')();
const UserModel = require('../models/user.model');
const User = new UserModel(connection);

exports.getAllUsers = (req, res, next) => {
    User.findAll()
    .then(data => {
        res.status(200).json(data);
    }).catch(err => {console.log(err)});
}

exports.getSingleUser = (req, res, next) => {
    const id = req.params.id;
    User.findById(id)
    .then(data => {
        res.status(200).json(data);
    }).catch(err => {console.log(err)});
}

exports.createSingleUser = (req, res, next) => {
    const {
        firstname, 
        middlename, 
        lastname, 
        phone, 
        location, 
        facebook, 
        instagram, 
        twitter
    } = req.body;

    User.create(firstname, middlename, lastname, phone, location, facebook, instagram, twitter)
    .then(data => {
        res.status(200).json(data);
    }).catch(err => {console.log(err)});
}

exports.updateSingleUser = (req, res, next) => {
    const id = req.params.id;
    const {
        firstname, 
        middlename, 
        lastname, 
        phone, 
        location, 
        facebook, 
        instagram, 
        twitter
    } = req.body;

    User.update(id, firstname, middlename, lastname, phone, location, facebook, instagram, twitter)
    .then(data => {
        res.status(200).json(data);
    }).catch(err => {console.log(err)});
}

exports.deleteSingleUser = (req, res, next) => {
    const id = req.params.id;

    User.delete(id)
    .then(data => {
        res.status(200).json(data);
    }).catch(err => {console.log(err)});
}

exports.deleteAllUsers = (req, res, next) => {
    User.deleteAll()
    .then(data => {
        res.status(200).json(data);
    }).catch(err => {console.log(err)});
}
