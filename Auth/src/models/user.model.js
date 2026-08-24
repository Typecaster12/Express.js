import mongoose from "mongoose";

//we want uniquness in the data
const userSchema = new mongoose.Schema({
    userName: String,
    userMail: {
        type: String,
        //this will allow no duplicate data;
        unique: true //as we want that every user must reg with their own emailAddress;
    },
    userPass: String
});


const userModel = mongoose.model("TestUser", userSchema);

export default userModel;