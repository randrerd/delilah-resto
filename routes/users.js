const express = require('express');
const router = express.Router();
const db = require('../db/database');

const User = require('../models/User');

router.get('/', (req, res)=> {
    res.status(200).json({
        message: 'You here'
    })
})

router.post('/register', (req,res )=> {
    const data = req.body;

    let {username, firstname, lastname, email, phone,address, password, is_admin} = data;

    User.create({
        username,
        firstname,
        lastname,
        email,
        phone,
        address,
        password,
        is_admin
    })
    .then((user) => res.status(200).json({
        message: 'User created',
        user: user
    }))
    .catch((err)=> {
        console.log(err)
    })
})

module.exports = router;