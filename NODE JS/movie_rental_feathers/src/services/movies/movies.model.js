const Joi = require("joi");
Joi.objectId = require("@feathers-plus/validate-joi-mongodb").objectId;
const schema = Joi.object({
  title: Joi.string().min(5).max(50).required(),
  genreId: Joi.objectId(),
  dailyRentalRate: Joi.number().min(0).max(255).required(),
  numberInStock: Joi.number().min(0).max(255).required(),
  liked: Joi.boolean().default(false).required(),
});

module.exports = schema;
