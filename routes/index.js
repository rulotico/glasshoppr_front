var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/* GET listing by cities. */
router.get('/cities', function(req, res, next) {
  res.render('cities', { title: 'Express' });
});

/* GET winery page. */
router.get('/winery', function(req, res, next) {
  res.render('winery', { title: 'Express' });
});

/* GET user login page. */
router.get('/login', function(req, res, next) {
  res.render('login', { title: 'Express' });
});

/* GET user registration page. */
router.get('/register', function(req, res, next) {
  res.render('register', { title: 'Express' });
});

/* GET user profile-builder page. */
router.get('/profile-builder', function(req, res, next) {
  res.render('profile-builder', { title: 'Express' });
});

/* GET user profile page. */
router.get('/profile', function(req, res, next) {
  res.render('profile', { title: 'Express' });
});

/* GET user reservations page. */
router.get('/reservations', function(req, res, next) {
  res.render('reservations', { title: 'Express' });
});

/* GET user favorites page. */
router.get('/favorites', function(req, res, next) {
  res.render('favorites', { title: 'Express' });
});

/* GET static 'about' page. */
router.get('/about', function(req, res, next) {
  res.render('about', { title: 'Express' });
});

/* GET static 'contact' page. */
router.get('/contact', function(req, res, next) {
  res.render('contact', { title: 'Express' });
});

/* GET static 'for-wineries' page. */
router.get('/for-wineries', function(req, res, next) {
  res.render('for-wineries', { title: 'Express' });
});

/* GET Rate Winery page. */
router.get('/rate-winery', function(req, res, next) {
  res.render('rate-winery', { title: 'Express' });
});

/* GET winery login page. */
router.get('/login-w', function(req, res, next) {
  res.render('login-w', { title: 'Express' });
});

/* GET winery activate page. */
router.get('/activate-w', function(req, res, next) {
  res.render('activate-w', { title: 'Express' });
});

/* GET winery premium page. */
router.get('/premium-w', function(req, res, next) {
  res.render('premium-w', { title: 'Express' });
});

/* GET pay premium (winery) page. */
router.get('/payment-w', function(req, res, next) {
  res.render('payment-w', { title: 'Express' });
});

/* GET complete winery registration page. */
router.get('/complete-w', function(req, res, next) {
  res.render('complete-w', { title: 'Express' });
});


module.exports = router;
