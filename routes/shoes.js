var express = require('express');
var router = express.Router();

// Define your Shoes class (you can use a database or an array)
var shoesData = [
  { brand: 'Nike', size: 10, price: 100 },
  { brand: 'Adidas', size: 9, price: 85 },
  { brand: 'Puma', size: 8, price: 75 },
];

// Define a route to render the "Shoes" page
app.get('/shoes', (req, res) => {
  res.render('shoes', {
    title: 'Search Results - Shoes',
    shoes: shoesData, // Pass the shoe data to the Pug template
  });
});


router.get('/', function(req, res, next) {
  res.render('shoes', { title: 'Express' });
});

module.exports = router;

