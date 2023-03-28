module.exports = function () {
  return async (context) => {
    context.data.dateIn = new Date();
    const rentalService = context.app.service("/api/rentals/");
    const rental = await rentalService.get(context.id);
    if (rental.dateIn == null) context.params.count = 1;
    return context;
  };
};
