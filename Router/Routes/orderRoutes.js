import { Router } from "express";

const orderRoutes = Router();

//we can add new order, and can see specific order by their id;
orderRoutes.post("/", (req, res) => {
    res.send("New Order added");
});

orderRoutes.get('/:id', (req, res) => {
    res.send("Here is your order");
});

export default orderRoutes;  