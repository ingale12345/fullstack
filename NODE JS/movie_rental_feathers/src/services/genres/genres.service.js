// Initializes the `genres` service on path `/api/genres`
const { Genres } = require("./genres.class");
const createModel = require("../../models/genres.model");
const hooks = require("./genres.hooks");

module.exports = function (app) {
  const options = {
    Model: createModel(app),
    paginate: app.get("paginate"),
  };

  // Initialize our service with any options it requires
  app.use("/api/genres", new Genres(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service("api/genres");

  service.hooks(hooks);
};
