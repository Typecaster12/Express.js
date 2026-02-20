import express from 'express';
import demoData from './routes/getReq.routes';

const server = express();

//middle ware;
server.use(express.json());
server.use("/home", demoData); //for routes

server.listen(3000, () => {
    console.log("Server is running..");
});