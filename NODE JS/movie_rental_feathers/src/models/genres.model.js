// genres-model.js - A mongoose model
//
// See http://mongoosejs.com/docs/models.html
// for more of what you can do here.
const genreSchema = require("./genreSchema");
module.exports = function (app) {
  const mongooseClient = app.get("mongooseClient");
  const modelName = "genres";

  // This is necessary to avoid model compilation errors in watch mode
  // see https://mongoosejs.com/docs/api/connection.html#connection_Connection-deleteModel
  if (mongooseClient.modelNames().includes(modelName)) {
    mongooseClient.deleteModel(modelName);
  }
  return mongooseClient.model(modelName, genreSchema(app));
};
