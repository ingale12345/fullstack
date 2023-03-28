const mongoose = require("mongoose");
require("dotenv").config();
async function connetion() {
  try {
    const res = await mongoose.connect(process.env.url);
    console.log("connected to db ");
  } catch (error) {
    console.log(error);
  }
}
connetion();
const movieSchema = new mongoose.Schema({
  name: {
    type: String,
    min: [5, "value should be greater than 5"],
    max: [50, "value should be less than 50"],
  },
  genre: {
    type: [String],
    validate: {
      validator: function (value) {
        return value && value.length > 0;
      },
    },
  },
});
const Movie = mongoose.model("movie", movieSchema);
const movie = { name: "K.G.F - Chapter 2", genre: ["adventure", "drama"] };

class MoviesCrud {
  async addMovie(movieObj) {
    try {
      const movie = new Movie(movieObj);
      const result = await movie.save();
      console.log(result);
      console.log("Object saved in to database");
    } catch (error) {
      console.log(error);
    }
  }
  async displayAllMovies() {
    try {
      const result = await Movie.find();

      return JSON.stringify(result);
    } catch (error) {}
  }
}
module.exports = MoviesCrud;
