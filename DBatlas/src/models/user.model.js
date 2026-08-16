//this is the schema/model file, and it is created insde the model named folder;
import mongoose from "mongoose";

//schema;
//so that we can tell DB which type of data we are going to deal with;
const userSchema = new mongoose.Schema({
    userName: String, //so here we have to define the type of data we are dealing with;
    userAge: Number,
    userDescription: String,
});

//model;
//if we want to perform any operation(CRUD) in database related to this user schema,
//then we have to create this model
const userModel = mongoose.model("user", userSchema);

//we will export the model only;
export default userModel;