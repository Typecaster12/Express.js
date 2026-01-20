import express from 'express';

const app = express();

//basically they are used in such cases like, searching, sorting, paginations etc;
app.get('/products', (req, res) => {
    console.log(req.query); //for query parameter;
    res.send(`<h2>User Search for ${req.query.search} and we are on ${req.query.page} number page</h2>`);
});


app.listen(3000, () => {
    console.log('Server running..');
});