const mongoose = require('mongoose');
require('dotenv').config({ path: './.env' });
const express = require('express');
const app = express();
const port = 3005;
const { MongoClient } = require('mongodb');

mongoose.connect(process.env.DATABASE_URI);
const client = new MongoClient(process.env.DATABASE_URI, { useNewUrlParser: true });
const db = mongoose.connection;
db.on('error', (error) => console.log(error));
db.once('open', () => console.log('Connected to database'));

app.use(express.json());

const userRouter = require('./Routes/Server');
app.use('/user', userRouter);

app.listen(3005, () => console.log(`Server is listening on port ${port}`));