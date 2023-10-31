const mongoose = require("mongoose");

const connect = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://it4409:it4409-soict@lamdb- crud.qd3s7vv.mongodb.net/?retryWrites=true&w=majority",
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }
    );
    console.log("Connected to MongoDB successfully!");
  } catch (err) {
    console.log(err);
  }
};

module.exports = {
  connect,
};
