const express = require("express");
const router= express.Router();

const productController= require("../controllers/producto")

router.get('',productController.getProduct);
router.post('',productController.addPostProduct);
router.put('',productController.updatePostProduct);
router.delete('',productController.deleteProduct);

module.exports = router;