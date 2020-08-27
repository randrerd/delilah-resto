const express = require('express');
const app = express();
const morgan = require('morgan');
const dotenv = require('dotenv');
const cors = require('cors');
const dotenvResult = dotenv.config();



//Databse
const db = require('./db/database');

//Try db
db.authenticate().then(() => console.log('db connected')).catch(err => console.log(err))

//Basic middleware
app.use(morgan('dev'));
app.use(express.urlencoded({extended: false}));
app.use(express.json());
app.use(cors());


app.use('/users', require('./routes/users'))
const PORT = process.env.PORT || 3000;

app.listen(PORT, ()=> {
    console.log('Server start')
})