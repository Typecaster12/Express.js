//we can get restaunts by their ids and get all the restro;
import { Router } from "express";
const restroRoutes = Router();

// GET /restaurants
restroRoutes.get("/", (req, res) => {
    res.send("All restaurants");
});

// GET /restaurants/:id
restroRoutes.get("/:id", (req, res) => {
    res.send("Restaurant details");
});

export default restroRoutes;