// import packages and files
const express = require("express");
const routes = require("./routes");

// setting up environment variables
const PORT = process.env.PORT || 3333

// create an instance
const app = express();

// middleware to parse incoming data
app.use(express.urlencoded({extended: true}));
app.use(express.json());

// use routes established in routes folder
app.use(routes);

