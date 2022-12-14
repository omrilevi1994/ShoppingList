// Create mongoose connection
const mongoose = require('mongoose');
const { MONGO_URI } = require('../config');
mongoose.connect(MONGO_URI, {useNewUrlParser: true, useUnifiedTopology: true});

// Create mongoose schema
const productSchema = new mongoose.Schema({
    name: String,
    price: Number,
    quantity: Number,
    description: String,
    image: String,
});

// Create mongoose model
const Product = mongoose.model('Product', productSchema);

// Query the database

const getAllProducts = async () => {
    return await Product.find();
}

module.exports = {
    getAllProducts,
}

