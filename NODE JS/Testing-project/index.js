const express = require("express");
const app = express();
const config = require("config");
const { prototype } = require("mime/mime");
const PORT = config.PORT || 8000;
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
//setting view engine to ejs
app.set("view engine", "hbs"); //hbs ejs pug

//route for index page
app.get("/", function (req, res) {
  res.render("index", { name: config.get("name") });
});

//route for magic page
app.get("/magic", function (req, res) {
  res.render("magic");
});
app.post("/psi/", (req, res) => {
  console.log(req.body);
  res.send(req.body);
});
app.listen(PORT, function () {
  console.log(
    `Server is running on port ${PORT} and ${config.get("NODE_ENV")} server`
  );
});
