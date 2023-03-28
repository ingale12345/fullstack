module.exports.logger = function (req, res, next) {
  console.log("Logging...");
  next();
};
