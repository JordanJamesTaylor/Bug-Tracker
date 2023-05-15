const express = require("express"); // reduces needed node code
const dotenv = require("dotenv"); // set env variables
const bodyParser = require("body-parser"); // helps read JSON
const connectDB = require("./config/db"); // mongoose database

dotenv.config({ path: './config/config.env'});

// connectDB();

const app = express();

app.get("/", (req, res) => {
    res.send("Connected to React");
    res.redirect("/");
});

const PORT = process.env.PORT || 5001;

app.listen(PORT, console.log(`Server running on port ${PORT}`));

process.on('uncaughtException', (err) => {
    console.log(err);
    process.exit(1);
});