const Order = require('../models/Order'); // Adjust the path as necessary
const Menu = require('../models/Food'); // Import Menu model to get the total food count
const moment = require('moment'); // Include moment.js to format dates


// Delete the order in orderList
exports.deleteOrder = async (req, res) => {
  try {
    const orderId = req.params.id;
    await Order.findByIdAndDelete(orderId); // Deletes the order with the given ID
    res.redirect('/order'); // orderList
  } catch (error) {
    res.status(500).send('Failed to delete order');
  }
};

// Update the orderQuantity
exports.updateOrderQuantity = async (req, res) => {
  try {
    const orderId = req.params.id;
    const newQuantity = parseInt(req.body.quantity, 10);

    const order = await Order.findById(orderId);
    if (!order) {
      return res.status(404).send('Order not found');
    }

    // Update quantity and total price
    order.quantity = newQuantity;
    order.totalPrice = order.foodPrice * newQuantity;

    await order.save();

    // Redirect back to the order list page to refresh the view
    res.redirect('/order'); //orderList
  } catch (error) {
    console.error('Error updating order quantity:', error);
    res.status(500).send('Failed to update order quantity');
  }
};

// Get Today's Orders
exports.getTodaysOrders = async (req, res) => {
  try {
    const today = new Date();
    const startOfDay = new Date(today.setHours(0, 0, 0, 0)); // 00:00:00 of today
    const endOfDay = new Date(today.setHours(23, 59, 59, 999)); // 23:59:59 of today

    // Fetch orders from today's date
    const orders = await Order.find({
      createdAt: { $gte: startOfDay, $lt: endOfDay }
    });

    // Format createdAt to a readable date and time in 'Nov 13, 2024, 01:39 PM' format
    const formattedOrders = orders.map(order => {
      return {
        ...order._doc,
        formattedCreatedAt: moment(order.createdAt).format('MMM D, YYYY, hh:mm A') // Format as 'Nov 13, 2024, 01:39 PM'
      };
    });

    const overallTotal = orders.reduce((acc, order) => acc + order.totalPrice, 0);

    res.render('order', { orders: formattedOrders, overallTotal });
  } catch (error) {
    res.status(500).send('Failed to fetch today\'s orders');
  }
};

// Get the analytics
exports.getOrderAnalytics = async (req, res) => {
  try {
    const totalOrders = await Order.countDocuments();

    const totalRevenue = await Order.aggregate([
      {
        $group: {
          _id: null,
          totalRevenue: { $sum: "$totalPrice" }
        }
      }
    ]);

    const today = new Date();
    const startOfDay = new Date(today.setHours(0, 0, 0, 0));
    const endOfDay = new Date(today.setHours(23, 59, 59, 999));

    const todaysAnalytics = await Order.aggregate([
      {
        $match: { createdAt: { $gte: startOfDay, $lt: endOfDay } }
      },
      {
        $group: {
          _id: null,
          todaysTotalRevenue: { $sum: "$totalPrice" },
          todaysOrderCount: { $sum: 1 }
        }
      }
    ]);

    const overallTotal = todaysAnalytics[0] ? todaysAnalytics[0].todaysTotalRevenue : 0;
    const todaysOrderTotal = todaysAnalytics[0] ? todaysAnalytics[0].todaysOrderCount : 0;

    const popularItems = await Order.aggregate([
      { $group: { _id: "$foodName", totalQuantity: { $sum: "$quantity" } } },
      { $sort: { totalQuantity: -1 } },
      { $limit: 3 }
    ]);

    const totalFoodItems = await Menu.countDocuments();

    // Weekly Data
    const weekAgo = new Date();
    weekAgo.setDate(today.getDate() - 6); // 7 days ago from today
    const weeklyData = await Order.aggregate([
      {
        $match: {
          createdAt: { $gte: weekAgo, $lt: endOfDay }
        }
      },
      {
        $group: {
          _id: { $dateToString: { format: "%Y-%m-%d", date: "$createdAt" } },
          dailyTotalRevenue: { $sum: "$totalPrice" }
        }
      },
      { $sort: { "_id": 1 } } // Sort by date ascending
    ]);

    const labels = weeklyData.map(data => data._id);
    const revenues = weeklyData.map(data => data.dailyTotalRevenue);

    res.render('adminDashboard', {
      totalOrders,
      totalRevenue: totalRevenue[0] ? totalRevenue[0].totalRevenue : 0,
      popularItems,
      totalFoodItems,
      overallTotal,
      todaysOrderTotal,
      labels,
      revenues
    });
  } catch (error) {
    console.error("Error calculating order analytics:", error);
    res.status(500).send("Server error while fetching analytics.");
  }
};