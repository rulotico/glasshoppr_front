var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Welcome to Glasshoppt', url: req.originalUrl });
});

/* GET listing by cities. */
router.get('/cities', function(req, res, next) {
  res.render('cities', { title: 'Serch by City | Glasshoppr', url: req.originalUrl });
});

/* GET winery page. */
router.get('/winery', function(req, res, next) {
  res.render('winery', { title: 'Winery | Glasshoppr', url: req.originalUrl });
});

/* GET user login page. */
router.get('/login', function(req, res, next) {
  res.render('login', { title: 'Sign in | Glasshoppr', url: req.originalUrl });
});

/* GET user registration page. */
router.get('/register', function(req, res, next) {
  res.render('register', { title: 'Sign up | Glasshoppr', url: req.originalUrl });
});

/* GET user profile-builder page. */
router.get('/profile-builder', function(req, res, next) {
  res.render('profile-builder', { title: 'Profile Builder | Glasshoppr', url: req.originalUrl });
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
  res.render('rate-winery', { title: 'Rate this Winery | Glasshoppr', url: req.originalUrl });
});

/* GET winery login page. */
router.get('/login-w', function(req, res, next) {
  res.render('login-w', { title: 'Winery Sign In | Glasshoppr', url: req.originalUrl });
});

/* GET winery activate page. */
router.get('/activate-w', function(req, res, next) {
  res.render('activate-w', { title: 'Winery Sign Up | Glasshoppr', url: req.originalUrl });
});

/* GET winery premium page. */
router.get('/premium-w', function(req, res, next) {
  res.render('premium-w', { title: 'Become Premium Winery | Glasshoppr', url: req.originalUrl });
});

/* GET pay premium (winery) page. */
router.get('/payment-w', function(req, res, next) {
  res.render('payment-w', { title: 'Payment | Glasshoppr', url: req.originalUrl });
});

/* GET complete winery registration page. */
router.get('/complete-w', function(req, res, next) {
  res.render('complete-w', { title: 'Thank you! | Glasshoppr', url: req.originalUrl });
});

/* GET winery dashborard welcome page. */
router.get('/welcome-w', function(req, res, next) {
  res.render('welcome-w', { title: 'Welcome! | Glasshoppr', url: req.originalUrl });
});

/* GET winery dashborard book page. */
router.get('/book-w', function(req, res, next) {
  res.render('book-w', { title: 'Welcome! | Glasshoppr', url: req.originalUrl });
});

/* GET winery dashborard book list page. */
router.get('/book-list-w', function(req, res, next) {
  res.render('book-list-w', { title: 'Welcome! | Glasshoppr', url: req.originalUrl });
});

/* GET winery dashborard edit varietals and wines page. */
router.get('/varietals-and-wines-w', function(req, res, next) {
  res.render('varietals-and-wines-w', { title: 'Welcome! | Glasshoppr', url: req.originalUrl });
});

/* GET winery dashborard edit winery information page. */
router.get('/profile-w', function(req, res, next) {
  res.render('profile-w', { title: 'Welcome! | Glasshoppr', url: req.originalUrl });
});

/* GET winery dashborard analytics page. */
router.get('/analytics-w', function(req, res, next) {
  res.render('analytics-w', { title: 'Welcome! | Glasshoppr', url: req.originalUrl });
});

/* GET winery dashborard go premium page. */
router.get('/go-premium-w', function(req, res, next) {
  res.render('go-premium-w', { title: 'Welcome! | Glasshoppr', url: req.originalUrl });
});

module.exports = router;
