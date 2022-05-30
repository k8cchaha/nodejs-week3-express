const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config({ path: "./config.env" });

const DB = process.env.DATABASE.replace(
  "<password>",
  process.env.DATABASE_PASSWORD
);

mongoose
  .connect(DB)
  .then(() => {
    console.log("連線成功");
  })
  .catch((err) => {
    console.log(err);
  });

// For local testing
// mongoose.connect("mongodb://localhost:27017/hotel").then(() => {
//   console.log("連線成功");
// });
