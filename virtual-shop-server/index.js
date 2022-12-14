// express server with routes for virtual shop

const express = require('express');
const app = express();
const port = 8080;
const cors = require('cors');
// import routes
const cart = require('./routes/cart');
const products = require('./routes/products');

// Middleware
app.use(express.json());

// Enable CORS
app.use(cors());

// use routes
app.use('/cart', cart);
app.use('/products', products);

app.listen(port, () => console.log(`Virtual shop server listening on port ${port}!`));

