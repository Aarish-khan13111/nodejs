const mongoose = require("mongoose");

mongoose.set("strictQuery", false);

exports.connect = () => {
  mongoose
    .connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(console.log(`DB CONNECTION SUCCESFULL`))
    .catch((error) => {
      console.log(`DB CONNECTION FAILD`);
      console.log(error);
      process.exit(1);
    });
};
