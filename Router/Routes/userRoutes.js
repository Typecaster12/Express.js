//this is specially for user related routes for our app;
import { Router } from "express";

//router formed;
const userRoutes = Router();
//we can get all user, specific users, or add new users;

userRoutes.get('/', (req, res) => {
    res.send("Here is all users data");
});

userRoutes.post('/', (req, res) => {
    res.send("New User");
});

userRoutes.get('/:id', (req, res) => {
    res.send("specific user data");
});

export default userRoutes;