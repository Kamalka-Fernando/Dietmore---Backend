const express = require('express');
const mongoose = require('mongoose');
const url = 'mongodb://localhost/dietmoreDietPlanDb';
const cors = require('cors')
const app = express();

mongoose.connect(url, {useNewUrlParser:true})
const con = mongoose.connection

mongoose.connect(url).then(() => {
console.log("Connected to Database");
}).catch((err) => {
    console.log("Not Connected to Database ERROR! ", err);
});
con.on('open', () => console.log("Connected..."))
app.use(express.json())

app.use(cors());
const corsOptions = {
      origin: function (origin, callback) {
        db.loadOrigins(function (error, origins) {
          callback(error, origins)
        })
      }
    }
const loginRouter = require('./routers/login')
app.use('/login', loginRouter)

const registerRouter = require('./routers/register')
app.use('/register', registerRouter)

app.listen(5000, () => console.log('Server Started'))