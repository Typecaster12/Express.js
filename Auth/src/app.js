import express from "express";
import router from "./routes/auth.routes.js";
import cookieParser from "cookie-parser"; //used for cookie
import postRoute from "./routes/post.routes.js";

const app = express();
app.use(express.json());
app.use(cookieParser()); //middle ware to use cookie;

app.use("/api/auth", router);
app.use("/api/posts", postRoute);

//wildcard route;
app.use((req, res) => {
    res.status(404).send("No such page found, Page 404.");
});
export default app;