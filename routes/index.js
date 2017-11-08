var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Welcome to Glasshoppt' });
});

/* GET listing by cities. */
router.get('/cities', function(req, res, next) {
  res.render('cities', { title: 'Serch by City | Glasshoppr' });
});

/* GET winery page. */
router.get('/winery', function(req, res, next) {
  res.render('winery', { title: 'Winery | Glasshoppr' });
});

/* GET user login page. */
router.get('/login', function(req, res, next) {
  res.render('login', { title: 'Sign in | Glasshoppr' });
});

/* GET user registration page. */
router.get('/register', function(req, res, next) {
  res.render('register', { title: 'Sign up | Glasshoppr' });
});

/* GET user profile-builder page. */
router.get('/profile-builder', function(req, res, next) {
  res.render('profile-builder', { title: 'Profile Builder | Glasshoppr' });
});

/* GET user profile page. */
router.get('/profile', function(req, res, next) {
  res.render('profile', { title: 'My Profile | Glasshoppr', url: req.originalUrl });
});

/* GET user reservations page. */
router.get('/reservations', function(req, res, next) {
  res.render('reservations', { title: 'My Reservations | Glasshoppr', url: req.originalUrl });
});

/* GET user favorites page. */
router.get('/favorites', function(req, res, next) {
  res.render('favorites', { title: 'My Taste List | Glasshoppr', url: req.originalUrl });
});

/* GET static 'about' page. */
router.get('/about', function(req, res, next) {
  res.render('about', { title: 'About us | Glasshoppr', url: req.originalUrl });
});

/* GET static 'contact' page. */
router.get('/contact', function(req, res, next) {
  res.render('contact', { title: 'Contact | Glasshoppr', url: req.originalUrl });
});

/* GET static 'for-wineries' page. */
router.get('/for-wineries', function(req, res, next) {
  res.render('for-wineries', { title: 'For Wineries | Glasshoppr', url: req.originalUrl });
});

/* GET Rate Winery page. */
router.get('/rate-winery', function(req, res, next) {
  res.render('rate-winery', { title: 'Rate this Winery | Glasshoppr' });
});

/* GET winery login page. */
router.get('/login-w', function(req, res, next) {
  res.render('login-w', { title: 'Winery Sign In | Glasshoppr' });
});

/* GET winery activate page. */
router.get('/activate-w', function(req, res, next) {
  res.render('activate-w', { title: 'Winery Sign Up | Glasshoppr' });
});

/* GET winery premium page. */
router.get('/premium-w', function(req, res, next) {
  res.render('premium-w', { title: 'Become Premium Winery | Glasshoppr' });
});

/* GET pay premium (winery) page. */
router.get('/payment-w', function(req, res, next) {
  res.render('payment-w', { title: 'Payment | Glasshoppr' });
});

/* GET complete winery registration page. */
router.get('/complete-w', function(req, res, next) {
  res.render('complete-w', { title: 'Thank you! | Glasshoppr' });
});


module.exports = router;
