const Joi = require("joi");
const schema = Joi.object({
  name: Joi.string().min(3).max(50).required(),
  phone: Joi.string().min(7).max(10).required(),
  isGold: Joi.boolean().required(),
});

module.exports = schema;
