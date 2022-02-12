// import required models
const { Product } = require('../../models');

// get all products
exports.getProducts = (req, res) => {
    try {
        Product.findAll({
            attributes: ['id', 'title', 'price', 'image']
        }).then(products => {
            res.send({
                status: 'success',
                data: {products}
            });
        });
    } catch (error) {
        res.status(500).send({
            status: 'error',
            message: error.message
        });
    }
};

// get product by id
exports.getProductById = (req, res) => {
    try {
        Product.findByPk(req.params.id, {
            attributes: ['id', 'title', 'price', 'image']
        }).then(product => {
            if (!product) {
                res.status(404).send({
                    status: 'error',
                    message: 'Product not found'
                });
                return;
            }
            res.send({
                status: 'success',
                data: {product}
            });
        });
    } catch (error) {
        res.status(500).send({
            status: 'error',
            message: error.message
        });
    }
};

// add product
exports.addProduct = (req, res) => {
    try {
        Product.create({
            title: req.body.title,
            price: req.body.price,
            image: req.body.image
        }).then(product => {
            res.send({
                status: 'success',
                data: {product}
            });
        });
    } catch (error) {
        res.status(500).send({
            status: 'error',
            message: error.message
        });
    }
};

// update product
exports.updateProduct = (req, res) => {
    try {
        Product.update({
            title: req.body.title,
            price: req.body.price,
            image: req.body.image
        }, {
            where: {
                id: req.params.id
            }
        }).then(product => {
            if (!product) {
                res.status(404).send({
                    status: 'error',
                    message: 'Product not found'
                });
                return;
            }
            res.send({
                status: 'success',
                data: {product}
            });
        });
    } catch (error) {
        res.status(500).send({
            status: 'error',
            message: error.message
        });
    }
};

// delete product
exports.deleteProduct = (req, res) => {
    try {
        Product.destroy({
            where: {
                id: req.params.id
            }
        }).then(product => {
            if (!product) {
                res.status(404).send({
                    status: 'error',
                    message: 'Product not found'
                });
                return;
            }
            res.send({
                status: 'success',
                data: {
                    id: req.params.id
                }
            });
        });
    } catch (error) {
        res.status(500).send({
            status: 'error',
            message: error.message
        });
    }
};