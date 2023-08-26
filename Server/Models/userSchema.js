const mongoose = require("mongoose");

//user schema
const userSchema = new mongoose.Schema({
    name:String,
    email:String,
    phone_number:Number
 
});

const User = mongoose.model("User", userSchema);

module.exports = User;