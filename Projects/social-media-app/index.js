// import express from 'express'
const express =  require('express');
const app = express();
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const helmet = require('helmet');
const morgan = require('morgan');
const userRoute = require('./routes/users')
const authRouter = require('./routes/auth')
const postRouter = require('./routes/posts')

dotenv.config();

const PORT = process.env.PORT
const MONGOURL = process.env.MONGO_URL;

mongoose.connect(MONGOURL).then( () => {
    console.log("Database has been connected!")
}).catch (error => console.log(error));

// Middleware
app.use(express.json());
app.use(helmet());
app.use(morgan('common'));

app.use('/api/users',  userRoute);
app.use('/api/auth', authRouter);
app.use('/api/posts', postRouter);

app.listen(PORT, ()=> {
    console.log('Backend server is running!')
})