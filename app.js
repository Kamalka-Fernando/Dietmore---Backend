const express = require('express');
const mongoose = require('mongoose');
const url = 'mongodb://localhost/dietmoreDietPlanDb';

const app = express();

mongoose.connect(url, {useNewUrlParser:true})
const con = mongoose.connection

con.on('open', () => console.log("Connected..."))
app.use(express.json())

const loginRouter = require('./routers/login')
app.use('/login', loginRouter)

const registerRouter = require('./routers/register')
app.use('/register', registerRouter)

app.listen(5000, () => console.log('Server Started'))