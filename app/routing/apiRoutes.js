// linking our routes to our data aka the friends.

var surveyData = require("../data/friends");

// ROUTING
// ===============================================================================

module.exports = function(app) {

app.get("/api/survey", function(req, res) {
     res.json(friends);
});

app.post("/api/survey", function(req, res) {
//not sure yet what to put here, will come back to it
//just have this here as a model from the class activities as to how to more or less structure this section
    if (tableData.length < 5) {
        tableData.push(req.body);
        res.json(true);
      }
    else {
        waitListData.push(req.body);
        res.json(false);
      }
    });
};