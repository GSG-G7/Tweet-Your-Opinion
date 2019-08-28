const express = require('express');
const jwt = require('jsonwebtoken');

const { home } = require('./home');
const { login } = require('./login');
const { signup } = require('./signup');
const { signout } = require('./signout');
const { profile } = require('./profile');
const { postLogin } = require('./postLogin');
const { postSignup } = require('./postSignup');
const { addPost } = require('./addPost');
const { client, server } = require('./error');
require('env2')('config.env');

const router = express.Router();
const verfiyToken = (req, res, next) => {
  jwt.verify(req.cookies.login, process.env.SECRET, (err, rest) => {
    if (err) {
      res.redirect('/login');
    } else next();
  });
};

router.get('/', home);
router.get('/login', login);
router.get('/signup', signup);
router.get('/signout', signout);
router.get('/profile', verfiyToken, profile);

router.post('/login', postLogin);
router.post('/signup', postSignup);
router.post('/add_post', addPost);

router.use(client);
router.use(server);

exports.router = router;
