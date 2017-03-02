
// ==== Dependencies =======================================================

var express = require("express");
var bodyParser = require("body-parser");
var logger = require("morgan");
var mongoose = require("mongoose");

var scraper = require('./scraper.js')


// Set mongoose to leverage built in JavaScript ES6 Promises
mongoose.Promise = Promise;

// Require our userModel model
var Example = require("./models/userModel.js");

// Initialize Express
var app = express();


// Use morgan and body parser with our app
app.use(logger("dev"));
app.use(bodyParser.urlencoded({
  extended: false
}));

// Make public a static dir
app.use(express.static("public"));


// ==== Connect Mongoose to database =========================================

mongoose.connect("mongodb://localhost/nytnotes");
var db = mongoose.connection;

// Show any mongoose errors
db.on("error", function(error) {
  console.log("Mongoose Error: ", error);
});

// Once logged in to the db through mongoose, log a success message
db.once("open", function() {
  console.log("Mongoose connection successful.");
});


// Routes
// ======

app.post("/submit", function(req, res) {

  var user = new Example(req.body);
  
  //var user = new Example{(
  //username: req.body.username,
  //password: req.body.password

/* OUR CUSTOM METHODS
 * (methods created in the userModel.js)
 * -/-/-/-/-/-/-/-/-/ */




 // TODO: Use our custom methods to create
 // the FullName and LastUpdatedDate entries
 // in the doc that the  user submits. These
 // will get saved to the mongoDB collection.
 //
 // TIP: You must create these methods in the model.

 user.fullName2();
 user.theDateToday();

 user.customThing();


// END OF CUSTOM METHODS
// =====================
// NORMAL METHOD BELOW

  // Save a user to our mongoDB
  user.save(function(error, doc) {
    // Send an error to the browser
    if (error) {
      res.send(error);
    }
    // Or send the doc to our browser
    else {
      res.send(doc);
    }
  });
});

// Listen on port 3000
app.listen(3000, function() {
  console.log("App running on port 3000!");
});

app.get("/", function(req, res) {
    res.send('index.html');
    //res.send is equivilant to the normal res.end

    //the function used in this is called a route handler (function(req,res))
});
/*
app.post("/scraped", function(req, res) {
  res.send("back to the home page");
};
*/

