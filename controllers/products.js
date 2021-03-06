const Product = require('../models/Product');

module.exports.products_add = async (req, res) => {
  try {
    let { name, price } = req.body;
    let newProduct = await Product.create({
      name,
      price,
      product_image: `http://localhost:${process.env.PORT || '3000'}/${
        req.file.path
      }`,
    });

    res
      .status(200)
      .json({ message: 'Product created succesfully', product: newProduct });
  } catch (err) {
    //Checks if error is due to validation
    let errorsThrown = [];
    if (!err.errors.length) {
      res.status(500).json(err);
    } else {
      err.errors.forEach((errorItem) => {
        let errorToShow = {
          msg: errorItem.message,
          type: errorItem.type,
        };
        errorsThrown.push(errorToShow);
      });
      res.status(400).json({ errorsThrown });
    }
  }
};

module.exports.products_get_all = async (req, res) => {
  try {
    const products = await Product.findAll({
      attributes: ['id', 'name', 'price', 'product_image'],
    });
    res.status(200).json({ products });
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

module.exports.products_get_product = async (req, res) => {
  try {
    let { productId } = req.params;
    const product = await Product.findOne({ where: { id: productId } });
    if (!product) {
      res.status(404).json({ message: 'Product not found' });
    } else res.status(200).json({ product });
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

module.exports.products_modify = async (req, res) => {
  try {
    let { productId } = req.params;
    let { name, price } = req.body;

    const productChange = await Product.update(
      { name, price },
      { where: { id: productId } }
    );

    res.status(200).json({ message: 'Product updated succesfully' });
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

module.exports.products_delete = async (req, res) => {
  try {
    let { productId } = req.params;

    const deletedProduct = await Product.destroy({ where: { id: productId } });
    if (!deletedProduct) {
      return res.status(404).json({ message: 'Product not found' });
    } else res.status(200).json({ message: 'Product deleted' });
  } catch (err) {
    res.status(500).json({ error: err });
  }
};
