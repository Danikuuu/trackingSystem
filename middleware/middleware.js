module.exports = (req, res, next) => {
  if (!req.session || !req.session.isAdmin) {
    return res.redirect('/login'); // Redirect to login if not authenticated as admin
  }
  next(); // Proceed to the next middleware or route handler
};
