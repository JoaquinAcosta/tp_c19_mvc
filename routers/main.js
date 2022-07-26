const express = require('express');
const router = express.Router();

/* controlador */
const mainController = require('../controllers/mainController');

/* / */
router.get('/', mainController.home);
router.get('/about', mainController.about);


module.exports = router;