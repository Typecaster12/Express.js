import express from 'express';
import restroRoutes from "./Routes/restroRoutes";
import orderRoutes from "./Routes/orderRoutes";
import userRoutes from "./Routes/userRoutes"

const server = express();
//middleware
server.use(express.json());

server.use("/user", userRoutes);
server.use("/restraunts", restroRoutes);
server.use("/order", orderRoutes);


server.listen(4000, () => {
    console.log("Server is running on the port number 4000");
});