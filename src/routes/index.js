const express = require('express')

const router = express.Router()

// controllers
const { getUsers, getUserById, addUser, updateUser, deleteUser } = require('../controllers/user')

// routes
router.get('/users', getUsers)
router.get('/users/:id', getUserById)
router.post('/users', addUser)
router.patch('/users/:id', updateUser)
router.delete('/users/:id', deleteUser)

module.exports = router