// Dependencies
// =============================================================
var express = require("express");
var path = require("path");

// Sets up the Express App
// =============================================================
var app = express();
var PORT = 8080;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Routes
// =============================================================
//
require("./routing/apiRoutes")(app);
require("./routing/htmlRoutes")(app);

// The start of our app
// =============================================================
//
  app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
  