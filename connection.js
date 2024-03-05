const mongoose = require("mongoose");

function connectToMongoDB(url) {
  return mongoose
    .connect(url)
    .then(() => {
      console.log(`MongoDb Connected Successfully`);
    })
    .catch((err) => {
      console.log(err);
    });
}

module.exports = connectToMongoDB;
