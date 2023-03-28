const express = require("express");
const Joi = require("joi");
require("dotenv").config();
const app = express();
app.use(express.json());
let genre = {
  id: 1,
  name: "drama",
};

let movies = [
  { id: 1, name: "K.G.F - Chapter 2", genre: ["adventure", "drama"] },
  { id: 2, name: "Dil Se", genre: ["adventure", "action", "drama"] },
  { id: 3, name: "Singham", genre: ["adventure", "drama", "action", "sci-fi"] },
  { id: 4, name: "Tarzen", genre: ["comedy", "drama"] },
  { id: 5, name: "Motu Patalu", genre: ["animation", "adventure", "action"] },
];

movie = { id: 1, name: "K.G.F - Chapter 2", genre: ["adventure", "drama"] };
movie.genre;
app.get("/", (req, res) => {
  res.send("<h1>Welcome to Movies</h1>");
});
app.get("/api/movies", (req, res) => {
  res.send(movies);
});
app.get("/api/movies/:id", (req, res) => {
  const movie = movies.find((m) => {
    return m.id === parseInt(req.params.id);
  });
  if (movie) res.send(movie);
  else res.send("Movie Not Found");
});

app.post("/api/movies/", (req, res) => {
  const movie = {
    id: movies.length + 1,
    name: req.body.name,
    genre: req.body.genre,
  };
  const error = validateMovie(req);
  if (error) return res.status(400).send(error.details[0].message);
  movies.push(movie);
  res.send(movie);
  /*const movie = movies.find((m) => {
    return m.id == parseInt(req.params.id);
  });
  movie.name = req.body.name;
  res.send(movie);*/
});
function validateMovie(req) {
  const schema = Joi.object({
    name: Joi.string().min(3).max(50).required(),
    genre: Joi.array().min(1).max(50).required(),
  });
  const { error } = schema.validate(req.body);
  return error;
}

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log("Server started On port " + PORT);
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
