import express from 'express';
import { PORT } from './envValidation';

const app = express(); //instance, contains every thing express offers;

//!No need to set header object, or content-type, and status code etc
//express is smart enough to handle all these by its own;
app.get('/', (req, res) => res.send("Hello World!"));

//routing;
app.get('/about', (req, res) => {
    //can return html directly, and express figure it out automatically what type of data is this
    return res.send(`<h1>Hello about, inside h1 tag btw,</h1>`);
});

// const PORT = process.env.PORT; //using this => typeof port will be string;
app.listen(PORT, () => {
    console.log(typeof PORT); //after validation this will be number;
    console.log(`Server is running at port: ${PORT}`);
});