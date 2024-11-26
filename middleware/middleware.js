//module.exports = (req, res, next) => {
//  if (!req.session || !req.session.isAdmin) {
//    return res.redirect('/login'); // Redirect to login if not authenticated as admin
//  }
//  next(); // Proceed to the next middleware or route handler
//};

// Middleware for authentication
const isAuthenticated = (req, res, next) => {
  if (req.session && req.session.isAdmin) {
    return next(); // Proceed if user is authenticated
  }
  res.redirect('/login'); // Redirect if not authenticated
};

module.exports = isAuthenticated;

