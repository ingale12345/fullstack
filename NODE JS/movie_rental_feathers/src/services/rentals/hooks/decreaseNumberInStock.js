module.exports = function () {
  return async (context) => {
    const movieService = context.app.service("/api/movies/");
    await movieService.patch(context.data.movie._id, {
      $inc: { numberInStock: -1 },
    });
    return context;
  };
};
