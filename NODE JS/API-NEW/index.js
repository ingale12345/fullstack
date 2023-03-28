const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const Joi = require("joi"); //to check input validation
const PORT = process.env.PORT || 4000;
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
// app.use(express.json());
app.set("view engine", "ejs");
app.get("/", (req, res) => {
  res.render("index", { error: "", Alive_Persons_position_is: "" });
});
function validateInput(userInput) {
  const schema = Joi.object({
    total_people: Joi.number().required().min(3).max(500),
    skip: Joi.number().required().min(0).max(),
  });
  const { error } = schema.validate(userInput);
  return error;
}
app.post("/", (req, res) => {
  //   res.send(req.body);
  const limit = parseInt(req.body.total_people);
  const skip = parseInt(req.body.skip);
  const input_error = validateInput(req.body); // function calling for input validation
  //validation error
  if (input_error) {
    res.render("index", {
      Alive_Persons_position_is: "",
      error: input_error.details[0].message,
    });
    return res.status(400).send(input_error.details[0].message);
  }

  let people = []; //empty array for people
  let pointer = 0; // pointer for sword position or index position in array
  let temp = 1;
  for (let i = 0; i < limit; i++) {
    // adding postions of persons in array
    people.push(temp++);
  }
  function if_position_at_Last() {
    // if pointer reached at last index set to again start for circulation
    if (pointer >= people.length - 1) {
      pointer = pointer - people.length;
      // console.log(pointer);
    }
  }
  while (people.length > 1) {
    pointer = pointer + skip;
    if_position_at_Last();
    console.log("After Skip=" + people[pointer]);
    people.splice(++pointer, 1);
    console.log(people);
    console.log(pointer);
    if_position_at_Last();
  }
  res.render("index", { Alive_Persons_position_is: people[0], error: "" });
});
app.listen(PORT, () => {
  console.log(`Server is started on PORT : ${PORT}`);
});
