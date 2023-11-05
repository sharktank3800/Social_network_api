// import mongoose library 
const mongoose = require("mongoose");

// connecting to mongoDB
mongoose.connect("mongodb://localhost:27017/social_network");

// export connection to the database as a module
module.exports = mongoose.connection;