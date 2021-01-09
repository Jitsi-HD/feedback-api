var express = require('express');
var createError = require('http-errors');
var router = express.Router();
const fs = require('fs');

const FEEDBACK_RESULT_FILE = process.env.FEEDBACK_RESULT_FILE || "feedbacks.txt";

router.post('/feedbacks', function(req, res, next) {
  // Add current timestamp to body object
  req.body._time = Date.now();

  // Convert to JSON string
  let feedback_data = JSON.stringify(req.body);

  // Write to result file
  fs.appendFile(FEEDBACK_RESULT_FILE, feedback_data + "\n", (err) => {
    if (err) {
      next(createError(500, "Sorry, auf Grund eines technischen Problems konnten wir dein Feedback leider nicht speichern 😓"));
      console.error(err);
    }else {
      res.send('Vielen Dank für dein Feedback! 😊');
    }
  });
});

module.exports = router;
