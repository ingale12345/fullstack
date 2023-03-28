module.exports = function () {
  return async (context) => {
    const movieService = context.app.service("/api/movies/");
    const movie = await movieService.get(context.data.movieId);
    context.data.rentalFee = movie.dailyRentalRate * 10;
    context.data.movie = movie;
    context.data.movie.numberInStock -= 1;
    return context;
  };
};
