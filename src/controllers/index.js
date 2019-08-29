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
const { verfiyTokenLoged } = require('../controllers/auth/verfiyUser');
const { verfiyTokenUnLoged } = require('../controllers/auth/verfiyUser');

const router = express.Router();

router.get('/', home);
router.get('/login', verfiyTokenUnLoged, login);
router.get('/signup', verfiyTokenUnLoged, signup);
router.get('/signout', signout);
router.get('/profile', verfiyTokenLoged, profile);

router.post('/login', postLogin);
router.post('/signup', postSignup);
router.post('/addPost', addPost);

router.use(client);
router.use(server);

exports.router = router;
