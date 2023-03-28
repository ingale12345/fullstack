const { authenticate } = require("@feathersjs/authentication").hooks;
const validate = require("@feathers-plus/validate-joi");
const schema = require("./users.model");
const { hashPassword, protect } =
  require("@feathersjs/authentication-local").hooks;

module.exports = {
  before: {
    all: [],
    find: [],
    get: [],
    create: [
      validate.form(schema, { abortEarly: false }),
      hashPassword("password"),
    ],
    update: [
      validate.form(schema, { abortEarly: false }),
      hashPassword("password"),
    ],
    patch: [
      validate.form(schema, { abortEarly: false }),
      hashPassword("password"),
    ],
    remove: [],
  },

  after: {
    all: [
      // Make sure the password field is never sent to the client
      // Always must be the last hook
      protect("password"),
    ],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: [],
  },

  error: {
    all: [],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: [],
  },
};
