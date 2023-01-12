module.exports = (req, res, next) => {
  console.log("cookieCheck: ", req.cookies.user)
  if (req.cookies.user) {
    req.session.user = req.cookies.user;
  }
  next();
};
