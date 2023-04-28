require('dotenv').config();
const express = require('express');
const cors = require('cors');

const ConnectMongoDB = require('./databases/ConnectMongoDB');
const PORT = process.env.PORT;
const URL = process.env.MONGODB_URL;

const app = express();

app.use(cors());
app.use(express.json());



ConnectMongoDB(URL);

app.listen(PORT, () => {
    console.log(`SERVER IS UP AND RUNNING ON PORT ${PORT}`);
});
