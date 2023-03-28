const { authenticate } = require("@feathersjs/authentication").hooks;
const validate = require("@feathers-plus/validate-joi");
const schema = require("./rentals.model");
const fetchCustomer = require("../../services/rentals/hooks/fetchCustomer");
const fetchMovie = require("../../services/rentals/hooks/fetchMovie");
const decreaseNumberInStock = require("../../services/rentals/hooks/decreaseNumberInStock");
const demoHook = require("../../services/rentals/hooks/demoHook");
const increaseNumberInStock = require("./hooks/increaseNumberInStock");
const setMovie = require("./hooks/setMovie");
const dateIn = require("./hooks/dateIn");
const isDateNull = require("./hooks/isDateNull");

module.exports = {
  before: {
    all: [],
    find: [],
    get: [],
    create: [
      authenticate("jwt"),
      validate.form(schema, { absortEarly: false }),
      fetchCustomer(),
      fetchMovie(),
    ],
    update: [authenticate("jwt")],
    patch: [authenticate("jwt"), dateIn(), setMovie()], // isDateNull(),
    remove: [authenticate("jwt"), setMovie()], // isDateNull(),
  },

  after: {
    all: [],
    find: [],
    get: [],
    create: [decreaseNumberInStock()],
    update: [],
    patch: [increaseNumberInStock()],
    remove: [increaseNumberInStock()],
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
