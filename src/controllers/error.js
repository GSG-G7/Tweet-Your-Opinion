exports.clientError = (req, res) => {
  res.status(404).render('404');
};
// eslint-disable-next-line no-unused-vars
exports.serverError = (error, req, res, next) => {
  res.status(500).render('500');
};
