import express from 'express';

const server = express();


//what you are using => view engine
//what is the library you are using for that like => ejs, pug etc..
server.set("view engine", "ejs");

//home route;
server.get("/", (req, res) => {
    res.send("Hello from home route..");
});

server.get("/report", (req, res) => {
    res.render("report");
});

server.listen(3000, () => {
    console.log('Server is running...');
});