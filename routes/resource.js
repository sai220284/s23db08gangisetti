var express = require('express');
var router = express.Router();
// Require controller modules.
var api_controller = require('../controllers/api');
var shoes_controller = require('../controllers/shoes');
/// API ROUTE ///
// GET resources base.
router.get('/', api_controller.api);
/// shoes ROUTES ///
// POST request for creating a shoes.
router.post('/shoes', shoes_controller.shoes_create_post);
// DELETE request to delete shoes.
router.delete('/shoes/:id', shoes_controller.shoes_delete);
// PUT request to update shoes.
router.put('/shoes/:id', shoes_controller.shoes_update_put);
// GET request for one shoes.
router.get('/shoes/:id', shoes_controller.shoes_detail);
// GET request for list of all shoes items.
router.get('/shoes', shoes_controller.shoes_list);
module.exports = router;