exports.client = (req, res) => {
  console.log('err');
  res.status(404).render('404');
};
// eslint-disable-next-line no-unused-vars
exports.server = (error, req, res, next) => {
  res.status(500).render('500');
};
