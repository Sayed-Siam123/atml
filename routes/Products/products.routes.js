var express = require('express');
const productController = require("../../controllers/products/products.controller");
var router = express.Router();

router.get("/",productController.getAllProducts);
router.post("/create",productController.createProducts);

module.exports = router;