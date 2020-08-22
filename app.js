const express = require('express');
const app = express();

//Databse
const db = require('./db/database');

//Try db
db.authenticate().then(() => console.log('db connected')).catch(err => console.log(err))

const PORT = process.env.PORT || 3000;


app.listen(PORT, ()=> {
    console.log('Server start')
})