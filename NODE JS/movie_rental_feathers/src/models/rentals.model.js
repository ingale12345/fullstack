// rentals-model.js - A mongoose model
//
// See http://mongoosejs.com/docs/models.html
// for more of what you can do here.
const { deleteModel } = require("mongoose");
const customerSchema = require("./customerSchema");
const movieSchema = require("./movieSchema");
module.exports = function (app) {
  const modelName = "rentals";
  const mongooseClient = app.get("mongooseClient");
  const { Schema } = mongooseClient;
  const schema = new Schema(
    {
      customer: {
        type: new Schema({
          name: {
            type: String,
            required: true,
            minLength: [3, "Name should be greater than 3"],
            maxLength: [50, "Name should be less Than 50"],
          },
          phone: {
            type: String,
            required: true,
            minLength: [7, "phone should be minimum 7 digits"],
            maxLength: [10, "phone should be maximum 10 digits"],
          },
        }),
        required: true,
      },
      movie: {
        type: movieSchema(app),
      },
      rentalFee: {
        type: Number,
        required: true,
        min: 0,
      },
      dateOut: {
        type: Date,
        default: Date.now(),
      },
      dateIn: {
        type: Date,
        default: null,
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
