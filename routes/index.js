var express = require("express");
var router = express.Router();

router.get("/health", function (req, res) {
  res.send("Healthy");
});

module.exports = router;
