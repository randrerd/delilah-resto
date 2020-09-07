const express = require('express');
const router = express.Router();
const db = require('../db/database');
const OrdersControllers = require('../controllers/orders');
const checkAuth = require('../middleware/checkAuth');
const checkAdmin = require('../middleware/checkAdmin');

const Order = require('../models/Order');

router.get('/', checkAdmin, OrdersControllers.orders_get_all)
router.post('/create', checkAuth, OrdersControllers.orders_create);
router.patch('/update/:orderId', checkAdmin, OrdersControllers.orders_modify);
router.delete('/delete/:orderId', checkAdmin, OrdersControllers.orders_delete);


module.exports = router;
