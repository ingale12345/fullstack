const express = require("express");
const app = express();
const Joi = require("joi");
const config = require("config");
app.use(express.json());

//import genre router
// const genreRouter = require("./router/genre");
// app.use("/api/genres/", genreRouter);

//import customer router
const customerRouter = require("./customerRouter");
app.use("/api/customers/", customerRouter);

//require("dotenv").config();
const PORT = config.get("PORT") || 3000;
console.log("port No is:" + PORT);
app.listen(PORT, () => {
  console.log(`Server Started on port ${PORT}`);
});
