const express = require('express');
const morgan = require('morgan');
const dotenv = require('dotenv');
const cors = require('cors');
const cookieParser = require('cookie-parser');

const dotenvResult = dotenv.config();
const app = express();

//Databse
const db = require('./db/database');

//Try db connection
db.authenticate()
  .then(() => console.log('db connected'))
  .catch((err) => console.log(err));

//Basic middleware
app.use(morgan('dev'));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cookieParser());
app.use(cors());

app.use('/users', require('./routes/users'));
app.use('/products', require('./routes/products'));
app.use('/uploads', express.static('./uploads'));

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log('Server start');
});
