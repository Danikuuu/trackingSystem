const express = require('express');
const router = express.Router();
const authController = require('../controllers/controller');
const isAuthenticated = require('../middleware/middleware'); // Import the middleware
const upload = require('../config/multerConfig');  // Import the multer configuration from the correct file
const OrderController = require('../controllers/OrderController'); // Adjust the path as necessary



// Show login page (public route)
router.get('/login', authController.loginPage);

// Handle login form submission (public route)
router.post('/login', authController.loginPost);

// Show admin dashboard (protected route)
//router.get('/adminDashboard', isAuthenticated, authController.adminDashboard);

// Show menu page (protected route)
//router.get('/menu', isAuthenticated, (req, res) => {
//    res.render('menu');  
//});

// Show menu page (protected route)
router.get('/order', isAuthenticated,  OrderController.getTodaysOrders, (req, res) => { //authController.getAllOrders,
    res.render('order');  
});

// Show editFood page (protected route)
//router.get('/orderList', isAuthenticated, (req, res) => {
//    res.render('orderList');  
//});

// Show products page (protected route)
router.get('/product', isAuthenticated, authController.getAllFood, (req, res) => {
    res.render('product');  
});

// Logout user (public route)
router.get('/logout', authController.logout);

// Food CRUD routes
//router.get('/product', authController.getAllFood); // View all food items
router.post('/table', upload.single('upload_image'), authController.addFood); // Add new food item
router.get('/editFood/:id', authController.editFood); // Show edit form for food item
router.post('/editFood/:id', upload.single('upload_image'), authController.updateFood); // Update food item
router.post('/deleteFood/:id', authController.deleteFood); // Delete food item

router.post('/addFood', upload.single('upload_image'), authController.addFood);
router.delete('/deleteFood/:id', authController.deleteFood); // Delete food item

// Show products page
router.get('/product', isAuthenticated, (req, res) => {
    req.query.view = 'product';
    authController.getAllFood(req, res);
});

// Show menu page
router.get('/menu', isAuthenticated, (req, res) => {
    req.query.view = 'menu';
    authController.getAllFood(req, res);
});

// Order in Menu  HAHAHAHHAHAHAHHAHAHAHAHAHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHH   order
router.post('/menu', authController.createOrder);

// Show order list page (protected route)
router.get('/orderList', isAuthenticated, authController.getAllOrders);

// Delete order in orderList
router.delete('/deleteOrder/:id', OrderController.deleteOrder);

// Get the anaalytic in adminDashboard
router.get('/adminDashboard',isAuthenticated, OrderController.getOrderAnalytics,  authController.adminDashboard);

// Update the quantity in orderList
router.post('/updateOrder/:id', OrderController.updateOrderQuantity);

module.exports = router;
