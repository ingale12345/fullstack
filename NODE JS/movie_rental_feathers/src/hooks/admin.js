module.exports = function () {
  return (context) => {
    console.log(context);
    if (!context.params.user.isAdmin) throw new Error("Access Forbidden");
    return context;
  };
};
