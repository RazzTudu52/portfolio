//establishing connection with mongodb using mongoose

const mongoose=require("mongoose");
const dotenv = require("dotenv").config();



const connectDB = async () => {
  try {
    //mongodb connection string
    const conn = await mongoose.connect(process.env.MONGO_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      // useFindAndModify: false,
      //useCreateIndex: true,
    });

    console.log("MongoDB connected");
  } catch (err) {
    // console.log(err);
    process.exit(1);
  }
};

module.exports = connectDB;
