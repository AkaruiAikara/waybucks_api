const express = require('express')

const router = express.Router()

// controllers

// user
const { getUsers, getUserById, addUser, updateUser, deleteUser } = require('../controllers/user')
// product
const { getProducts, getProductById, addProduct, updateProduct, deleteProduct } = require('../controllers/product')

// routes

// user
router.get('/users', getUsers)
router.get('/users/:id', getUserById)
router.post('/users', addUser)
router.patch('/users/:id', updateUser)
router.delete('/users/:id', deleteUser)
// product
router.get('/products', getProducts)
router.get('/products/:id', getProductById)
router.post('/products', addProduct)
router.patch('/products/:id', updateProduct)
router.delete('/products/:id', deleteProduct)

module.exports = router