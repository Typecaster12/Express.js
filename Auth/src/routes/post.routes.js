import express from 'express';
import jwt from 'jsonwebtoken';
import userModel from '../models/user.model';

const postRoute = express.Router();

//dummy post;
postRoute.post("/create", async (req, res) => {
    // console.log(req.body);

    //will console the token,
    // now question is, is this token correct? 
    // console.log(req.cookies);

    //token validation;
    const token = req.cookies.token;

    //so this will confirm as if user have no token, they are unauthorized users;
    if (!token) {
        return res.status(401).json({
            message: "UnAuthorized"
        });
    }

    try {
        //now checking, if user has that token which server generates or not?
        //if wrong token?, this will throw error;
        // jwt.verify(token, process.env.JWT_SECRET);

        const decoded = jwt.verify(token, process.env.JWT_SECRET);

        const user = await userModel.findOne({
            _id: decoded.id
        });

    } catch (err) {
        return res.status(401).json({
            message: "Token is invalid"
        })
    }

    res.send("Post created successfully");
    // console.log("Post Created successfully");
});

export default postRoute;