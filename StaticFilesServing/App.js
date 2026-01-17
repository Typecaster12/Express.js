import express from "express";
import path from "path";
import { fileURLToPath } from "url";

const app = express();
//if we have more than one static file(eg html, css, image, js files) and we have to render them;
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

//middleware;
//Middleware is a function that runs between the request and the response.
//this is the way to render static files(more than one, togeather);
app.use(express.static(path.join(__dirname, "StaticFiles")));


app.listen(3500, () => {
    console.log('Server is running on 3500.');
});