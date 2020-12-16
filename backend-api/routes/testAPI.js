var express = require("express");
var router = express.Router();

router.get("/", function(req, res, next) {
    res.send("API seems to be communicating properly");
});

module.exports = router;