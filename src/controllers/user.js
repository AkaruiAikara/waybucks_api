// import required models
const { User, Profile } = require('../../models');

// get users
exports.getUsers = (req, res) => {
    try {
        User.findAll({
            include: [
                {
                    model: Profile,
                    as: 'profile',
                    attributes: ['phone', 'gender', 'address']
                }
            ],
            attributes: ['id', 'fullName', 'email', 'password', 'image']
        }).then(users => {
            res.send({
                status: 'success',
                data: {users}
                });
        });
    } catch (error) {
        res.status(500).send({
            status: 'error',
            message: error.message
        });
    }
};

// get user by id
exports.getUserById = (req, res) => {
    try {
        User.findByPk(req.params.id, {
            include: [
                {
                    model: Profile,
                    as: 'profile',
                    attributes: ['phone', 'gender', 'address']
                }
            ],
            attributes: ['id', 'fullName', 'email', 'password', 'image']
        }).then(user => {
            if (!user) {
                res.status(404).send({
                    status: 'error',
                    message: 'User not found'
                });
                return;
            }
            res.send({
                status: 'success',
                data: {user}
            });
        });
    } catch (error) {
        res.status(500).send({
            status: 'error',
            message: error.message
        });
    }
};

// add user
exports.addUser = (req, res) => {
    try {
        User.create({
            fullName: req.body.fullName,
            email: req.body.email,
            password: req.body.password
        }).then(user => {
            res.send({
                status: 'success',
                data: {user}
            });
        });
    } catch (error) {
        res.status(500).send({
            status: 'error',
            message: error.message
        });
    }
};

// update user
exports.updateUser = (req, res) => {
    try {
        User.update({
            fullName: req.body.fullName,
            email: req.body.email,
            password: req.body.password
        }, {
            where: {
                id: req.params.id
            }
        }).then(user => {
            res.send({
                status: 'success',
                data: {user}
            });
        });
    } catch (error) {
        res.status(500).send({
            status: 'error',
            message: error.message
        });
    }
}

// delete user
exports.deleteUser = (req, res) => {
    try {
        User.destroy({
            where: {
                id: req.params.id
            }
        }).then((user) => {
            if (user == 0) {
                res.status(404).send({
                    status: 'error',
                    message: 'User not found'
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
}