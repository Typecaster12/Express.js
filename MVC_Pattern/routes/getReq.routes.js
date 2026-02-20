import { Router } from "express";
//this is the controller(basically the logic of the route);
import handleGetReq from "../controllers/request.controller";
const demoData = Router();

// demoData.get("/getdemo", (req, res) => {
//     res.send("<h1>Hello World</h1><p>This is HTML from Express</p>");
// });

demoData.get("/getdemo", handleGetReq); //should see response at this route address /getdemo;
export default demoData;