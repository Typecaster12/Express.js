import express from 'express';
import path from 'path';

const app = express();

//to servre static file to server;
const __dirname = import.meta.dirname;
app.use(express.static(path.join(__dirname, 'FormFile')));

//for action s on the form;
//if we use get method in the form;
/*
app.get('/submit', (req, res) => {
    res.send("Form Submitted, Thankyou for your time.");
});
*/

//*before getting forms's data, we have to use this middleware;
app.use(express.urlencoded({extended:true}));

//if we use post method in the form;
app.post('/submit', (req, res) => {
    console.log(req.body); //req.body now have our complete form data;
    //!but this only cant show form's data, as we have to use some middle-first,
    res.send("Form submitted, ThankYou..");
});

app.listen(3500, () => {
    console.log('Server is running on 3500 port...');
});