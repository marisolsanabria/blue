const express = require("express");
const router= express.Router();

const productController= require("../controllers/producto")

router.get('',productController.getProducto);
router.post('',productController.addProducto);
router.put('/:id',productController.updateProducto);
router.delete('/:id',productController.deleteProducto);

module.exports = router;