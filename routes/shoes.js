var express = require('express');
const shoes_controlers= require('../controllers/shoes');
var router = express.Router();
const secured = (req, res, next) => {
    if (req.user){
    return next();
    }
    res.redirect("/login");
    }
/* GET shoes */
router.get('/', shoes_controlers.shoes_view_all_Page );
module.exports = router;
/* GET detail shoes page */
router.get('/detail',secured, shoes_controlers.shoes_view_one_Page);
/* GET create shoes page */
router.get('/create',secured,  shoes_controlers.shoes_create_Page);

/* GET update costume page */
router.get('/update', secured,
shoes_controlers.shoes_update_Page);
/* GET delete shoes page */
router.get('/delete',secured, shoes_controlers.shoes_delete_Page);