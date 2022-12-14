const express = require('express');
const router = express.Router();
const { addCart } = require('../db/cart');

router.post('/', async(req, res) => {
    const cart = req.body;
    const resCart = await addCart(cart);
    res.json(resCart);
});

module.exports = router;
