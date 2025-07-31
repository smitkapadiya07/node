const express = require("express");
const router = express.Router();
const {
    handleSingleGetProducts,
    handleGetAllProducts,
    handleUpdateProduct,
    handleDeleteProduct,
    handleCreateProduct
} = require("../controllers/product");


router.get("/", handleGetAllProducts);

router.put("/:id", handleUpdateProduct);

router.delete("/:id", handleDeleteProduct);

router.post("/", handleCreateProduct);

router.get("/:id", handleSingleGetProducts)

module.exports = router;