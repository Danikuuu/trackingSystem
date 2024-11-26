const Food = require('../models/Food');
const path = require('path');
const fs = require('fs');
const Order = require('../models/Order'); // Assuming you have an Order model

exports.loginPage = (req, res) => {
    res.render('login', { error: null });  // Pass 'error' variable to the view
  };
  
  exports.loginPost = (req, res) => {
    const { email, password } = req.body;
  
    // Hardcoded admin credentials
    const adminEmail = 'admin@admin';
    const adminPassword = 'admin';
  
    // Check if credentials match
    if (email === adminEmail && password === adminPassword) {
      req.session.isAdmin = true; // Store session data
      res.redirect('/adminDashboard');
    } else {
      // If login fails, pass the error message
      res.render('login', { error: 'Invalid email or password' });
    }
  };
  
  exports.adminDashboard = (req, res) => {
    if (req.session.isAdmin) {
      res.render('adminDashboard');
    } else {
      res.redirect('/login');
    }
  };
  
  exports.logout = (req, res) => {
    req.session.destroy((err) => {
      if (err) {
        return res.status(500).send('Unable to logout');
      }
      res.redirect('/login');
    });
  };
  

  // Show all food items
exports.getAllFood = async (req, res) => {
  try {
    const foods = await Food.find(); // Retrieve all food items from the database
    const view = req.query.view || 'product'; // Default to 'product' if no view is specified
    
    // Pass 'foods' and 'req.query' to the view
    res.render(view, { foods, success: req.query.success });
  } catch (error) {
    res.status(500).send('Failed to fetch food items');
  }
};


// Show all food items
//exports.getAllFood = async (req, res) => {
//  try {
 //   const foods = await Food.find(); // Retrieve all food items from the database
 //   const view = req.query.view || 'product'; // Default to 'product' if no view is specified
 //   res.render(view, { foods }); // Pass 'foods' to the specified view
 // } catch (error) {
  //  res.status(500).send('Failed to fetch food items');
 // }
//};

//exports.getAllFood = async (req, res) => {
//  try {
//    const foods = await Food.find(); // Retrieve all food items from the database
//    res.render('product', { foods }); // Pass 'foods' to the view
//  } catch (error) {
//    res.status(500).send('Failed to fetch food items');
//  }
//};

// Add new food item
exports.addFood = async (req, res) => {
  try {
    const { name, price } = req.body;
    const imagePath = req.file ? `/uploads/${req.file.filename}` : null;

    const newFood = new Food({ name, price, image: imagePath });
    await newFood.save();
    res.redirect('/product?success=true');
  } catch (error) {
    res.status(500).send('Failed to add food item');
  }
};

// Edit food item
exports.editFood = async (req, res) => {
  try {
    const food = await Food.findById(req.params.id);
    res.render('editFood', { food });
  } catch (error) {
    res.status(500).send('Failed to find food item');
  }
};

// Update food item
exports.updateFood = async (req, res) => {
  try {
    const { name, price } = req.body;
    const food = await Food.findById(req.params.id);

    if (!food) {
      return res.status(404).send('Food item not found');
    }

    // Store the original values before updating
    const originalName = food.name;

    // Update fields
    food.name = name;
    food.price = price;

    // Check if a new image file is uploaded and replace the old one
    if (req.file) {
      if (food.image) fs.unlinkSync(path.join(__dirname, '..', food.image)); // Delete old image
      food.image = `/uploads/${req.file.filename}`; // Set new image path
    }

    // Save the updated food item
    await food.save();

    // Update all related orders with the new food details
    const updatedOrders = await Order.find({ foodName: originalName });

    for (let order of updatedOrders) {
      order.foodName = food.name;
      order.foodPrice = food.price;
      order.foodImage = food.image;
      order.totalPrice = order.foodPrice * order.quantity; // Recalculate total price based on updated price
      await order.save();
    }

    res.redirect('/product');
  } catch (error) {
    console.error('Error updating food item:', error);
    res.status(500).send('Failed to update food item');
  }
};



// Delete food item
exports.deleteFood = async (req, res) => {
  try {
    const food = await Food.findById(req.params.id);

    if (!food) {
      return res.status(404).send('Food item not found');
    }

    // Delete image file if it exists
    if (food.image) {
      const imagePath = path.join(__dirname, '..', food.image);
      if (fs.existsSync(imagePath)) {
        fs.unlinkSync(imagePath);
      }
    }

    // Alternative: Use findByIdAndDelete to remove from database in one step
    await Food.findByIdAndDelete(req.params.id);

    res.redirect('/product');
  } catch (error) {
    console.error(error);
    res.status(500).send('Failed to delete food item');
  }
};

// Create Order in Menu
exports.createOrder = async (req, res) => {
  try {
    const { foodImage, foodName, foodPrice, quantity, totalPrice } = req.body;

    const newOrder = new Order({
      foodImage,
      foodName,
      foodPrice,
      quantity,
      totalPrice,
    });

    await newOrder.save();
    res.redirect('/menu'); // Redirect to order list page or confirmation     orderList
  } catch (error) {
    res.status(500).send('Failed to place order');
  }
};


// Show all orders 2
exports.getAllOrders = async (req, res) => {
  try {
    const orders = await Order.find(); // Retrieve all orders from the database

    // Calculate the overall total of totalPrice
    const overallTotal = orders.reduce((acc, order) => acc + order.totalPrice, 0);

    res.render('orderList', { orders, overallTotal }); // Pass 'orders' and 'overallTotal' to the view
  } catch (error) {
    res.status(500).send('Failed to fetch orders');
  }
};


