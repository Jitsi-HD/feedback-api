var express = require('express');
var router = express.Router();
var path = require('path');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.send("This is not the page you are looking for");
});

module.exports = router;
