const express = require('express');
const bodyParser = require('body-parser');
const connectDB = require('./config/database');
const dotenv = require('dotenv');
const apiroutes = require('./routes/index');

const passport = require('passport');
const passportAuth = require('./config/jwt-config');

const app = express();
dotenv.config();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(passport.initialize());
passportAuth(passport);

app.use('/api', apiroutes);

app.listen(3000, async () => {
    console.log('Server is running on port 3000');
    await connectDB();
    console.log('Connected to MongoDB');
});