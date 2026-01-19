import express from 'express';

const server = express();

const demoData = {
    iphone15:"this is iphone-15",
    samsunga15:"this is samsunga15",
    gioneeP7:"this is gioneeP7",
};

server.get('/', (req, res) => {
    res.send("this is home page..");
});

//user/:name;
server.get('/user/:name', (req, res) => {
    console.log(req.params.name);

    res.send("Hello, " + req.params.name);
});


// /square/:number => /square/5 => 25;
server.get('/square/:number', (req, res) => {
    //as route parameter is always a string;
    let number = parseInt(req.params.number);
    console.log(typeof number);

    res.send(number ** 2);
});

// /year/:birth year => current year - birth year => age;
server.get('/year/:birthYear', (req, res) => {
    let dateObj = new Date();
    let currentYear = dateObj.getFullYear(); //2026;
    let birthYear = parseInt(req.params.birthYear);
    let age = currentYear - birthYear;
    res.send("User's age is : " + age);
});


// /add/:a/:b => a+b;
server.get('/add/:numone/:numtwo', (req, res) => {
    let add = parseInt(req.params.numone) + parseInt(req.params.numtwo);
    res.send(add);
});


// /product/:slug => if slug is iphone-15 then show its details;
server.get('/products/:slug', (req, res) => {
    const slug = req.params.slug;

    res.send("Showing details of : " + slug);
});
server.listen(4000, () => {
    console.log('Server is live on 4000 port...');
})