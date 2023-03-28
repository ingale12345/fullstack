module.exports = function () {
  return async (context) => {
    const rentalService = context.app.service("/api/rentals/");
    const rental = await rentalService.get(context.id);
    if (rental.dateIn != null) throw new Error("Movie already returned");

    return context;
  };
};
