const jwt = require('jsonwebtoken');
const { getUserId } = require('../model/queries/queryAddPost');
const getUserPost = require('../model/queries/getUserPost');
require('env2')('config.env');


exports.profile = (req, res, next) => {
  jwt.verify(req.cookies.login, process.env.SECRET, (err, rest) => {
    if (err) {
      res.redirect('/login');
    } else {
      getUserId(rest.username)
        .then((idRow) => idRow.rows[0].user_id)
        .then((id) => getUserPost(id))
        .then((postRow) => postRow.rows)
        .then((postsArray) => res.render('profile', { cook: rest.username, postsArray }));
    }
  });
};
