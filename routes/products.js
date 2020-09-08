const express = require('express');
const multer = require('multer');
const router = express.Router();
const db = require('../db/database');
const ProductsController = require('../controllers/products');
const checkAuth = require('../middleware/checkAuth');
const checkAdmin = require('../middleware/checkAdmin');

//File upload config
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './uploads/');
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  },
});
const fileFilter = (req, file, cb) => {
  //reject a file
  if (file.mimetype === 'image/jpeg' || file.mimetype === 'image/png') {
    cb(null, true);
  } else {
    cb(null, false);
  }
};
const upload = multer({
  storage: storage,
  limits: {
    fileSize: 1024 * 1024 * 5,
  },
  fileFilter: fileFilter,
});

router.get('/', checkAuth, ProductsController.products_get_all);
router.get('/:productId', checkAuth, ProductsController.products_get_product);
router.post('/add', checkAdmin,upload.single('productImage'), ProductsController.products_add);
router.patch(
  '/modify/:productId',
  checkAdmin,
  ProductsController.products_modify
);
router.delete(
  '/delete/:productId',
  checkAdmin,
  ProductsController.products_delete
);

module.exports = router;
