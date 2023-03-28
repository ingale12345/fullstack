const express = require("express");
const router = express.Router();
router.get("/courses", (req, res) => {
  res.send("Welcome to All Courses");
});
router.get("/courses/:id", (req, res) => {
  res.send("Welcome to Course" + req.params.id);
});
router.post("/courses/:id", (req, res) => {
  res.send("Welcome to post request of Course" + req.params.id);
});

module.exports = router;
