// import packages and files
const express = require("express");
const routes = require("./routes");
const db = require("./config/connection")


// setting up environment variables
const PORT = process.env.PORT || 3333

// create an instance
const app = express();

// middleware to parse incoming data
app.use(express.urlencoded({extended: true}));
app.use(express.json());

// use routes established in routes folder
app.use(routes);

db.on("open", () => {
    console.log("db connected");

    // start the server
    app.listen(PORT, () => console.log("server started on", PORT));
})