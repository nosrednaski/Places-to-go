var express = require("express");

var router = express.Router();

// Import the model (place.js) to use its database functions.
var place = require("../models/place.js");

// Create all our routes and set up logic within those routes where required.
router.get("/", function(req, res) {
  place.selectAll(function(data) {
    var hbsObject = {
      places: data
    };
    console.log(hbsObject);
    res.render("index", hbsObject);
  });
});

router.post("/api/places", function(req, res) {
  place.insertOne(["place_name"], [req.body.place_name], function(result) {
    // Send back the ID of the new quote
    res.json({ id: result.insertId });
  });
});

router.put("/api/places/:id", function(req, res) {
  var condition = `id = ${req.params.id}`;

  console.log("condition", condition);

  place.updateOne(
    {
      been_there: req.body.been_there
    },
    condition,
    function(result) {
      if (result.changedRows === 0) {
        // If no rows were changed, then the ID must not exist, so 404
        return res.status(404).end();
      }
      res.status(200).end();

    }
  );
});

// Export routes for server.js to use.
module.exports = router;
