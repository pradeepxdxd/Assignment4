const express = require('express');
const {insertData, loginData} = require('../controllers/users');
const router = express.Router();

router.get('/register', (req, res) => {
    res.render('register');
})
router.get('/login', (req, res) => {
    res.render('login');
})

router.post('/reg-data', insertData);
router.post('/login-data', loginData);

module.exports = router;