const express = require("express");
const multer = require("multer");
const mongoose = require("mongoose");
const app = express();
const dotenv = require("dotenv");

const authRoute = require("./routes/auth");

dotenv.config();
app.use(express.json());

mongoose.connect(process.env.db_URI, {useNewUrlParser: true, useUnifiedTopology: true})
    .then(()=>{
        app.listen("5000");
    }).catch((err) => console.log(err));

app.use("/api/auto", authRoute);

app.use("/", (req,res) => {
    console.log('hey')
})

