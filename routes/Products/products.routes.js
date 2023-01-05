var express = require('express');
const productController = require("../../controllers/products/products.controller");
var router = express.Router();

/**
 * @swagger
 *  /:
 *  get:
 *      summary: Testing
 *      description: Testing Desc
 *      responses:
 *          200:
 *              description: To test get method
 *
 * */

router.get("/",productController.getAllProducts);
router.post("/create",productController.createProducts);

module.exports = router;