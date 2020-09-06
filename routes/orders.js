const express = require('express');
const router = express.Router();
const db = require('../db/database');
const OrdersControllers = require('../controllers/orders');
const checkAuth = require('../middleware/checkAuth');
const checkAdmin = require('../middleware/checkAdmin');

const Order = require('../models/Order');

router.post('/', checkAuth, OrdersControllers.orders_create);

module.exports = router;
