const express = require('express');
const app = express();
const path = require('path')
const cors = require('cors')

const logger = require('morgan');
require('dotenv').config();

// seeder
// require('./migrations/seeder')()

// app settings
var whitelist = [process.env.APP_URL, process.env.SERVER_URL]
var corsOptions = {
  origin: function (origin, callback) {
    if (whitelist.indexOf(origin) !== -1 || !origin) {
      callback(null, true)
    } else {
      callback(new Error('Not allowed by CORS'))
    }
  }
}
app.use(cors(corsOptions))
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, '/public')))
app.use(logger('dev'));


//rotues
app.get('/', (req, res) => {
	res.json({message: 'Debonair Contact App Secured Rest API Server'});
})

require('./routes/user.routes')(app) // user service routes

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port httP://localhost:${PORT}`);
})