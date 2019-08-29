const jwt = require('jsonwebtoken');
const getAllPosts = require('../model/queries/getAllPosts');
require('env2')('config.env');

exports.home = (req, res, next) => {
  jwt.verify(req.cookies.login, process.env.SECRET, (err, rest) => {
    if (err) {
      getAllPosts()
        .then((allPostsRow) => allPostsRow.rows)
        .then((allPosts) => res.render('home', { cook: false, postsArray: allPosts }));
    } else {
      getAllPosts()
        .then((allPostsRow) => allPostsRow.rows)
        .then((allPosts) => res.render('home', { cook: rest.username, postsArray: allPosts }));
    }
  });
};
