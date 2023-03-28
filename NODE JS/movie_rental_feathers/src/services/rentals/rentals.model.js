const Joi = require("joi");
Joi.objectId = require("@feathers-plus/validate-joi-mongodb").objectId;
const schema = Joi.object({
  customerId: Joi.objectId().required(),
  movieId: Joi.objectId().required(),
});
module.exports = schema;
