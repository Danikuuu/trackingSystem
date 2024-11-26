const mongoose = require('mongoose'); // Import mongoose
const express = require('express');
const session = require('express-session');
const MongoDBStore = require('connect-mongodb-session')(session); // Use MongoDB session store
const bodyParser = require('body-parser');
const path = require('path');
const methodOverride = require('method-override');
const app = express();
const upload = require('./config/multerConfig'); // Use multerConfig for file uploads

// Set view engine
app.set('view engine', 'ejs');

// Middleware for parsing form data
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(methodOverride('_method'));

// Serve static files like images, stylesheets, etc.
app.use(express.static(path.join(__dirname, 'views')));
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// Connect to MongoDB
mongoose.connect('mongodb+srv://BrainlessAizel17:BrainlessAizel17@student.kccdw.mongodb.net/trackingSystem')
  .then(() => console.log('MongoDB connected successfully'))
  .catch(err => console.error('MongoDB connection error:', err));

// Configure MongoDB store for sessions
const store = new MongoDBStore({
  uri: 'mongodb+srv://BrainlessAizel17:BrainlessAizel17@student.kccdw.mongodb.net/trackingSystem',
  collection: 'sessions',
});

store.on('error', (error) => {
  console.error('Session store error:', error);
});

// Session middleware setup
app.use(session({
  secret: 'your-secret-key', // Use a secure secret key
  resave: false, // Don't save session if unmodified
  saveUninitialized: false, // Don't create session until it's used
  store: store, // Use MongoDB store for sessions
  cookie: { secure: false, httpOnly: true }, // Set `secure: true` if using HTTPS
}));

// Middleware to log session data for debugging
app.use((req, res, next) => {
  console.log('Session data:', req.session);
  next();
});

// Middleware to attach session data to response locals for views
app.use((req, res, next) => {
  res.locals.isAuthenticated = req.session.isAdmin || false; // Add isAuthenticated to all views
  next();
});

// Import routes
const route = require('./routes/route');
app.use(route);

// Define the root route to redirect to login
app.get('/', (req, res) => {
  res.redirect('/login');
});

// Catch-all route for 404 errors (optional)
app.get('*', (req, res) => {
  res.status(404).render('404', { isAuthenticated: req.session && req.session.userId });
});

// Start the server
app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});
