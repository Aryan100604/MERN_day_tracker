const mongoose = require("mongoose");

async function MongodbConnect(url) {
  await mongoose.connect(url);
}

module.exports = { MongodbConnect };
