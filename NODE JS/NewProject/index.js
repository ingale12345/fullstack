const express = require("express");
const app = express();
const router = express.Router();
console.log(router);
app.get("/", (req, res) => {
  res.redirect("psi.js");
});
module.exports = app;
app.listen(2000, () => {
  console.log("Listening on port 2000");
});
