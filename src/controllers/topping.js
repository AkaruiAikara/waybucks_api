const { Topping } = require('../../models');

// get all toppings
exports.getToppings = (req, res) => {
    try {
        Topping.findAll({
            attributes: ['id', 'title', 'price', 'image']
        }).then(toppings => {
            res.send({
                status: 'success',
                data: {toppings}
            });
        });
    } catch (error) {
        res.status(500).send({
            status: 'error',
            message: error.message
        });
    }
};

// get topping by id
exports.getToppingById = (req, res) => {
    try {
        Topping.findByPk(req.params.id, {
            attributes: ['id', 'title', 'price', 'image']
        }).then(topping => {
            if (!topping) {
                res.status(404).send({
                    status: 'error',
                    message: 'Topping not found'
                });
                return;
            }
            res.send({
                status: 'success',
                data: {topping}
            });
        });
    } catch (error) {
        res.status(500).send({
            status: 'error',
            message: error.message
        });
    }
};

// add topping
exports.addTopping = (req, res) => {
    try {
        Topping.create({
            title: req.body.title,
            price: req.body.price,
            image: req.body.image
        }).then(topping => {
            res.send({
                status: 'success',
                data: {topping}
            });
        });
    } catch (error) {
        res.status(500).send({
            status: 'error',
            message: error.message
        });
    }
};

// update topping
exports.updateTopping = (req, res) => {
    try {
        Topping.update({
            title: req.body.title,
            price: req.body.price,
            image: req.body.image
        }, {
            where: {
                id: req.params.id
            }
        }).then(topping => {
            res.send({
                status: 'success',
                data: {topping}
            });
        });
    } catch (error) {
        res.status(500).send({
            status: 'error',
            message: error.message
        });
    }
};

// delete topping
exports.deleteTopping = (req, res) => {
    try {
        Topping.destroy({
            where: {
                id: req.params.id
            }
        }).then(topping => {
            if (!topping) {
                res.status(404).send({
                    status: 'error',
                    message: 'Topping not found'
                });
                return;
            }
            res.send({
                status: 'success',
                data: {topping}
            });
        });
    } catch (error) {
        res.status(500).send({
            status: 'error',
            message: error.message
        });
    }
};