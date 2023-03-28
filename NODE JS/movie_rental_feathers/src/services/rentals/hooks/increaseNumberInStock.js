module.exports = function () {
  return async (context) => {
    if (context.method === "remove") {
      // context.result = "Rental removed successfully";
      if (!context.params.count === 1) {
        const movieService = context.app.service("/api/movies/");
        await movieService.patch(context.params.movie._id, {
          $inc: { numberInStock: 1 },
        });
      }
      return context;
    } else if (context.method === "patch") {
      if (context.params.count === 1) {
        const movieService = context.app.service("/api/movies/");
        await movieService.patch(context.params.movie._id, {
          $inc: { numberInStock: 1 },
        });
        context.params.count = 0;
        context.result = "Rental patched successfully";
      } else {
        context.result = "Rental patched already";
      }
    }
    return context; //
  };
};
