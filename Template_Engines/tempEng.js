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
    // res.render("report", { marks: 100 }); //for the escaped one;
    res.render("report", { content: '<strong> This is the dynamic html </strong>' }); //for the escaped one;
});

server.listen(3000, () => {
    console.log('Server is running...');
});