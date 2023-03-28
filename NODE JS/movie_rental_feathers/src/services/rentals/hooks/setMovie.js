module.exports = function () {
  return async (context) => {
    const id = context.id;
    const rentalService = context.app.service("/api/rentals/");
    const rental = await rentalService.get(id);
    context.params.movie = rental.movie;
    if (rental.dateIn == null) context.params.count = 1;
    return context;
  };
};
