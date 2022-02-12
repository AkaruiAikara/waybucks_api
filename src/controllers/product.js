// import required models
const { Product, User, Category, ProductCategory } = require('../../models');

// get all products
exports.getProducts = (req, res) => {
    try {
        Product.findAll({
            include: [
                {
                    model: User,
                    as: 'user',
                    attributes: ['id', 'fullName', 'email', 'password', 'image']
                },
                {
                    model: Category,
                    as: 'categories',
                    through: {
                        model: ProductCategory,
                        as: 'product_categories',
                        attributes: []
                    },
                    attributes: ['id', 'name']
                }
            ],
            attributes: ['id', 'title', 'desc', 'price', 'image', 'qty']
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
            include: [
                {
                    model: User,
                    as: 'user',
                    attributes: ['id', 'fullName', 'email', 'password', 'image']
                },
                {
                    model: Category,
                    as: 'categories',
                    through: {
                        model: ProductCategory,
                        as: 'product_categories',
                        attributes: []
                    },
                    attributes: ['id', 'name']
                }
            ],
            attributes: ['id', 'title', 'desc', 'price', 'image', 'qty']
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
            userId: req.body.userId,
            title: req.body.title,
            desc: req.body.desc,
            price: req.body.price,
            image: req.body.image,
            qty: req.body.qty
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
            userId: req.body.userId,
            title: req.body.title,
            desc: req.body.desc,
            price: req.body.price,
            image: req.body.image,
            qty: req.body.qty
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