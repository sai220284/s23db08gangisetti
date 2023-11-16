var express = require('express');
const shoes_controlers= require('../controllers/shoes');
var router = express.Router();
/* GET shoes */
router.get('/', shoes_controlers.shoes_view_all_Page );
module.exports = router;
/* GET detail shoes page */
router.get('/detail', shoes_controlers.shoes_view_one_Page);
/* GET create shoes page */
router.get('/create',  shoes_controlers.shoes_create_Page);

/* GET create update page */
router.get('/update', shoes_controlers.shoes_update_Page);

/* GET delete shoes page */
router.get('/delete', shoes_controlers.shoes_delete_Page);



