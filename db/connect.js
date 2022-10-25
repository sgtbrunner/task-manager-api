const mongoose = require('mongoose');

const connectDB = (url) => {
  return (
    url &&
    mongoose.connect(url, {
      useNewUrlParser: true,
      useCreateIndex: true,
      useFindAndModify: false,
      useUnifiedTopology: true,
    })
  );
};

module.exports = connectDB;
