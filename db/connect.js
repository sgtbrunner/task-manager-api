const mongoose = require('mongoose');

const connectDB = async (url, options) => mongoose.connect(url, options);

module.exports = { connectDB };
