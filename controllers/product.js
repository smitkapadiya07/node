const Product = require('../models/product');

const handleGetAllProducts = async (req, res) => {
    try {
        const products = await Product.find();
        
        if (!products || products.length === 0) {
            return res.status(404).json({ message: 'No products found' });
        }
        return res.status(200).json({
            message: 'Products retrieved successfully',
            data: products
        });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

const handleSingleGetProducts = async (req, res) => {
    try {
        const product = await Product.findById(req.params.id);
        if (!product) {
            return res.status(404).json({ message: 'Product not found' });
        }
        return res.status(200).json(product);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

const handleCreateProduct = async (req, res) => {
    const { name, price, description, category } = req.body;

    if (!name || !price || !description || !category) {
        return res.status(400).json({ message: 'All fields are required' });
    }

    try {
        const createdProduct = await Product.create({ name, price, description, category });
        return res.status(201).json({
            message: 'Product created successfully',
            product: createdProduct
        });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

const handleUpdateProduct = async (req, res) => {
    const { name, price, description, category } = req.body;

    if (!name || !price || !description || !category) {
        return res.status(400).json({ message: 'All fields are required' });
    }

    try {
        const updatedProduct = await Product.findByIdAndUpdate(
            req.params.id,
            { name, price, description, category },
            { new: true, runValidators: true }
        );

        if (!updatedProduct) {
            return res.status(404).json({ message: 'Product not found' });
        }

        return res.status(200).json({
            message: 'Product updated successfully',
            product: updatedProduct
        });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

const handleDeleteProduct = async (req, res) => {
    try {
        const deletedProduct = await Product.findByIdAndDelete(req.params.id);

        if (!deletedProduct) {
            return res.status(404).json({ message: 'Product not found' });
        }

        return res.status(200).json({
            message: 'Product deleted successfully',
            product: deletedProduct
        });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

module.exports = {
    handleSingleGetProducts,
    handleGetAllProducts,
    handleCreateProduct,
    handleUpdateProduct,
    handleDeleteProduct
};
