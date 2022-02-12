// import required models
const { User } = require('../../models');
// import joi
const Joi = require('joi');

// Register user
exports.register = async (req, res) => {
    try {
        // validate request body
        const schema = Joi.object().keys({
            fullName: Joi.string().min(4).required(),
            email: Joi.string().email().min(6).required(),
            password: Joi.string().min(8).required()
        });
        const { error } = Joi.validate(req.body, schema);
        if (error) {
            res.status(400).send({
                status: 'error',
                message: error.details[0].message
            });
            return;
        }
        // check if user already exists
        const user = await User.findOne({
            where: {
                email: req.body.email
            }
        });
        if (user) {
            res.status(400).send({
                status: 'error',
                message: 'User already exists'
            });
            return;
        }
        // create new user
        const newUser = await User.create({
            fullName: req.body.fullName,
            email: req.body.email,
            password: req.body.password
        });
        res.send({
            status: 'success',
            data: {
                user: newUser
            }
        });
    } catch (error) {
        res.status(500).send({
            status: 'error',
            message: error.message
        });
    }
};

// Login user
exports.login = async (req, res) => {
    try {
        // validate request body
        const schema = Joi.object().keys({
            email: Joi.string().email().min(6).required(),
            password: Joi.string().min(8).required()
        });
        const { error } = Joi.validate(req.body, schema);
        if (error) {
            res.status(400).send({
                status: 'error',
                message: error.details[0].message
            });
            return;
        }
        // check if user exists
        const user = await User.findOne({
            where: {
                email: req.body.email
            }
        });
        if (!user) {
            res.status(400).send({
                status: 'error',
                message: 'Email or password is incorrect'
            });
            return;
        }
        // check if password is correct
        if (user.password !== req.body.password) {
            res.status(400).send({
                status: 'error',
                message: 'Email or password is incorrect'
            });
            return;
        }
    } catch (error) {
        res.status(500).send({
            status: 'error',
            message: error.message
        });
    }
};