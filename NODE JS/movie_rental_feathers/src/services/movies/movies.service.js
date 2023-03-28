// Initializes the `movies` service on path `/api/movies`
const { Movies } = require("./movies.class");
const createModel = require("../../models/movies.model");
const hooks = require("./movies.hooks");

module.exports = function (app) {
  const options = {
    Model: createModel(app),
    paginate: app.get("paginate"),
  };

  // Initialize our service with any options it requires
  app.use("/api/movies", new Movies(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service("api/movies");

  service.hooks(hooks);
};
