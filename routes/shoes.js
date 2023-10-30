const express = require('express');
const app = express();
const port = 3000;

// Serve static files from the "public" directory (if needed)
app.use(express.static('public'));

// Set up Pug as the view engine
app.set('view engine', 'pug');

// Define your Shoes class (you can use a database or an array)
const shoesData = [
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

// Define the home page route
app.get('/', (req, res) => {
  res.render('index', { title: 'Express' });
});

// Start the Express server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
