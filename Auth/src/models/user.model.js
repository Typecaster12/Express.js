import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    userName: String,
    userMail: String,
    userPass: String
});


const userModel = mongoose.model("TestUser", userSchema);

export default userModel;