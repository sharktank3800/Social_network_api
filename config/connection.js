// import mongoose library 
const mongoose = require("mongoose");

// connecting to mongoDB
mongoose.connect("mongodb://127.0.0.1:27017/social_network_api");

const db = mongoose.connection;
// export connection to the database as a module
module.exports = db;