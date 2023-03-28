module.exports = function (req, res, next) {
  console.log("Authentication Completed Successfully.....");
  next();
};
