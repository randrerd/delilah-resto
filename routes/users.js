const express = require('express');
const router = express.Router();
const db = require('../db/database');
const UsersController = require('../controllers/users');
const checkAuth = require('../middleware/checkAuth')
const checkAdmin = require('../middleware/checkAdmin')

const User = require('../models/User');

router.get('/', checkAdmin, UsersController.users_get_all)
router.get('/:userId', checkAuth, UsersController.users_get_user);
router.post('/register', UsersController.users_register)
router.post('/login', UsersController.users_login)
router.delete('/delete/:userId', checkAdmin, UsersController.users_delete);

module.exports = router;