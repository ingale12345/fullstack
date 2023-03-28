const Genre = require("../../../models/genres.model");
module.exports = function () {
  return async (context) => {
    // console.log(context.data);
    const genreService = context.app.service("/api/genres");

    const genre = await genreService.get(context.data.genreId);
    if (!genre) throw new Error("Genre is not found");
    context.data.genre = genre;
    return context;
  };
};
