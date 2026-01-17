import express from "express";
import path from "path";

//server creation;
const app = express(); //app is the instence of express

//for get request;
app.get('/', (req, res) => {
    //we have to send a file to express server;
    const dirPath = import.meta.dirname; //like __dirname in node js
    // const filePath = import.meta.url; //like __filename in node js

    const homepagePath = path.join(dirPath, "public", "index.html"); //we have to send file's absolute path here;

    res.sendFile(homepagePath); //incase we have to render content inside of file
    //we have to use sendFile, else .send() is used;
});

//for hendeling post request;
app.post('/submit', (req, res) => {
    res.send("Data Submitted");
});


app.listen(3500, () => {
    console.log("Server is running on 3500 port");
});