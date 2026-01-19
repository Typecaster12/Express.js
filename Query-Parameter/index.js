import express from 'express';

const app = express();

app.get('/products', (req, res) => {
    console.log(req.query); //for query parameter;
    res.send(`<h2>User Search for ${req.query.search}</h2>`);
});


app.listen(3000, () => {
    console.log('Server running..');
});