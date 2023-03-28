const express = require("express");
const crud = require("./movie_crud");
const Joi = require("joi");
require("dotenv").config();
const app = express();
app.use(express.json());
let movies = [
  { id: 1, name: "K.G.F - Chapter 2", genre: ["adventure", "drama"] },
  { id: 2, name: "Dil Se", genre: ["adventure", "action", "drama"] },
  { id: 3, name: "Singham", genre: ["adventure", "drama", "action", "sci-fi"] },
  { id: 4, name: "Tarzen", genre: ["comedy", "drama"] },
  { id: 5, name: "Motu Patalu", genre: ["animation", "adventure", "action"] },
];

const validateMovie = (movie) => {
  const schema = Joi.object({
    name: Joi.string().min(3).max(20).required(),
    genres: [Joi.string()],
  });
  const { error } = schema.validate(movie);
  return error;
};
app.get("/", (req, res) => {
  /*const movie = { name: "K.G.F - Chapter 2", genre: ["adventure", "drama"] };
  let m1 = new crud();
  m1.addMovie(movie);
  res.send("Movie Added successfully");*/

  movie = {
    name: "najdhja",
    genere: ["asa", "aad", "sasad"],
  };

  let m1 = new crud();

  const result = m1.displayAllMovies();
  result.then((moviesObj) => {
    res.send(moviesObj);
  });
});

// Get all Movies
app.get("/api/movies", (req, res) => {
  res.status(200).send(movies);
});
// Get particular Movie
app.get("/api/movies/:id", (req, res) => {
  const { id } = req.params;

  const movie = movies.find((movie) => movie.id == id);

  if (!movie) {
    return res.status(404).send("Id Not Found...");
  }

  res.send(movie);
});
// Create new Movie
app.post("/api/movies", (req, res) => {
  try {
    const movie = {
      id: movies.length + 1,
      name: req.body.name,
      genres: req.body.genres,
    };

    const movieName = movies.find((movie) => movie.name === movie);
    if (!validateMovie(movie)) {
      return res.status(400).send("Bad Request");
    } else if (movieName) {
      return res.status(400).send("Bad Request...");
    }

    movies.push(movie);
    res.status(200).send(movies);
  } catch (error) {
    console.log("Welcome to error message");
  }
});
// Update Movie
app.put("/api/movies/:id", (req, res) => {
  const id = parseInt(req.params.id);

  const updatedMovie = {
    id: id,
    name: req.body.name || movies[id - 1].name,

    genres: req.body.genres || movies[id - 1].genres,
  };

  //   const movieName = movies.find((movie) => movie.name === movie);

  if (!validateMovie(updatedMovie)) {
    return res.status(400).send("Bad Request");
  }

  movies.find((movie) => {
    if (movie.id === id) {
      movie.name = updatedMovie.name;
      movie.genres = updatedMovie.genres;
    }
  });

  res.status(200).send(movies);
});

// patch update
app.patch("/api/movies/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const genres = req.body.genres || movies[id - 1].genres;
  const updatedMovie = {
    id: id,
    name: req.body.name || movies[id - 1].name,

    genres: req.body.genres || movies[id - 1].genres,
  };

  console.log(updatedMovie);
  //   const movieName = movies.find((movie) => movie.name === movie);

  if (!validateMovie(updatedMovie)) {
    return res.status(400).send("Bad Request");
  }

  movies.find((movie) => {
    if (movie.id === id) {
      movie.name = updatedMovie.name;
      movie.genres = updatedMovie.genres;
    }
  });

  movies[id - 1].genres = [
    ...movies[id - 1].genres.filter((d) => !genres.includes(d)),
    ...genres.filter((d) => !movies[id - 1].genres.includes(d)),
    ...movies[id - 1].genres.filter((d) => genres.includes(d)),
  ];
  res.status(200).send(movies);
});

// Delete Movie
app.delete("/api/movies/:id", (req, res) => {
  const id = parseInt(req.params.id);

  const movie = movies.find((movie) => movie.id === id);

  if (!movie) {
    return res.status(404).send("Id Not Found...");
  }

  movies.splice(
    movies.findIndex((movie) => movie.id === id),
    1
  );

  res.status(200).send(movies);
});

//  Delete by genres

app.delete("/api/movies/genres/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const genres = req.body.genres;

  console.log(genres);

  const movie = movies.find((movie) => movie.id === id);

  if (!movie) {
    return res.status(404).send("Id Not Found...");
  }

  movies[id - 1].genres = movies[id - 1].genres.filter((value) => {
    return !genres.includes(value);
  });

  res.status(200).send(movies);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log("Server started On port " + PORT);
});
