const Order = require('../models/Order');
const OrderProduct = require('../models/OrderProduct');
const Product = require('../models/Product');
const jwt = require('jsonwebtoken');

module.exports.orders_get_all = async (req, res) => {
  try {
    let orders = await Order.findAll({});
    res.status(200).json(orders);
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

function getTotal(prices) {
  return prices.reduce((a, b) => a + b, 0);
}

module.exports.orders_create = async (req, res) => {
  try {
    const { cookies } = req;

    //Checks if user is logged in
    if ('session_id' in cookies) {
      const token = cookies.session_id;
      const decoded = jwt.verify(token, process.env.JWT_KEY);
      const loggedInUser = decoded.userId;

      const productsArray = req.body.data;
      let pricesArray = [];
      //Loops through the array of products requested to get the final price
      for (let i = 0; i < productsArray.length; i++) {
        const product = productsArray[i];
        let { product_id, product_quantity } = product;
        let productDetails = await Product.findOne({
          where: { id: product_id },
        });
        if(!productDetails){
          return res.status(404).json({message: `Product #${product_id} not found, please choose a different product`})
        }
        //Gets the total amount for each product
        let totalProductAmount = productDetails.price * product_quantity;
        //and adds it to the array
        pricesArray.push(totalProductAmount);
      }
      pricesArray.forEach((price) => console.log(price));
      //Calculates the total amount including all products
      let total = getTotal(pricesArray);
      let { payment_method } = req.body;

      let descriptionArray = [];
      //Loops through the products array to get order description

      for (let i = 0; i < productsArray.length; i++) {
        const product = productsArray[i];
        let { product_id, product_quantity } = product;
        let productDetails = await Product.findOne({
          where: { id: product_id },
        });
        let formattedDescription = `${product_quantity}x${productDetails.name}`;
        descriptionArray.push(formattedDescription);
      }
      console.log(descriptionArray);

      let newOrder = await Order.create({
        total,
        user_id: loggedInUser,
        payment_method,
        description: descriptionArray.join(' '),
      });
      // Loops the products array to create orderproduct table
      for (let i = 0; i < productsArray.length; i++) {
        const product = productsArray[i];
        let { product_id, product_quantity } = product;
        let newOrderProduct = await OrderProduct.create({
          orderId: newOrder.id,
          productId: product_id,
          product_quantity,
        });
      }
      res
        .status(200)
        .json({ message: 'Order created successfully!!', newOrder });
    } else return res.status(403).json({ message: 'Please log in first' });
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

module.exports.orders_modify = async (req, res) => {
  try {
    const { status, total } = req.body;
    const { orderId } = req.params;
    let orderChange = await Order.update(
      { status, total },
      { where: { id: orderId } }
    );

    if (!orderChange[0]) {
      return res
        .status(404)
        .json({ message: 'Order not found, please try again!' });
    } else
      res
        .status(200)
        .json({ message: 'The order has been updated successfully' });
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

module.exports.orders_delete = async (req, res) => {
  try {
    const { orderId } = req.params;
    let deletedOrder = await Order.update({status: "Cancelada"},{ where: { id: orderId } });
    console.log(deletedOrder)
    if (!deletedOrder[0]) {
      return res
        .status(404)
        .json({ message: 'Order not found, please try again' });
    } else
      res
        .status(200)
        .json({ message: 'The order has been cancelled successfully' });
  } catch (err) {
    res.status(500).json({ error: err });
  }
};
