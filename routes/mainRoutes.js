const express = require('express');
const multer = require('multer')
const path = require('path')
const mainController = require('../controllers/mainController');
const router = express.Router();

let upload = multer({
    storage: multer.diskStorage({
        destination: (req, file, cb) => {
            cb(null, './images')
        },
        filename: function(req,file,cb) {
            cb(null,file.fieldname + '-' + Date.now() + path.extname(file.originalname))
        }
    })
})

router.get('/', mainController.getMainPage);

router.get('/getdate', mainController.getdate);

router.get('/getweekday', mainController.getweekday);

router.post('/', upload.single('userFile'), mainController.postWish)



router.post('/deleteWish', mainController.deleteWish)

module.exports = router;