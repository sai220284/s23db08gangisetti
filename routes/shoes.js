var express = require('express');
const shoes_controlers= require('../controllers/shoes');
var router = express.Router();
/* GET shoes */
router.get('/', shoes_controlers.shoes_view_all_Page );
module.exports = router;
