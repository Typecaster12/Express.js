import express from "express";
import userModel from "./models/user.model.js";
import morgan from "morgan";
import userRoute from "./routes/router.js";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan("dev"));


app.use("/home", userRoute);
export default app;