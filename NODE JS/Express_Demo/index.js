const express = require("express");
const app = express();
const Joi = require("joi");
const router = express.Router();
app.use(express.static("public"));
const logg = require("./logger");
app.use(logg.logger);
app.use(require("./auth"));
app.use(express.urlencoded({ extended: true }));
app.use("/", router);
router.use(express.json());

const courses = [
  { id: 1, name: "course1" },
  { id: 2, name: "course2" },
  { id: 3, name: "course3" },
];
router.get("/", (req, res) => {
  res.send("Hello Express");
});

router.get("/api/courses", (req, res) => {
  res.send(courses);
});

router.get("/api/courses/:cid", (req, res) => {
  const course = courses.find((c) => {
    return c.id === parseInt(req.params.cid);
  });
  if (course) res.send(course);
  else res.send("Course Not Found");
});

router.post("/api/courses", (req, res) => {
  const course = { id: courses.length + 1, name: req.body.name };
  const error = validateCourse(req);
  if (error) return res.status(400).send(error.details[0].message);
  courses.push(course);
  res.send(course);
  //console.log(result.error.details[0].message);
});

router.put("/api/courses/:cid", (req, res) => {
  const course = courses.find((c) => {
    return c.id === parseInt(req.params.cid);
  });
  if (course) {
    const error = validateCourse(req);
    if (error) return res.status(400).send(error.details[0].message);

    objIndex = courses.findIndex((obj) => {
      return obj.id == req.params.cid;
    });
    courses[objIndex].name = req.body.name;

    res.send(courses[objIndex]);
  } else {
    res.send("Course Not found With id:" + req.params.cid);
  }
});

function validateCourse(req) {
  const schema = Joi.object({
    name: Joi.string().min(3).max(50).required(),
  });
  const { error } = schema.validate(req.body);
  return error;
}
router.delete("/api/courses/:cid", (req, res) => {
  const course = courses.find((c) => {
    return c.id === parseInt(req.params.cid);
  });
  if (course) {
    objIndex = courses.findIndex((obj) => {
      return obj.id == req.params.cid;
    });
    const removed = courses.splice(objIndex, 1);
    res.send(removed);
  } else res.send("Course Not found");
});
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log("Server Started at port " + PORT);
});

/*

movie-rental
    package.json
    index.js

genres
{id,name}


1. validate Course

2. delete course
3.movie-rantal
*/

//self study on ES6 syntax
//again write movie rental app
/*
Asynchronous
promies
Async await
mongoose

*/
