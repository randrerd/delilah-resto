const express = require('express');
const router = express.Router();
const db = require('../db/database');
const UsersController = require('../controllers/users');
const checkAuth = require('../middleware/check-auth')

const User = require('../models/User');

router.get('/', (req, res)=> {
    res.status(200).json({
        message: 'You here'
    })
})

router.post('/register', UsersController.users_register)
router.post('/login', UsersController.users_login)
router.delete('/delete/:userId', checkAuth, UsersController.users_delete);
module.exports = router;