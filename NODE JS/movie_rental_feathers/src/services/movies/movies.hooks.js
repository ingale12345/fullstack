const { authenticate } = require("@feathersjs/authentication").hooks;
const validate = require("@feathers-plus/validate-joi");
const schema = require("./movies.model");
const admin = require("../../hooks/admin");
const moviesHook = require("../../services/movies/hooks/moviesHook");
module.exports = {
  before: {
    all: [],
    find: [],
    get: [],
    create: [
      authenticate("jwt"),
      validate.form(schema, { abortEarly: false }),
      moviesHook(),
    ],
    update: [
      authenticate("jwt"),
      validate.form(schema, { abortEarly: false }),
      moviesHook(),
    ],
    patch: [authenticate("jwt")], //, moviesHook()
    remove: [authenticate("jwt")],
  },

  after: {
    all: [],
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
