import express from "express";
import path from "path";
// import { fileURLToPath } from "url";

const app = express();
//if we have more than one static file(eg html, css, image, js files) and we have to render them;
// const __filename = fileURLToPath(import.meta.url);
//this is the absolute path of file(drive/folder/folder/.../file);
// const __dirname = path.dirname(__filename);

//we can do this also instead of above code;
const __dirname = import.meta.dirname;

//middleware;
//Middleware is a function that runs between the request and the response.
//this is the way to render static files(more than one, togeather);
app.use(express.static(path.join(__dirname, "StaticFiles")));


app.listen(3500, () => {
    console.log('Server is running on 3500.');

    //for directly accessing dirname and filename as __dirname and __filename is not accessable/defined in es module;
    console.log(import.meta.dirname);
    console.log(import.meta.filename);

    console.log(__dirname);

    if (import.meta.dirname == __dirname) {
        console.log('Yes');

    } else {
        console.log('No');

    }

});