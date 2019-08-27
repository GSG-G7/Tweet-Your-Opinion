const express = require('express');
const { home } = require('./home');
const { login } = require('./login');
const { signup } = require('./signup');
const { signout } = require('./signout');
const { profile } = require('./profile');
const { postLogin } = require('./postLogin');
const { postSignup } = require('./postSignup');
const { addPost } = require('./addPost');
const { clientError, serverError } = require('./error');

const router = express.Router();

router.get('/', home);
router.get('/login', login);
router.get('/signup', signup);
router.get('/signout', signout);
router.get('/profile', profile);

router.post('/login', postLogin);
router.post('/signup', postSignup);
router.post('/add_post', addPost);

router.use(clientError);
router.use(serverError);

exports.router = router;
