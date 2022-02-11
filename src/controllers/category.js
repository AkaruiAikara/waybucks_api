const { Category, Product, ProductCategory } = require('../../models');

// get all categories
exports.getCategories = (req, res) => {
    try {
        Category.findAll({
            include: [
                {
                    model: Product,
                    as: 'products',
                    through: {
                        model: ProductCategory,
                        as: 'product_categories',
                        attributes: []
                    },
                    attributes: ['id', 'title', 'desc', 'price', 'image', 'qty']
                }
            ],
            attributes: ['id', 'name']
        }).then(categories => {
            res.send({
                status: 'success',
                data: {categories}
            });
        });
    } catch (error) {
        res.status(500).send({
            status: 'error',
            message: error.message
        });
    }
}

// get category by id
exports.getCategoryById = (req, res) => {
    try {
        Category.findByPk(req.params.id, {
            include: [
                {
                    model: Product,
                    as: 'products',
                    through: {
                        model: ProductCategory,
                        as: 'product_categories',
                        attributes: []
                    },
                    attributes: ['id', 'title', 'desc', 'price', 'image', 'qty']
                }
            ],
            attributes: ['id', 'name']
        }).then(category => {
            if (!category) {
                res.status(404).send({
                    status: 'error',
                    message: 'Category not found'
                });
                return;
            }
            res.send({
                status: 'success',
                data: {category}
            });
        });
    } catch (error) {
        res.status(500).send({
            status: 'error',
            message: error.message
        });
    }
}

// add category
exports.addCategory = (req, res) => {
    try {
        Category.create(req.body).then(category => {
            res.send({
                status: 'success',
                data: {category}
            });
        });
    } catch (error) {
        res.status(500).send({
            status: 'error',
            message: error.message
        });
    }
}

// update category
exports.updateCategory = (req, res) => {
    try {
        Category.findByPk(req.params.id).then(category => {
            if (!category) {
                res.status(404).send({
                    status: 'error',
                    message: 'Category not found'
                });
                return;
            }
            category.update(req.body).then(category => {
                res.send({
                    status: 'success',
                    data: {category}
                });
            });
        });
    } catch (error) {
        res.status(500).send({
            status: 'error',
            message: error.message
        });
    }
}

// delete category
exports.deleteCategory = (req, res) => {
    try {
        Category.findByPk(req.params.id).then(category => {
            if (!category) {
                res.status(404).send({
                    status: 'error',
                    message: 'Category not found'
                });
                return;
            }
            category.destroy().then(category => {
                res.send({
                    status: 'success',
                    data: {category}
                });
            });
        });
    } catch (error) {
        res.status(500).send({
            status: 'error',
            message: error.message
        });
    }
}