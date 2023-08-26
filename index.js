//requiring packages
const dotenv = require("dotenv").config();
const express = require('express');
const bodyParser = require('body-parser');
const ejs = require('ejs');
const mongoose = require('mongoose');
const connectDB = require("./Server/connection.js");
const path = require('path');
const User = require('./Server/Models/userSchema');


const PORT = process.env.PORT;

const app = express();
connectDB();

app.use(express.static(__dirname + '/public'));
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({
    extended: true
}));

app.use(express.static(path.join('../views', 'index')));



// User Side Code
app.get('/', (req, res) => {
    res.status(201).render('home.ejs');
})

app.post("/userInput", async (req, res) => {
        const newQuary = req.body;
        const tempUser = new User(newQuary);
        await tempUser.save();
        res.redirect("/");
   
});





//listen to port 
app.listen(PORT,() => {
    console.log(`Server is running in http://localhost:${PORT} OR http://127.0.0.1:${PORT}`);
});
