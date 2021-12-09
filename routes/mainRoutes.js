const express = require('express');
const mainController = require('../controllers/mainController');
const router = express.Router();


router.get('/', mainController.getMainPage);

router.get('/getdate', mainController.getdate);

router.get('/getweekday', mainController.getweekday);

router.post('/', mainController.postWish)

module.exports = router;