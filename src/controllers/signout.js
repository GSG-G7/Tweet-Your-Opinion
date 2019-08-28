exports.signout = (req, res, next) => {
  res.clearCookie('login');
  res.redirect('/login');
};
