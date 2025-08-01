const express = require("express");
const router = express.Router();
const {
    handleSingleGetProducts,
    handleGetAllProducts,
    handleUpdateProduct,
    handleDeleteProduct,
    handleCreateProduct
} = require("../controllers/product");
const {auth} = require("../middlewares/auth");


router.get("/",auth, handleGetAllProducts);

router.put("/:id",auth, handleUpdateProduct);

router.delete("/:id",auth, handleDeleteProduct);

router.post("/", handleCreateProduct);

router.get("/:id", handleSingleGetProducts)

module.exports = router;