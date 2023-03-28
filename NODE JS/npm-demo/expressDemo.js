const express = require("express");
let app = express();
app.get("/", (req, res) => {
  res.send(
    "<h2 style='color:red ,background-color:yellow'>Welcome express</h2>"
  );
});
app.get("/people", (req, res) => {
  res.send("<h1>welcome to people Demo<h1>");
});
app.get("/people/nikhil", (req, res) => {
  //   res.send("<h1>welcome Express Nikhil<h1>");
  res.redirect("/");
});
app.listen(3000, () => {
  console.log("Checking Request on port 3000");
});
