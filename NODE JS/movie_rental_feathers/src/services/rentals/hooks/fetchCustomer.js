module.exports = function () {
  return async (context) => {
    const customerService = context.app.service("/api/customers/");
    const customer = await customerService.get(context.data.customerId);
    context.data.customer = {
      name: customer.name,
      phone: customer.phone,
    };

    return context;
  };
};
