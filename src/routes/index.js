const express = require('express')

const router = express.Router()

// Middleware
const { auth } = require('../middlewares/auth')

// Controllers

// user
const { getUsers, getUserById, addUser, updateUser, deleteUser } = require('../controllers/user')
// product
const { getProducts, getProductById, addProduct, updateProduct, deleteProduct } = require('../controllers/product')
// transaction
const { getTransactions, getTransactionsByUserId, getTransactionById, addTransaction, updateTransaction, deleteTransaction } = require('../controllers/transaction')
// topping
const { getToppings, getToppingById, addTopping, updateTopping, deleteTopping } = require('../controllers/topping')
// auth
const { login, register } = require('../controllers/auth')

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
// transaction
router.get('/transactions', auth, getTransactions)
router.get('/transactions/user/:userId', auth, getTransactionsByUserId)
router.get('/transactions/:id', auth, getTransactionById)
router.post('/transactions', auth, addTransaction)
router.patch('/transactions/:id', auth, updateTransaction)
router.delete('/transactions/:id', auth, deleteTransaction)
// topping
router.get('/toppings', getToppings)
router.get('/toppings/:id', getToppingById)
router.post('/toppings', addTopping)
router.patch('/toppings/:id', updateTopping)
router.delete('/toppings/:id', deleteTopping)
// auth
router.post('/login', login)
router.post('/register', register)

module.exports = router