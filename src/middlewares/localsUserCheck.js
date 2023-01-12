module.exports = (req, res, next) => {
  console.log("req.session.user: ", req.session.user)
  if (req.session.user) {
    res.locals.user = req.session.user;
  }
  next();
};
