import userModel from "../models/user.model.js";
import jwt from "jsonwebtoken";

export const registerUser = async (req, res) => {
    try {
        const { userName, userMail, userPass } = req.body;

        const user = await userModel.create({
            userName, userMail, userPass
        });

        //token creation,
        //we create token fro every user which will be created(register);
        const token = jwt.sign({
            //take the id of the user(newly created user);
            id: user._id
        }, process.env.JWT_SECRET); //we get it from jwtsecrets.com;

        // store the token in cookie
        //this cookie will be sent with every future requests;
        res.cookie("token", token);

        res.status(201).json({
            status: "Success",
            message: "User Registerd sucessfully",
            user
            // token //we never sends cookie in the response, but store it into cookie
        })

    } catch (err) {
        res.status(500).json({
            status: "Failed",
            message: err.message
        })
    }
}   