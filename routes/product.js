const express = require("express");
const router = express.Router();

const {
    handleSingleGetProducts,
    handleGetAllProducts,
    handleUpdateProduct,
    handleDeleteProduct,
    handleCreateProduct
} = require("../controllers/product");

const { auth } = require("../middlewares/auth");

router.get("/", handleGetAllProducts);

router.post("/", handleCreateProduct);

router.get("/:id", handleSingleGetProducts);

router.put("/:id", handleUpdateProduct);

router.delete("/:id", handleDeleteProduct);

module.exports = router;

