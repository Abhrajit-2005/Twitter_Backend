const express = require('express');
const bodyParser = require('body-parser');
const connectDB = require('./config/database');
const dotenv = require('dotenv');
const apiroutes = require('./routes/index');

const app = express();
dotenv.config();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/api', apiroutes);

app.listen(3000, async () => {
    console.log('Server is running on port 3000');
    await connectDB();
    console.log('Connected to MongoDB');
});