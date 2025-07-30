const product = require('../models/product');

const handleGetAllProducts = async (req, res) => {
    const user = await product.find();
    if (!user) {
        return res.status(404).send({
            message: 'Product not found',
        })
    }
    return res.status(200).send({
        message: 'Successfully found',
        data: user
    })
}

const handleCreateProduct = async (req, res) => {
    const { name, price, description, category } = req.body;
    if (!name || !name || !price || !description || !category) {
        return res.status(400).send({
            message: 'Please enter a valid product name',
        })
    }
    const payload = { name, price, description, category };
    const creteUser = await product.create(payload);
    return res.status(200).send(creteUser);
}

const handleUpdateProduct = async (req, res) => {
    const id = req.params.id;
    const { name, price, description, category } = req.body;
    if (!name || !name || !price || !description || !category) {
        return res.status(400).send({
            message: 'Please enter a valid product name',
        })
    }
    const payload = { name, price, description, category };
    const updateUser = await product.findByIdAndUpdate(id, payload, { new: true });
    return res.status(200).send(updateUser);
}

const handleDeleteProduct = async (req, res) => {
    const id = req.params.id;
    const deletedUser = await product.findByIdAndDelete(id);
    return res.status(200).send(deletedUser);
}

const handleSingleGetProducts = async (req, res) => {
    const id = req.params.id;
    const singleUser = await product.findById(id);
    return res.status(200).send(singleUser);
}

module.exports = {handleSingleGetProducts, handleGetAllProducts, handleUpdateProduct, handleDeleteProduct, handleCreateProduct};