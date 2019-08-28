const jwt = require('jsonwebtoken');
const { queryAddPost, getUserId } = require('../model/queries/queryAddPost');

exports.addPost = (req, res, next) => {
  jwt.verify(req.cookies.login, process.env.SECRET, (err, rest) => {
    if (err) {
      res.clearCookie('login');
      res.redirect('/login');
    } else {
      getUserId(rest.username)
        .then((idRow) => idRow.rows[0].user_id)
        .then((id) => queryAddPost(req.body, id))
        .then(res.redirect('/profile'));
    }
  });
};
