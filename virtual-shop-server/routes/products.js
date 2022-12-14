const express = require('express');
const router = express.Router();
const { getAllProducts } = require('../db/product');

router.get('/', async(req, res) => {
    const products = await getAllProducts();
    res.json(products);
});

module.exports = router;
