import express from "express";
import demoData from "./routes/getReq.routes";
const server = express();

//middlewares;
server.use(express.json());
server.use(express.urlencoded({ extended: true })); //to get the form's data into req.body;

//routes;
server.use("/home", demoData);

server.listen(3000, () => {
    console.log('Server is running..');
});