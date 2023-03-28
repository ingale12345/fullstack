const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const router = express.Router();
const app = new express();

app.use("/", router);

//Body Parser Code
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());
var urlencodedParser = bodyParser.urlencoded({ extended: false });

router.get("/", (req, res) => {
  res.sendFile(path.join(__dirname + "/index.html"));
});

router.post("/index-file-form-data", urlencodedParser, (req, res) => {
  res.send(req.body);
});
router.get("/index-file-form-data", urlencodedParser, (req, res) => {
  res.send("Dont reload URL");
});
app.listen(3000, () => {
  console.log("Server started at port 3000");
});

/*
const express = require("express");
const app = express();
const path = require("path");
const router = express.Router();

router.get("/", function (req, res) {
  res.sendFile(path.join(__dirname + "/index.html"));
  //__dirname : It will resolve to your project folder.
});

router.get("/about", function (req, res) {
  res.sendFile(path.join(__dirname + "/about.html"));
});

router.get("/sitemap", function (req, res) {
  res.sendFile(path.join(__dirname + "/sitemap.html"));
});
router.post("/index-file-form-data", (req, res) => {});

//add the router
app.use("/", router);
app.listen(process.env.port || 3000);

console.log("Running at Port 3000");
*/
