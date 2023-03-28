const express = require("express");
const app = express();
app.use(require("./route/home"));
app.use(require("./route/courses"));
app.listen(3232, () => {
  console.log("Server started on port 3232");
});
