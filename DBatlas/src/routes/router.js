import { Router } from "express";
import { deleteUser, getRegUsers, getSingleUser, updateUser, userReg } from "../controller/userController.js";

const userRoute = Router();

//user reg;
userRoute.post("/userRegistration", userReg);
userRoute.get("/userRegistration", getRegUsers);
userRoute.get("/userRegistration", getSingleUser);
userRoute.delete("/userRegistration/:id", deleteUser);
userRoute.patch("/userRegistration/:id", updateUser);
export default userRoute;