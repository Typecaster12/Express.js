import express from 'express';

const app = express();

app.get('/', (req, res) => {
    res.send("Hello from home page");
    console.log('Hello this is home page');
});

//here id is dynamic,
//this is the variable part of URL(talking about req parmeters);
// : is must;
//instead of writing code for every id manually;
//we use this req parameters.
app.get('/submit/:id', (req, res) => {
    res.send("Data submited, Id number is : " + req.params.id);
    //req.params is an object, and inside that object we have currently id: value(key value pair);
    console.log(req.params);
    console.log(req.params.id);
});

app.get('/products/:id/article/:slug', (req, res) => {
    res.send("Product id number: " + req.params.id + " And description is : " + req.params.slug);
    console.log(req.params);

});

app.listen(3500, () => {
    console.log('App is running on 3500 port..');
});