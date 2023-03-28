const express = require("express");
const morgan = require("morgan");
const config = require("config");
const app = express();
console.log("App Name is :" + config.get("app_name"));
console.log("Mail server is :" + config.get("mail.server"));
console.log("password is:" + config.get("password"));
app.use(express.json());
if (app.get("env") === "development") {
  console.log("");
  app.use(morgan("tiny"));
}

app.get("/", (req, res) => {
  res.send("Welcome to Express Demo");
});
app.post("/morganDemo", (req, res) => {
  res.send("Morgan Demo   ");
});
app.listen(3300, () => {
  console.log("Server started at port 3300");
});
