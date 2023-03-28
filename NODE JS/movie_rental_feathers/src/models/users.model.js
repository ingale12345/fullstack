// users-model.js - A mongoose model
//
// See http://mongoosejs.com/docs/models.html
// for more of what you can do here.
module.exports = function (app) {
  const modelName = "users";
  const mongooseClient = app.get("mongooseClient");
  const schema = new mongooseClient.Schema(
    {
      name: {
        type: String,
        required: true,
        minLength: [5, "Name should be greater than 5"],
        maxLength: [50, "Name should be less Than 50"],
      },
      email: {
        type: String,
        required: true,
        minLength: [5, "Email should be minimum 5 digits"],
        maxLength: [255, "Email should be maximum 255 digits"],
      },
      password: {
        type: String,
        minLength: [5, "Password should be minimum 5 digits"],
        maxLength: [1024, "Password should be maximum 1024 digits"],
      },
      isAdmin: {
        type: Boolean,
        default: false,
      },
    },
    {
      timestamps: true,
    }
  );

  // This is necessary to avoid model compilation errors in watch mode
  // see https://mongoosejs.com/docs/api/connection.html#connection_Connection-deleteModel
  if (mongooseClient.modelNames().includes(modelName)) {
    mongooseClient.deleteModel(modelName);
  }
  return mongooseClient.model(modelName, schema);
};
