// import required packages
const mongoose = require('mongoose')
const express = require('express');
const cors = require('cors');

//import Models
const contactModel = require('./models/contactModel');
const workModel = require('./models/works')

//import routes
const contactRoutes = require('./routes/contactRoutes');


const app = express();
app.use(cors());
app.use(express.json());
app.use('/contact', contactRoutes)

//MongoDB Connect
var mongoDB = 'mongodb+srv://CheeseMaster_69:seabirdkant1A@cluster0.5crnt.mongodb.net/Portfolio?retryWrites=true&w=majority';
mongoose.connect(mongoDB, { useNewUrlParser: true, useUnifiedTopology: true }).then(() => console.log("CONNECTION ESTABLISHED"));

app.get("/", (req, res) => {
    return res.json({ "welcome": "To my portfolio backend" })
})

app.get("/works", async (req, res) => {
    const getAllWorks = await workModel.find();
    return res.json(getAllWorks);
})



//app Listen
app.listen(process.env.PORT || 3001, () => {
    console.log("Express app is running");
})