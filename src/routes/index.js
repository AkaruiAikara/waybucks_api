const express = require('express')

const router = express.Router()

// Controllers

// user
const { getUsers, getUserById, addUser, updateUser, deleteUser } = require('../controllers/user')
// product
const { getProducts, getProductById, addProduct, updateProduct, deleteProduct } = require('../controllers/product')
// category
const { getCategories, getCategoryById, addCategory, updateCategory, deleteCategory } = require('../controllers/category')
// transaction
const { getTransactions, getTransactionsByUserId, getTransactionById, addTransaction, updateTransaction, deleteTransaction } = require('../controllers/transaction')

// Routes

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
// category
router.get('/categories', getCategories)
router.get('/categories/:id', getCategoryById)
router.post('/categories', addCategory)
router.patch('/categories/:id', updateCategory)
router.delete('/categories/:id', deleteCategory)
// transaction
router.get('/transactions', getTransactions)
router.get('/transactions/user/:userId', getTransactionsByUserId)
router.get('/transactions/:id', getTransactionById)
router.post('/transactions', addTransaction)
router.patch('/transactions/:id', updateTransaction)
router.delete('/transactions/:id', deleteTransaction)

module.exports = router