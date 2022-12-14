// Create mongoose connection
const mongoose = require('mongoose');
const { MONGO_URI } = require('../config');
mongoose.connect(MONGO_URI, {useNewUrlParser: true, useUnifiedTopology: true});

// Create mongoose schema
const cartSchema = new mongoose.Schema(
    { 
        products: [{
        name: String,
        price: Number,
        quantity: Number,
        }],
        total: Number,
});

// Create mongoose model
const Cart = mongoose.model('Cart', cartSchema);

// Query the database
const addCart = async (cart) => {
    return await Cart.insertMany(cart);
}

module.exports = {
    addCart,
}

