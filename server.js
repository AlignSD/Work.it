const express = require("express");
const mongoose = require("mongoose");
const logger = require("morgan");


require('dotenv').config()

const PORT = process.env.PORT || 3000;

const db = require('./models');

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workouts", { 
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex:true,
    useFindAndModify: false
});
app.use(require("./routes/apiRoutes"));
app.use(require("./routes/htmlRoutes"));


app.listen(PORT, () => {
    console.log(`App Running On Port ${PORT}!`);
});